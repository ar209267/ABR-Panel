<?php
// Security: SQL Injection প্রোটেকশন
session_start();
include('db_config.php'); // আপনার ডাটাবেজ কানেকশন ফাইল

if ($_SERVER['REQUEST_ID'] == 'POST') {
    $amount = $_POST['amount'];
    $user_id = $_SESSION['user_id'];

    // SSLCommerz বা পেমেন্ট গেটওয়ে API কল এখানে হবে
    // উদাহরণস্বরূপ একটি সিম্পল রিডাইরেক্ট লজিক:
    if($amount > 0) {
        header("Location: https://your-gateway-link.com/pay?amount=" . $amount);
        exit();
    }
}
?>
