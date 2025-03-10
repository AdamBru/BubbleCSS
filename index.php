<?php
function listFiles($dir) {
    $files = scandir($dir);
    echo "<ul>";
    foreach ($files as $file) {
        // Pomijamy '.' i '..'
        if ($file != "." && $file != "..") {
            $path = $dir . "/" . $file;
            if (is_dir($path)) {
                echo "<li><strong>[Katalog]</strong> <a href='" . $path . "'>" . $file . "</a></li>";
            } else {
                echo "<li><a href='" . $path . "'>" . $file . "</a></li>";
            }
        }
    }
    echo "</ul>";
}

$directory = '.';
listFiles($directory);
?>
