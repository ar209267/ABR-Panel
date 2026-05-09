
?>
<?php
// Security Layer: ডাটা স্যানিটাইজেশন
$bdt_amount = filter_input(INPUT_POST, 'amount', FILTER_SANITIZE_NUMBER_FLOAT);
$exchange_rate = 130;

if ($bdt_amount >= 10) { // সর্বনিম্ন ১০ টাকা এড করার লিমিট
    $usd_to_add = $bdt_amount / $exchange_rate;
    
    // SSLCommerz বা পেমেন্ট গেটওয়েতে পাঠানোর আগে ভেরিফিকেশন
    // এখানে আপনার মার্চেন্ট আইডি এবং সিক্রেট কি ব্যবহার করবেন
    $post_data = array();
    $post_data['total_amount'] = $bdt_amount; // গেটওয়েতে টাকা (BDT) পাঠাচ্ছি
    $post_data['currency'] = "BDT";
    $post_data['tran_id'] = "ABR" . uniqid();
    
    // সেশন বা ডাটাবেজে এই USD পরিমাণটি সেভ করে রাখুন যাতে পেমেন্ট সাকসেস হলে এটা এড হয়
    $_SESSION['pending_usd'] = $usd_to_add;
    
    // এখন গেটওয়েতে রিডাইরেক্ট করুন
    echo "Redirecting to BKash/Nagad...";
} else {
    echo "সর্বনিম্ন ১০ টাকা এড করতে হবে।";
}
?>
