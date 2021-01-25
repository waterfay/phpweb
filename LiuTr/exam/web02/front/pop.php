<style>
.all {
    background: rgba(51, 51, 51, 0.8);
    color: #FFF;
    min-height: 100px;
    width: 300px;
    position: fixed;
    display: none;
    z-index: 9999;
    overflow: auto;
}

.title {
    background: #eee;
    cursor: pointer;
}
</style>
<fieldset>
    <legend>目前位置：首頁 > 人氣文章區</legend>
    <table>
        <tr>
            <td width="20%">標題</td>
            <td width="60%">內容</td>
            <td width="20%">人氣</td>
        </tr>

        <?php
            $news = $New->all();
            foreach ($news as $new) {
         ?>
        <tr>
            <td class="title"><?=$new['title'];?></td>
            <td class="tt">
                <div class="abbr"><?=mb_substr($new['text'], 0, 20, 'utf8');?> ...</div>
                <div class="all"><?=nl2br($new['text']);?></div>
            </td>
            <td>
                <span id="vie<?=$new['id'];?>"><?=$new['good'];?></span>個人說<img src="icon/02B03.jpg" style="width:20px;height:20px">
                <?php 
                if(!empty($_SESSION['login'])){
                    $chk=$Log->count(['user'=>$_SESSION['login'],'news'=>$new['id']]);
                    print_r ($_SESSION['login']);
                    if($chk){
            ?>
                    <a href='#' id="good<?=$new['id'];?>" onclick="good('<?=$new['id'];?>','2','<?=$_SESSION['login'];?>')">收回讚</a>
            <?php
                    }else{
                ?>
                    <a href='#' id="good<?=$new['id'];?>" onclick="good('<?=$new['id'];?>','1','<?=$_SESSION['login'];?>')">讚</a>
                <?php
                    }
                }
            ?> 
            </td>
        </tr>
        <?php
}
?>
    </table>
</fieldset>
