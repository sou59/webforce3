<?php
function trimDatasPost(array $post, $keepIndexes = true) {
    $emptyField = false;
    $a = [];
    $i = 0;
    foreach ($post as $k => $v):
        if(empty(trim($v)) && trim($v) !== '0') {
            $emptyField = true;
            break;
        }else $a[$keepIndexes ? $k : $i++] = trim($v);
    endforeach;

    return $emptyField ? false : $a;
}
