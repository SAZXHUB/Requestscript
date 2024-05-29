<?php
$message = $_POST["message"];
$logFile = fopen("logs.txt", "a");
fwrite($logFile, $message . PHP_EOL);
fclose($logFile);
?>
