<?php

include_once "../base.php";

$email=$_GET['email'];

$user=$User->find(['email'=>$email]);

if(empty($user)){
    echo "查無帳號";
}else{
    echo "您的密碼為:".$user['pw'];
}


?>