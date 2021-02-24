<style>
.all {
    background:rgba(51,51,51,0.8); 
    color:#FFF; 
    min-height:100px;
    left:10%; 
    width:500px; 
    position:absolute; 
    display:none; 
    z-index:9999; 
    overflow:auto;
}

.title {
    background: #eee;
    cursor: pointer;
}
table{
    overflow:auto;
}
</style>
<fieldset>
    <legend>目前位置：首頁 > 人氣文章區</legend>
    <table>
        <tr>
            <td width="40%">標題</td>
            <td width="40%">內容</td>
            <td width="20%">人氣</td>
        </tr>

        <?php
                    $total=$New->count();
                    $pp=5;
                    $pages=ceil($total/$pp);
                    $now=(!empty($_GET['p']))?($_GET['p']):1;
                    $start=($now-1)*$pp;
            $news = $New->all(['sh'=>1],"limit $start , $pp ");
            foreach ($news as $new) {
         ?>
        <tr>
            <td class="title"><?=$new['title'];?></td>
            <td class="tt">
                <div class="addr"><?=mb_substr($new['text'], 0, 20, 'utf8');?> ...</div>
                <div class="all" style="display:none"><?=nl2br($new['text']);?></div>
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
    <div>
        <?php
if(($now-1)>0){
    echo "<a href='?do=pop&p=".($now-1)."' > < </a>";
}

for($i=1;$i<=$pages;$i++){
    $fontSize=($i==$now)?"24px":"18px;";
    echo "<a href='?do=pop&p=$i' style='font-size:$fontSize'> $i </a>";
}

if(($now+1)<=$pages){
    echo "<a href='?do=pop&p=".($now+1)."' > > </a>";
}

            ?>
    </div>
</fieldset>
<script>
$(".title").hover(function(){
    /* $(this).next().children().eq(0).toggle(); */
    $(this).next().children().eq(1).toggle();
})

</script>
