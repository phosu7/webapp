<?php
    $first_name = $_POST["first_name"];
    $last_name = $_POST["last_name"];
    
    $data = $first_name . " " . $last_name . PHP_EOL; 
    
    
    $file_path = '/var/www/html/save_file/data.txt'; 
    
    $file = fopen($file_path, "a");
    
    if ($file) {
        
        fwrite($file, $data);
        fclose($file);
        
        echo "Data saved successfully!";
    } else {
        echo "Error: Unable to open the file for writing.";
    }
?>
