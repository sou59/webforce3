<?php
/*
 * Push images names and other required values in an MULTIDIMENSIONAL array
 * When a new image is added or deleted in the ../images directory
 * the array will be updated...
 *
 *  scandir(); // to read files in a directory
 *  rand(); // to "simulate" a movie duration
 *  strtr(); or str_replace(); // if you need to replace characters
 *  pathinfo(); // if you need some specific part of a filename
 *  ucwords();  // if you need to upperCase first word of each letter (like CamelCase)
 *
 * $movies =[
 *    [ 'title' => 'Xmen'                 'duration' => 124, 'cover' => 'xmen.jpg'],
 *    [ 'title' => 'Grace',               'duration' => 96,  'cover' => 'grace.jpg'],
 *    [ 'title' => 'Captain America 2'    'duration' => 136, 'cover' => 'captain-america-2.jpg'],
 *   ];
 *
 * finally return a json value
 */
