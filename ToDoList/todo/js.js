const txt=document.querySelector(".txt");
const save=document.querySelector(".save");
const list=document.querySelector(".list");
const date=document.querySelector(".date");
const listcontent=document.querySelector(".listcontent");
const listchecked=document.querySelectorAll('input[type=checkbox]:checked').length;
const listcontent=document.querySelectorAll('.form-check').length;
const now=new Date();
let today=`${now}`
date.innerHTML=now;
let listempty=listcontent-listchecked;
listcontent.innerHTML=listempty;


// document.write("今天日期是 " + Today.getFullYear()+ " 年 " + (Today.getMonth()+1) + " 月 " + Today.getDate() + " 日");

let data=[]

save.addEventListener("click",function(e){
    if(txt.value==""){
        alert("請輸入內容")
    }
        let obj={};
        obj.content=txt.value
        data.push(obj)
        renderData();
        return ture;
    

})

list.addEventListener("click",function(e){
    if(e.target.getAttribute("class")!=="delete"){
        return;
    }
    let num=e.target.getAttribute("data-num");
    console.log(num)
    data.splice(num,1);
    renderData();
})


function renderData(){
let str=""
data.forEach(function(item,index){
    str+=`
    <div class="form-check py-1"><input class="form-check-input" type="checkbox" id="formCheck-${index}"">${item.content}<input type="button" data-num="${index}" class="delete" value="刪除"></li>
    `
})
const list = document.querySelector(".list");
list.innerHTML = str;

// console.log(str)
}

