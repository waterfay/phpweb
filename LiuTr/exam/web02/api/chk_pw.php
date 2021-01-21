<?php
include_once "../base.php";

$acc=$_GET['acc'];
$pw=$_GET['pw'];

$chk=$User->find(['acc'=>$acc,'pw'=>$pw]);

if(empty($chk)){
    echo 0;
}else{
    echo 1;
    $_SESSION['login']=$acc;
}

?>