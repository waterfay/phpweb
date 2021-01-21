<?php
include_once "../base.php";
?>
<fieldset>
    <legend>最新文章管理</legend>
    <form action="api/admin_news.php" method="post">
    <table class="ct" width="100%">
        <tr>
            <td width="10%">編輯</td>
            <td width="70%">標題</td>
            <td width="10%">顯示</td>
            <td width="10%">刪除</td>
        </tr>
        <?php
            $total=$New->count();
            $pp=3;
            $pages=ceil($total/$pp);
            $now=(!empty($_GET['p']))?$_GET['p']:1;
            $start=($now-1)*$pp;
            $pos=$New->all([],"limit $start, $pp");
            foreach($pos as $key=>$po){

            }
        ?>
        <tr>
            <td><?=$po['id']?></td>
            <td><?=$po['title']?></td>
            <td><input type="checkbox" name="sh[]" value="<?=$po['id']?>"></td>
            <td><input type="checkbox" name="del[]" value="<?=$po['id']?>"></td>
            <input type="hidden" name="id[]" value="<?$po['id']?>">
        </tr>
    </table>
    <div class="ct"></div>
    <div class="ct"><input type="submit" value="確定修改"></div>
    </form>
</fieldset>