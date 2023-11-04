<?php
    $first_name = $_POST["first_name"];
    $last_name = $_POST["last_name"];
    
    // Combine the data
    $data = $first_name . " " . $last_name . PHP_EOL; // Add a newline for each entry
    
    // Define the file path outside of the web server's root directory
    $file_path = '/var/www/html/save_file/data.txt'; // Replace with the actual path
    
    // Open the file for appending
    $file = fopen($file_path, "a");
    
    if ($file) {
        // Write the data to the file
        fwrite($file, $data);
        
        // Close the file
        fclose($file);
        
        echo "Data saved successfully!";
    } else {
        echo "Error: Unable to open the file for writing.";
    }
?>
