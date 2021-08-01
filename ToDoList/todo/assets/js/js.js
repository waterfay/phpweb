const txt=document.querySelector(".txt");
const save=document.querySelector(".save");
const list=document.querySelector(".list");
const date=document.querySelector(".date");
const listcontent=document.querySelector(".listcontent");
const DeleteAll=document.querySelector(".DeleteAll");
const notcompleted=document.querySelector(".notcompleted");
const completed=document.querySelector(".completed");
const all=document.querySelector(".all");

const now=new Date();
let today=`${now}`
date.innerHTML=now;




// document.write("今天日期是 " + Today.getFullYear()+ " 年 " + (Today.getMonth()+1) + " 月 " + Today.getDate() + " 日");

let data=[]
//幾個待辦項目
function listsum() {
    let sum = 0;
    for (let i = 0; i < data.length; i++) {
        if (!data[i].checked) {
            sum++;
        }
    }
    listcontent.textContent = sum + "個待完成項目";
    
}
//抓取輸入的內容存進陣列及物件
save.addEventListener("click",function(e){
    if(txt.value==""){
        alert("請輸入內容")
    }else{
        let obj={};
        obj.content=txt.value
        data.push(obj)
        renderData();
        listsum();
    }

})

notcompleted.addEventListener("click",function(e){
    const obj=document.getElementsByName("checkbox");
    for (let i = 0; i < data.length; i++) {
    if(obj[i].checked==true){
        document.querySelectorAll(".form-check")[i].style.display = "none";
    }else{
        document.querySelectorAll(".form-check")[i].style.display = "block";
    }
}
})

 all.addEventListener("click",function(e){
    for (let i = 0; i < data.length; i++) {
     document.querySelectorAll(".form-check")[i].style.display = "block";
    }
 })

completed.addEventListener("click",function(e){
    const obj=document.getElementsByName("checkbox");
    for (let i = 0; i < data.length; i++) {
    if(obj[i].checked==false){
        document.querySelectorAll(".form-check")[i].style.display = "none";
    }else{
        document.querySelectorAll(".form-check")[i].style.display = "block";
    }
}

})

//清除已完成資料
DeleteAll.addEventListener("click",function(e){
    console.log(123)
     const obj=document.getElementsByName("checkbox");
     for (let i = 0; i < data.length; i++) {
     if(obj[i].checked==true){
         let num=e.target.getAttribute("data-num");
         data.splice(num,1);
        console.log(obj[i].checked==true)
     }
}
     renderData();
     listsum();
})

//刪除該項目
list.addEventListener("click",function(e){
    if(e.target.getAttribute("class")!=="delete"){
        return;
    }
    let num=e.target.getAttribute("data-num");
    console.log(num)
    data.splice(num,1);
    renderData();
    listsum();
    
    
})



//印出項目
function renderData(){
let str=""
data.forEach(function(item,index){
    // console.log(item)
    str+=`<div class="form-check py-1"><input class="form-check-input" name="checkbox" type="checkbox" data-num="${index}" ><label class="form-check-label" data-num="${index}" >${item.content}</label><input type="button" data-num="${index}" class="delete" value="刪除"></div>
    `
})
list.innerHTML = str;

// console.log(str)
}





// document.querySelector('input[type=checkbox]').checked
// checkbox=document.forms[0].checkbox.length