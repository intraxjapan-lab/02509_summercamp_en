<?php

namespace util;

/**
 * シンプルなメール送信クラス（PHPMailer不要版）
 * Xserverの標準mail()関数を使用
 */
class SimpleMailSender
{
    private $host;
    private $port;
    private $username;
    private $password;

    public function __construct(string $host, ?int $port = 25, string $userName, string $password)
    {
        $this->host = $host;
        $this->port = $port;
        $this->username = $userName;
        $this->password = $password;
    }

    public function addAttachment($path, $name = '')
    {
        // 簡易版では添付ファイル機能は省略
        return true;
    }

    public function clearAttachments()
    {
        // 簡易版では何もしない
    }

    /**
     * メールを送信します（PHP標準mail()関数使用）
     */
    public function send(string $email, array $fromHeader, string $subject, string $body): bool
    {
        // Fromヘッダーの検証
        if (count($fromHeader) == 0 || count($fromHeader) > 2) {
            return false;
        }
        
        $fromEmail = $fromHeader[0];
        if (is_null($fromEmail) || strlen($fromEmail) === 0) {
            return false;
        }
        
        $fromName = null;
        if (count($fromHeader) == 2) {
            $fromName = $fromHeader[1];
        }

        // 宛先メールアドレスの検証
        if (strlen($email) === 0) {
            return false;
        }

        // メール本文の検証
        if (strlen($body) === 0) {
            return false;
        }

        // ヘッダーの構築
        $headers = [];
        
        if (is_null($fromName)) {
            $headers[] = "From: " . $fromEmail;
        } else {
            $headers[] = "From: " . mb_encode_mimeheader($fromName) . " <" . $fromEmail . ">";
        }
        
        $headers[] = "Reply-To: " . $fromEmail;
        $headers[] = "Content-Type: text/plain; charset=UTF-8";
        $headers[] = "Content-Transfer-Encoding: 8bit";
        $headers[] = "X-Mailer: PHP/" . phpversion();

        $headerString = implode("\r\n", $headers);

        // メール送信
        try {
            $result = mail(
                $email,
                mb_encode_mimeheader($subject),
                $body,
                $headerString
            );
            return $result;
        } catch (Exception $e) {
            error_log("Mail sending error: " . $e->getMessage());
            return false;
        }
    }
}
