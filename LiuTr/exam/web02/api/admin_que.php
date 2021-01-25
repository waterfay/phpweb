<?php
include_once "../base.php";

if(!empty($_POST['subject'])){
    $Que->save(['text'=>$_POST['subject'],'parent'=>0,'count'=>0]);
    $list=$Que->find(['text'=>$_POST['options']]);
    if(!empty($_POST['options'])){
        foreach($_POST['options'] as $opt){
            $data=[
                'text'=>$opt,
                'parent'=>$list['id'],
                'count'=>0
            ];
            $Que->save($data);
        }
    }
}

to("../admin.php?do=que");


?>