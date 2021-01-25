<fieldset>
<legend>新增問卷</legend>
<form action="api/admin_que.php" method="post">
    <table>
        <tr>
            <td>問卷名稱</td>
            <td><input type="text" name="subject"></td>
        </tr>
        <tr>
            <td colspan="2" class="clo" id="op">
                選項<input type="text" name="options[]">
                <input type="button" value="更多" onclick="more()">
            </td>
        </tr>
    </table>
    <div class="ct">
        <input type="submit" value="新增">
        <input type="reset" value="清除">
    </div>
</form>
</fieldset>
<script>
        function more(){
            let str=`選項<input type="text" name="options[]"><br>`
            $("#op").prepend(str)
        }
</script>