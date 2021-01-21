<fieldset style="margin:auto;padding:10px;width:50%;">
    <legend>會員登入</legend>
    <table>
        <tr>
            <td width="50%" class="clo">請輸入信箱以查詢密碼<input type="text" name="email" id="email"></td>
        </tr>
        <tr>
        <td id="result"></td>
    </tr>
        <tr>
            <td width="50%"><input type="submit" value="尋找" onclick="findPw()"></td>
        </tr>
    </table>
</fieldset>
<script>
    function findPw(){
        let email=$("#email").val();
        if(email==""){
            alert("欄位不得空白")
        }else{
            $.get("api/find_pw.php",{email},function(res){
            $("#result").html(res)
            })
        }
    }
</script>