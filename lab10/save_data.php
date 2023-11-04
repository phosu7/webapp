<?php
    $first_name = $_POST["first_name"];
    $last_name = $_POST["last_name"];
    
    $data = $first_name . " " . $last_name . PHP_EOL; 
    $file_path = '/home/site/save_file/data.txt'; 
    $file = fopen($file_path, "a");
    if ($file) {
        
        fwrite($file, $data);
        fclose($file);
        echo "added!"
    } else {
        echo "Error: file not opened for writing.";
    }
?>
