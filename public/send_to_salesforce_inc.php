<?php

/*
このファイルを、何かしらのPHPファイルからincludeなりrequireして、


send_contact_data_to_salesforce2019($_POST)
↑こんな感じで使えばよくね？サニタイズは必要と思う

*/

function test(){
	echo 'success';
	}
//Sales force用データ生成
function set_data_to_salesforce2019 ($data) {

	
	$programTxt='ayusa-short';
	
/* 本番用 */
	$array = array(
		'oid' => '00D30000000p3II',
		//'00N300000068fwe' => $data['birth_month'].'/'.$data['birth_day'].'/'.$data['birth_year'], //birthOfDate
		'00N300000068fwe' => $data['birthday'], //birthOfDate
		'Primary Activity' => '',
		'00N30000008QnVM' => $data['affiliation'], // educationLevel
		'00N300000068JwE' => 'Participant', // unknown
		'00N300000068Glm' => $programTxt, // IntraxPrograms(ex.Internship->Internship)
		'00N3000000692oE' => 'Japan', // IntraxRegion
		'lead_source' => 'Web Form',
		'00N300000069Noq' => 'Web Form', // LeadSourceTag
		'00N3000000692rD' => 'Japanese', // WebFormLanguage
		/*'00N30000007BGW0' => $inprogOp, // IntraxProgramOptions*/
		'00N30000007BGW0' => '', // IntraxProgramOptions
		'first_name' => $data['first_name'],
		'last_name' => $data['last_name'],
		'first_name_local' => $data['first_name'],
		'last_name_local' => $data['last_name'],
		'00N30000008QJrm' => $data['first_name_kana'],
		'00N30000008QJrw' => $data['last_name_kana'],
		'message'=>$data['message'],
		'year' => '',
		'month' => '',
		'day' => '',
		'email' => $data['email'],
		'zip' => $data['zipcode'],
		'street' => $data['pref'].' '.$data['address1'].' '.$data['address2'],
		'phone' => $data['phone'],
		'mobile' => '',
		'yusoflg' => $hope,
		'00N300000068Glc' => $data['gender'], // gender
		'reference' => $refce,
		'00N400000021x8T' => '', // unknown
	  '00N300000068ZCr' => '', // How Heard
	  '00N30000007ClGQ' =>$data['message'],
		'submit1' => 'submit',
	);

	return $array;
}

// curlダメそうなので、file_put_contentで
function send_post2019 ($data) {
	$url = 'https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8';
//	$url = 'https://test.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8';
	$content = http_build_query($data);
	$options = array('http' => array('method' => 'POST','content' => $content));
	
	// デバッグ用ログ
	error_log("Salesforce送信データ: " . print_r($data, true));
	error_log("Salesforce送信URL: " . $url);
	
	$contents = file_get_contents($url,false,stream_context_create($options));
	
	// レスポンスログ
	if ($contents === false) {
		error_log("Salesforce送信エラー: file_get_contents failed");
	} else {
		error_log("Salesforce送信成功: " . $contents);
	}
	
	return $contents;
}



//Sales forceとの連携

//お問い合わせテスト
function send_contact_data_to_salesforce2019 ($data) {
	//$data = $data->gets();//これはmw wp form用


/* 本番用 */
	//$data['hope'] = (isset($data['hope']))? '希望する':'希望しない';
	$array = set_data_to_salesforce2019($data);


	send_post2019($array);

}

/*
本番のとき下記を有効
これはWP用なので無視
*/

//add_action('mwform_after_send_mw-wp-form-4397','send_contact_data_to_salesforce2019');
