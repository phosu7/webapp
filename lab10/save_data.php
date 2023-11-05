<?php
    $first_name = $_POST["first_name"];
    $last_name = $_POST["last_name"];
    
    $data = PHP_EOL . $first_name . " " . $last_name;
    $file_path = '/home/site/data.txt';
    file_put_contents($file_path, $data, FILE_APPEND);
?>
