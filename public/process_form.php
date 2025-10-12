<?php
header('Content-Type: application/json'); // クライアントにJSONを返すことを伝える
header("Access-Control-Allow-Origin: *"); // CORS許可。本番環境では具体的なドメインに制限してください。
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, X-Requested-With"); // X-Requested-Withも許可

// リクエストメソッドがOPTIONSの場合は、CORSプリフライトリクエストなのでOKを返す
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// エラー報告を有効にする (開発時のみ)
// ini_set('display_errors', '1');
// error_reporting(E_ALL);

require_once __DIR__ . '/SimpleMailSender.php'; // SimpleMailSender.phpへの正しいパスを確認

use util\SimpleMailSender;

// メール送信部品の設定
$host = "sv2223.xserver.jp";
$port = 587;
$user = "intrax@intraxjp.com";
$pass = "Intrax246";
$mailSender = new SimpleMailSender($host, $port, $user, $pass);

// ----------------------------------------------------
// JSONデータを受け取る
// ----------------------------------------------------
$input = file_get_contents('php://input');
$data = json_decode($input, true); // true で連想配列としてデコード

$response = ['success' => false, 'message' => '']; // クライアントに返すレスポンス初期化

if ($data === null && json_last_error() !== JSON_ERROR_NONE) {
    $response['message'] = '無効なJSONデータが送信されました。';
    echo json_encode($response);
    exit();
}

// ----------------------------------------------------
// フォームデータの取得とバリデーション
// ----------------------------------------------------
$lastName = htmlspecialchars($data['lastName'] ?? '');
$firstName = htmlspecialchars($data['firstName'] ?? '');
$phone = htmlspecialchars($data['phone'] ?? '');
$email = htmlspecialchars($data['email'] ?? '');
$message = htmlspecialchars($data['message'] ?? '');

// 必須項目の簡易バリデーション (JavaScript側でも行うが、サーバー側でも必須)
if (empty($lastName) || empty($firstName) || empty($email) || empty($message)) {
    $response['message'] = 'Required fields are missing.';
    echo json_encode($response);
    exit();
}

// メールアドレスの形式バリデーション
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $response['message'] = 'Invalid email address format.';
    echo json_encode($response);
    exit();
}

// ----------------------------------------------------
// メール本文の組み立て
// ----------------------------------------------------
$mailSubject = "[Ayusa Summer Camp] New Inquiry Received";
$adminMailBody = <<<EOD
A new inquiry has been received for the Summer Camp in Japan 2026 program.

* Name: {$firstName} {$lastName}
* Phone: {$phone}
* Email: {$email}
* Message:
{$message}

This inquiry was submitted through the Summer Camp Japan 2026 website contact form.

EOD;

$userMailBody = <<<EOD
Dear {$firstName} {$lastName},

Thank you for your interest in the Ayusa Summer Camp in Japan 2026 program!

We have received your inquiry with the following details:

* Name: {$firstName} {$lastName}
* Phone: {$phone}
* Email: {$email}
* Message:
{$message}

Our team will review your inquiry and respond within 1-2 business days. If you have any urgent questions, please feel free to contact us directly.

We look forward to helping you create an unforgettable experience in Japan!

Best regards,
Ayusa International Japan Team

------------------------------------------------------------
Ayusa International Japan
Marinx Tower 7F, 1-9-11 Kaigan, Minato-ku,
Tokyo, 105-0022, Japan

Tel: +81.3.3434.2636
Fax: +81.3.3434.2617
Email: intrax@intraxjp.com
Website: https://www.intraxjp.com
------------------------------------------------------------

EOD;

$fromHeader = ['intrax@intraxjp.com', 'Ayusa International Japan'];
$adminEmail = "intrax@intraxjp.com";
//$adminEmail = "akioiwaki@gmail.com";
// ----------------------------------------------------
// メール送信処理 (管理者へ)
// ----------------------------------------------------
$sendResult = false;
try {
    $sendResult = $mailSender->send($adminEmail, $fromHeader, $mailSubject, $adminMailBody);
    if (!$sendResult) {
        $response['message'] = 'Failed to send email to administrator.';
    } else {
        // 管理者への送信が成功したら、ユーザーへ自動返信メールを送る
        $mailSender->clearAttachments();
        
		
		//ユーザーの自動送信を有効にしたくば、下記を有効に
		//$userSendResult = $mailSender->send($email, $fromHeader, $mailSubject, $userMailBody);
$userSendResult = true;
        if ($userSendResult) {
            $response['success'] = true;
            $response['message'] = 'Thank you for your inquiry! We have received your message and will respond within 1-2 business days.';

            // ----------------------------------------------------
            // ★ Form submission logging functionality ★
            // ----------------------------------------------------
            $logFile = 'form_submissions.log'; // Log file path and name
            $logEntry = date('Y-m-d H:i:s') . " | " . // Timestamp
                        "Last Name: " . ($lastName ?: 'N/A') . ", " .
                        "First Name: " . ($firstName ?: 'N/A') . ", " .
                        "Email: " . ($email ?: 'N/A') . ", " .
                        "Phone: " . ($phone ?: 'N/A') . ", " .
                        "Message: " . str_replace(["\n", "\r"], ' ', ($message ?: 'N/A')) . "\n"; // Replace line breaks with spaces

            // Append to file
            if (file_put_contents($logFile, $logEntry, FILE_APPEND | LOCK_EX) === false) {
                // Log file write failed
                error_log("Failed to write to log file: " . $logFile);
                // Keep user response as success, record as internal log error
            }
            // ----------------------------------------------------
            // ★ End of logging functionality ★
            // ----------------------------------------------------

            // セールスフォースへの送信
            $salesforce_data = [
                "last_name"       => $lastName,
                "first_name"      => $firstName,
                "phone"           => $phone,
                "email"           => $email,
                "message"         => $message
            ];
            
             include 'send_to_salesforce_inc.php';
             if (function_exists('send_contact_data_to_salesforce2019')) {
                 send_contact_data_to_salesforce2019($salesforce_data);
             } else {
                 error_log("Salesforce function 'send_contact_data_to_salesforce2019' not found.");
             }

        } else {
            $response['message'] = 'Your inquiry was sent successfully, but the automatic reply email failed to send.';
        }
    }
} catch (\Exception $e) {
    error_log("Mail sending error: " . $e->getMessage());
    $response['message'] = "An error occurred while sending the email. Please contact the system administrator for details.";
}

// 最終的なレスポンスをJSON形式でクライアントに返す
echo json_encode($response);
exit;?>