<?php 

//請參考add.php的註解，自行讀懂下列程式碼的功能

include_once '../base.php';

$table=$_POST['table'];
$id=$_POST['id'];
$db=new DB($table);

// if(is_array($_POST['id'])){
// foreach($_POST['id'] as $key => $id){
    if(!empty($_POST['del']) && in_array($id,$_POST['del'])){
        $db->del($id);
    }
    if(is_array($_POST['id'])){
        foreach($_POST['id'] as $key => $id){
            if(!empty($_POST['text'])){
                $row['text']=$_POST['text'][$id];
            }else{
                $row['sh']=($_POST['sh']==$id)?1:0;
            }
        }
    }

// }
// }

print_r ($_POST['id']);


?>