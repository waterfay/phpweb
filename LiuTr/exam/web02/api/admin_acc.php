<?php
include_once "../base.php";

if(isset($_POST['del'])){
    foreach($_POST['del'] as $id){
    $User->del();
    }
}

to("../backend.php?do=admin");

?>