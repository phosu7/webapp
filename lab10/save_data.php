<?php
    $first_name = $_POST["first_name"];
    $last_name = $_POST["last_name"];
    
    $data = "\r\n" . $first_name . " " . $last_name;
    $data .= PHP_EOL; 
    $file_path = '/home/site/data.txt';
    file_put_contents($file_path, $data, FILE_APPEND);
?>
