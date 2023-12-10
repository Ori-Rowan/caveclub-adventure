<?php

// get all images from the items, background, and sprites folders
$images = [];

$subdirs = ['items', 'background', 'sprites'];

foreach ($subdirs as $subdir) {
    $directory = '../src/img/' . $subdir . '/';
    $files = scandir($directory);
    $subdirs = [];
    foreach ($files as $file) {
        if ($file !== '.' && $file !== '..') {
            $images[] = $subdir . "/" . $file;
        }
    }
}

// convert to json
$images = json_encode($images, JSON_UNESCAPED_SLASHES);
echo ($images);

