<?php
    $first_name = $_POST["first_name"];
    $last_name = $_POST["last_name"];
    
    $data = $first_name . " " . $last_name . "\n"; 
    $file_path = '/home/site/data.txt';
    file_put_contents($file_path, $data, FILE_APPEND);
?>
