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
            $now=(!empty($_GET['p']))?($_GET['p']):1;
            $start=($now-1)*$pp;
            $pos=$New->all([],"limit $start , $pp ");
            foreach($pos as $key=>$po){
                $sh=($po['sh']==1)?"checked":"";

        ?>
        <tr>
            <td><?=$po['id']?></td>
            <td><?=$po['title']?></td>
            <td><input type="checkbox" name="sh[]" value="<?=$po['id']?>" <?=$sh?>></td>
            <td><input type="checkbox" name="del[]" value="<?=$po['id']?>"></td>
            <input type="hidden" name="id[]" value="<?$po['id']?>">
        </tr>
        <?php
            }
            ?>
            
    </table>
    <div class="ct">
            <?php
                if(($now-1)>0){
                    echo "<a href='admin.php?do=news&p=".($now-1)."'>&larr;</a>";
                }
                for($i=1;$i<=$pages;$i++){
                    $fontSize=($i==$now)?"24px":"28px;";
                    echo"<a href='admin.php?do=news&p=$i' style='font-size:$fontSize'>$i</a>";
                }
                if(($now+1)<$pages){
                    echo "<a href='admin.php?do=news&p=".($now+1)."'>&rarr;</a>";
                }
            ?>
    </div>
    <div class="ct"><input type="submit" value="確定修改"></div>
    </form>
</fieldset>