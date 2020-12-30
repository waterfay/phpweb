<?php

include_once "base.php";

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>WY Chen Resume Backstage</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css"
        integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
    <!-- <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script> -->
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"></script>
    <!--不一定會用到-->
    <style>
        body {
            width: 100%;
            height: 900px;
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 0 auto;
            background: rgb(191, 202, 177);
        }

        .main {
            width: 1000px;
            height: 700px;
        }
        .login{
            width: 1000px;
            height: 500px;
            display: flex;
            justify-content: center;
            align-items: center;
            transform: translate(-5%,-5%);
        }
    </style>
</head>

<body>
            <div class="container login">
            <form action="">
                帳號：<input type="text" name="acc" id="acc"><br>
                密碼：<input type="text" name="pw" id="pw"><br>
                    <input type="submit" value="確認" onclick="login()">
                <input type="reset" value="清除">
            </form>
            </div>
        </div>
    </div>
</body>
</html>
<script>

    function login(){
        let acc=$("#acc").val()
        let pw=$("#pw").val()
        $.get("api/chk.php",{acc},function(res){
            if(res=='1'){
                $.get("api/chk_pw.php",{acc,pw},function(res){
                    if(res='1'){
                        location.href="main.php";
                    }else{
                    alert("密碼錯誤")
                    location.reload();
                    }
                })
            }else{
                alert("查無帳號")
                location.reload();
            }
        })
    }

</script>