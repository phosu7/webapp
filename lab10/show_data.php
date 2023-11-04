<?php
       
        $file_path = '/var/www/html/save_file/data.txt';
        $data_lines = file($file_path, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
        foreach ($data_lines as $line) {
            // Split each line into first name and last name
            list($first_name, $last_name) = explode(' ', $line);

            // Output the data in a table row
            echo "<tr>";
            echo "<td>$first_name</td>";
            echo "<td>$last_name</td>";
            echo "</tr>";
        }

        ?>