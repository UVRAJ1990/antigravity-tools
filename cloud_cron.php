<?php
/**
 * Antigravity Tools — Live Server Cloud Cron Engine
 * Runs 24/7 on your web server even when your personal PC is turned OFF.
 */

header('Content-Type: text/plain; charset=utf-8');

echo "==================================================\n";
echo "🚀 Live Server 24/7 Cloud Automation Engine\n";
echo "==================================================\n";

$base_url = "https://antigravitytools.app";
$indexnow_key = "a7e93b12f45c81d293847e2f1029384c";
$indexnow_file = "a7e93b12f45c81d293847e2f1029384c.txt";

// 1. IndexNow Cloud Submission
$payload = array(
    "host" => "antigravitytools.app",
    "key" => $indexnow_key,
    "keyLocation" => $base_url . "/" . $indexnow_file,
    "urlList" => array($base_url . "/", $base_url . "/sitemap.xml", $base_url . "/feed.xml")
);

$ch = curl_init("https://api.indexnow.org/IndexNow");
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($payload));
curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type: application/json; charset=utf-8'));

$response = curl_exec($ch);
$http_code = curl_getinfo($ch, CURLINFO_HTTP_CODE);
curl_close($ch);

echo "[IndexNow] Submitted to Search Engines (Status Code: " . $http_code . ")\n";

// 2. Ping-O-Matic Cloud Directory Ping
$ping_ch = curl_init("https://rpc.pingomatic.com/");
$xml_data = '<?xml version="1.0"?><methodCall><methodName>weblogUpdates.ping</methodName><params><param><value>Antigravity Tools</value></param><param><value>https://antigravitytools.app</value></param></params></methodCall>';

curl_setopt($ping_ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ping_ch, CURLOPT_POST, true);
curl_setopt($ping_ch, CURLOPT_POSTFIELDS, $xml_data);
curl_setopt($ping_ch, CURLOPT_HTTPHEADER, array('Content-Type: text/xml'));

$ping_resp = curl_exec($ping_ch);
$ping_code = curl_getinfo($ping_ch, CURLINFO_HTTP_CODE);
curl_close($ping_ch);

echo "[Ping-O-Matic] Directory Hub Pinged (Status Code: " . $ping_code . ")\n";

echo "\n🎉 24/7 Cloud Execution Complete!\n";
?>
