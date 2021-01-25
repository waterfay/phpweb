<fieldset>
    <legend>目前位置：首頁 > 最新文章區</legend>
    <table>
        <tr>
            <td width="60%">標題</td>
            <td width="40%">內容</td>
            <!-- <td width="20%"></td> -->
        </tr>
        <?php
            $posts=$New->all(['sh'=>1]);
            foreach($posts as $key =>$post){
        ?>
        <tr>
            <td class="title"><?=$post['title']?></td>
            <td class="addr"><?=mb_substr($post['text'],0,20,'utf8');?></td>
            <td class="all" style="display:none;"><?=nl2br($post['text'])?></td>
        </tr>
        <?php
        if(!empty($_SESSION['login'])){
            $chk = $Log->count(['user' => $_SESSION['login'], 'news' => $post['id']]);
        }
            }
        ?>
        <tr>
            <td></td>
            <td></td>
            <td></td>
        </tr>
    </table>
</fieldset>