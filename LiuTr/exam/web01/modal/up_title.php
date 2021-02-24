<h3 class="cent">更新標題區圖片</h3>
<hr>
<table style="width:70%;margin:auto;">
    <tr>
        <td>標題區圖片:</td>
        <td><input type="file" name="img"></td>
    </tr>
    <tr>
        <td>標題區替代文字:</td>
        <td><input type="text" name="text"></td>
    </tr>
</table>
<div class="cent" style="width:100%;margin:auto;">
    <input type="hidden" name="id" value="<?=$_GET['id'];?>">
    <input type="hidden" name="table" value="<?=$_GET['table'];?>">
    <input type="submit" value="新增">
    <input type="reset" value="重置">
    </div>