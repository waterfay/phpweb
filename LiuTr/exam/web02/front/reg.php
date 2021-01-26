<fieldset>
    <legend>會員註冊</legend>
    <form>

<table>
    <tr>
        <td colspan="2" style="color:red;"></td>
    </tr>
    <tr>
        <td style="width:50%" class="col">
        Step1:登入帳號
        </td>
        <td style="width:50%">
        <input type="text" name="acc" id="acc">
        </td>
    </tr>
    <tr>
        <td style="width:50%">
        Step2:登入密碼
        </td>
        <td>
        <input type="password" name="pw" id="pw">
        </td>
    </tr>
    <tr>
    <td style="width:50%">
    Step3:再次確認密碼
        </td>
        <td>
        <input type="password" name="pw2" id="pw2">
        </td>
    </tr>
    <tr>
    <td style="width:50%">
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