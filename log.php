<?php
// Get the message from the POST request
$message = $_POST['message'];

// Append the message to logs.txt
$file = 'logs.txt';
$current = file_get_contents($file);
$current .= $message . "\n";
file_put_contents($file, $current);
?>
