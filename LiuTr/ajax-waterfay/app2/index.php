<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>學生資料管理系統</title>
    <link rel="shortcut icon" href="#" type="image/x-icon">
    <link rel="stylesheet" href="style.css">
    <style>

  table td{
    padding:5px 10px;
    border:0.5px solid #ccc;
  }

  .modal{
    width:300px;
    height:400px;
    border:3px double #ff33ee;
    box-shadow: 0 0 5px #ccc;
    margin: auto;
    display: none;
    position: absolute;
    left: calc( ( 100% - 300px ) / 2);
    top: calc( ( 100% - 400px ) / 2);
    background:lightcyan;
  }
    </style>
    <script src="https://code.jquery.com/jquery-3.5.1.min.js" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>


</head>
<body>
  <h1 class="header">學生資料管理系統</h1>
  <h5>新增學生</h5>
  <form action="api/insert.php" method='POST'>
    <div>姓名<input type="text" name='name' id="name"></div>
    <div>班級<input type="text" name='classes' id="classes"></div>
    <div>座號<input type="text" name='num' id='num'></div>
    <div>成績<input type="text" name='score' id='score'></div>
    <input type="button" value="新增" onclick="create()">   
  </form>
  
<table>
  <tr id="header">
    <td>id</td>
    <td>name</td>
    <td>classes</td>
    <td>num</td>
    <td>score</td>
    <td>操作</td>
  </tr>
<tbody id="list"></tbody>


</table>

<div class="modal"></div>

</body>
</html>
<script>
/************************************
* 1.考慮觸發行為的事件
* 2.建立監聽行為
* 3.考慮是否需要代入參數
* 4.是否會有回傳值？回傳值的功用及處理？
* 5.是否需要更新畫面內容？更新畫面的方法？
************************************/

query()

//新增資料的函式
function create(){
  let name=$("#name").val();
  let classes=$("#classes").val();
  let num=$("#num").val();
  let score=$("#score").val();
  console.log(name,classes,num,score)

  $.post("api/insert.php",{name,classes,num,score},function(res){
      console.log(res)
      if(res=='成功'){
        alert("新增成功")
        query()
      }else{
        alert("新增失敗")
      }
  })

}

//查詢資料的函式
function query(){
  $.get("api/query.php",function(res){
    $("#list").html(res)

  })
}

//開啟編輯資料modal的函式
function op(id){

  $(".modal").load("api/edit_form.php",{id}).show();

}
function cl(){

  $(".modal").html("").hide();

}

function update(id){
  let name=$("#edit_name").val();
  let classes=$("#edit_classes").val();
  let num=$("#edit_num").val();
  let score=$("#edit_score").val();
  
  console.log(name,classes,num,score,id)

  $.post("api/update.php",{name,classes,num,score,id},function(res){
      console.log(res)
      query()
      $(".modal").html("").hide()
  })
}
//刪除資料的函式
function del(id){

  let con=confirm("你確定要刪除id "+id+" 的資料嗎?")
  if(con){
    $.post("api/delete.php",{id},function(){
        query()
    })
  }
}

</script>