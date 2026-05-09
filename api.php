<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

echo json_encode([
    "status" => "success",
    "message" => "ABR Panel Connected",
    "time" => date("H:i:s")
]);
?>
