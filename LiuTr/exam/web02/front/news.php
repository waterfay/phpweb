<fieldset>
    <legend>目前位置：首頁 > 最新文章區</legend>
    <table>
        <tr>
            <td width="60%" >標題</td>
            <td width="40%" >內容</td>
            <!-- <td width="20%"></td> -->
        </tr>
        <?php
            $total=$New->count();
            $pp=5;
            $pages=ceil($total/$pp);
            $now=(!empty($_GET['p']))?($_GET['p']):1;
            $start=($now-1)*$pp;
            $posts=$New->all(['sh'=>1],"limit $start , $pp ");
            foreach($posts as $key =>$post){
        ?>
        <tr>
            <td class="title clo"><?=$post['title']?></td>
            <td>
                <div class="addr"><?=mb_substr($post['text'],0,20,'utf8');?>...</div>
                <div class="all" style="display:none;"><?=nl2br($post['text'])?></div>
            </td>
        </tr>
        <?php

    }
        ?>
    </table>
    <div>
        <?php
if(($now-1)>0){
    echo "<a href='?do=news&p=".($now-1)."' > < </a>";
}

for($i=1;$i<=$pages;$i++){
    $fontSize=($i==$now)?"24px":"18px;";
    echo "<a href='?do=news&p=$i' style='font-size:$fontSize'> $i </a>";
}

if(($now+1)<=$pages){
    echo "<a href='?do=news&p=".($now+1)."' > > </a>";
}

            ?>
    </div>
</fieldset>
<script>
$(".title").on("click",function(){
    $(this).next().children('.addr').toggle();
    $(this).next().children('.all').toggle();

})

</script>