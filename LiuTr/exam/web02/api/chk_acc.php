<?php
include_once "../base.php";

$acc=$_GET['acc'];

$chk=$User->find(['acc'=>$acc]);

if(empty($chk)){
    echo 0;
}else{
    echo 1;
}

?>