<?php
       
        $file_path = '/home/site/data.txt';
        $data_lines = file($file_path, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
        foreach ($data_lines as $line) {
            
            list($first_name, $last_name) = explode(' ', $line);

            
            echo "<tr>";
            echo "<td>$first_name</td>";
            echo "<td>$last_name</td>";
            echo "</tr>";
            echo "</br>"
        }

?>