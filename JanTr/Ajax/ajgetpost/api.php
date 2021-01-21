<?php
$db=new PDO("mysql:host=localhost;charset=utf8;dbname=jq_sample","root","");
date_default_timezone_set('Asia/Taipei');

switch($_GET['todo']){
    case 'select':
        $sql="SELECT * FROM ajax_animal limit " .$_POST['start']. ",10";
        $rows=$db->query($sql)->fetchAll();
        if($rows){
            foreach($rows as $row){
                echo'
                <tr>
                <td>'.$row['id'].'</td>
                <td>'.$row['name'].'</td>
                <td>'.$row['weight'].'</td>
                <td>'.$row['info'].'</td>
                <td>'.$row['date'].'</td>
                <td>
                    <button>修改</button>
                    <button>刪除</button>
                </td>
                </tr>
                ';
            }
        }else{
            echo 'fail';
        }
        break;
}


?>