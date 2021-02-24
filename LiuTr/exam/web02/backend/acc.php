<fieldset>
<legend>帳號管理</legend>
<form action="api/admin_acc.php" method="post">
<table style="width:50%;margin:auto;">
    <tr class="ct clo">
                <td>帳號</td>
                <td>密碼</td>
                <td>刪除</td>
    </tr>
    <?php
        $users=$User->all();
        foreach($users as $user){
            if($user['acc']!=='admin'){
    ?>
    <tr class="ct">
        <td><?=$user['acc'];?></td>
        <td><?=str_repeat("*",strlen($user['pw']));?></td>
        <td>
            <input type="checkbox" name="del[]" value="<?=$user['id']?>">
        </td>
    </tr>
    <?php
            }
        }
    ?>
</table>
<div class="ct">
            <input type="submit" value="確定刪除">
            <input type="reset" value="清空選取">
</div>
</form>
</fieldset>

<h2>新增會員</h2>
    <form>
<table>
    <tr>
        <td colspan="2" style="color:red;">*請設定您要註冊的帳號及密碼(最長12個字元)</td>
    </tr>
    <tr>
    <td style="width:50%"  class="clo">
        Step1:登入帳號
        </td>
        <td>
        <input type="text" name="acc" id="acc">
        </td>
    </tr>
    <tr>
        <td style="width:50%"  class="clo">
        Step2:登入密碼
        </td>
        <td>
        <input type="password" name="pw" id="pw">
        </td>
    </tr>
    <tr>
    <td style="width:50%"  class="clo">
    Step3:再次確認密碼
        </td>
        <td>
        <input type="password" name="pw2" id="pw2">
        </td>
    </tr>
    <tr>
    <td style="width:50%"  class="clo">
    Step4:信箱(忘記密碼時使用)
        </td>
        <td>
        <input type="text" name="email" id="email">
        </td>
    </tr>
    <tr>
        <td><input type="button" value="註冊" onclick="reg()"><input type="reset" value="清除"></td>
        <td></td>
    </tr>
</table>
</form>
</fieldset>
<script>
function reg(){
    let acc=$("#acc").val();
    let pw=$("#pw").val();
    let pw2=$("#pw2").val();
    let email=$("#email").val();
    if(acc=="" || pw=="" || pw2=="" || email==""){
        alert("不可空白")
    }else{
        if(pw==pw2){
            $.get("api/chk_acc.php",{acc},function(res){
                if(res==='1'){
                    alert("帳號重覆")
                }else{
                    $.post("api/reg.php",{acc,pw,email},function(res){
                            alert("註冊完成，歡迎加入")
                    })
                }
            })
        }else{
            alert("密碼錯誤")
        }
    }
}
</script>