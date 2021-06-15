<?php

include_once "../base.php";

$table=$_POST['table'];
$db=new DB($table);
$data=$db->find($_POST['id']);

$data['img']=addfile($_FILES['img']);

$db->save($data);


?>