<?php
date_default_timezone_set("Asia/Taipei");

session_start();


class DB{
    private $table;
    private $dsn="mysql:host=localhost;charset=utf8;dbname=db2";
    private $root="root";
    private $pw="";
    private $pdo;

    public function __construct($table){
        $this->table=$table;
        $this->pdo=new PDO($this->dsn,$this->root,$this->pw);
    }

    public function all(...$arg){
        $sql="select * from $this->table ";
        if(!empty($arg[0]) && is_array($arg[0])){
            foreach($arg[0] as $key => $value){
                $tmp[]=sprintf("`%s`='%s'",$key,$value);
            }
            $sql=$sql ." where " .implode(" && ",$tmp);
        }

        if(!empty($arg[1])){
            $sql= $sql . $arg[1];
        }

        return $this->pdo->query($sql)->fetchAll();
    }

    public function count(...$arg){
        $sql="select count(*) from $this->table ";
        if(!empty($arg[0]) && is_array($arg[0])){
            foreach($arg[0] as $key => $value){
                $tmp[]=sprintf("`%s`='%s'",$key,$value);
            }
            $sql=$sql . " where" .implode(" && ",$tmp);
        }

        if(!empty($arg[1])){
            $sql= $sql . $arg[1];
        }
        
        return $this->pdo->query($sql)->fetchColumn();
    }
    public function find($arg){
        $sql="select * from $this->table ";

        if(is_array($arg)){
            foreach($arg as $key => $value){
                $tmp[]=sprintf("`%s`='%s'",$key,$value);
            }
            $sql=$sql . " where " . implode(" && ",$tmp);
        }else{
            $sql= $sql . " where `id`='$arg'";
        }

        return $this->pdo->query($sql)->fetch(PDO::FETCH_ASSOC);

    }
    public function del($arg){
        $sql="delete from $this->table ";

        if(is_array($arg)){
            foreach($arg as $key => $value){
                $tmp[]=sprintf("`%s`='%s'",$key,$value);
            }
            $sql=$sql . " where " . implode(" && ",$tmp);
        }else{
            $sql= $sql . " where `id`='$arg'";
        }

        return $this->pdo->exec($sql);

    }
    public function save($arg){
        if(!empty($arg['id'])){
            foreach($arg as $key => $value){
                if($key != 'id'){

                    $tmp[]=sprintf("`%s`='%s'",$key,$value);
                }
            }
            $sql ="update $this->table set " . implode(",",$tmp) . " where `id`='".$arg['id']."'";
        }else{
            $sql="insert into $this->table (`".implode("`,`",array_keys($arg))."`) values('".implode("','",$arg)."')";
        }
        return $this->pdo->exec($sql);
    }
    public function q($sql){
        return $this->pdo->query($sql)->fetchAll();
    }

}

function to($url){
    header("location:".$url);
}

$Visit=new DB("visit");

$visit=$Visit->find(['date'=>date("Y-m-d")]);
if(empty($visit)){
    $Visit->save(["date"=>date("Y-m-d"),"total"=>1]);
    $visit=$Visit->find(['date'=>date("Y-m-d")]);
}
if(empty($_SESSION['visit'])){
    $visit['total']++;
    $Visit->save($visit);
    $_SESSION['visit']=$visit['total'];
}

$User=new DB("user");
$New=new DB("news");
$Que=new DB("que");
$Log = new DB('log');



?>