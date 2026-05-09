<?php

session_start();

include 'config/db.php';

$store_id = "YOUR_STORE_ID";
$store_passwd = "YOUR_STORE_PASSWORD";

$amount = $_POST['amount'];

$post_data = array();

$post_data['store_id'] = $store_id;
$post_data['store_passwd'] = $store_passwd;

$post_data['total_amount'] = $amount;
$post_data['currency'] = "BDT";

$post_data['tran_id'] = uniqid();

$post_data['success_url'] =
"http://localhost/ABR-PANEL/success.php";

$post_data['fail_url'] =
"http://localhost/ABR-PANEL/fail.php";

$post_data['cancel_url'] =
"http://localhost/ABR-PANEL/cancel.php";

$post_data['cus_name'] = "ABR User";

$post_data['cus_email'] = "user@email.com";

$post_data['cus_add1'] = "Bangladesh";

$post_data['cus_phone'] = "01700000000";

$direct_api_url =
"https://sandbox.sslcommerz.com/gwprocess/v4/api.php";

$handle = curl_init();

curl_setopt($handle, CURLOPT_URL, $direct_api_url);

curl_setopt($handle, CURLOPT_TIMEOUT, 30);

curl_setopt($handle, CURLOPT_CONNECTTIMEOUT, 30);

curl_setopt($handle, CURLOPT_POST, 1);

curl_setopt($handle, CURLOPT_POSTFIELDS, $post_data);

curl_setopt($handle, CURLOPT_RETURNTRANSFER, true);

curl_setopt($handle, CURLOPT_SSL_VERIFYPEER, FALSE);

$content = curl_exec($handle);

$code = curl_getinfo($handle, CURLINFO_HTTP_CODE);

if($code == 200){

$sslcz = json_decode($content,true);

if(isset($sslcz['GatewayPageURL'])){

header("Location: ".$sslcz['GatewayPageURL']);

}else{

echo "Payment Gateway Error";

}

}else{

echo "Connection Error";

}
?> 
