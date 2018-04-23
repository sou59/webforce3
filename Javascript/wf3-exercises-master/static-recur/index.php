<?php
function R($i = 0){
  if(++$i>10) return $i;
  return R($i);
}
