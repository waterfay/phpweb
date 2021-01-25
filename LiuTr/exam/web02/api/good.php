<?php
include_once "../base.php";

switch($_POST['type']){
    case "1":

        $Log->save([
            'user'=>$_SESSION['login'],
            'news'=>$_POST['id']
        ]);

        $news=$New->find($_POST['id']);
        $news['good']++;
        $New->save($news);
    break;
    case "2":
        $Log->del([
            'user'=>$_SESSION['login'],
            'news'=>$_POST['id']
        ]);

        $news=$New->find($_POST['id']);
        $news['good']--;
        $New->save($news);
    break;
}




?>