// const btn=document.querySelector(".btn");
// const title=document.querySelector("h1");
// let count=0;


// btn.addEventListener("click",function(e){
//    console.log(e.target)    
// })

// const list=document.querySelector(".list");
//     list.addEventListener("click",function(e){
//         console.log(e.target)
//     })

// let data=[
//     {
//     name:"Tom",
//     sex:"male"
//     },
//     {
//     name:"Mary",
//     sex:"female"
//     },
//     {
//     name:"Jane",
//     sex:"female"
//     },
//     {
//     name:"Jenny",
//     sex:"female"
//     },
//     {
//         name:"Tony",
//         sex:"male"
//         },
// ];
// let femaleTotal=0;
// let maleTotal=0;
// data.forEach(function(item,index){
//     if(item.sex=='female'){
//         femaleTotal+=1
//     }else{
//         maleTotal+=1
//     }
// })
// console.log(femaleTotal,maleTotal)

let data = [
    {
      Charge:"免費",
      name:"廖洧杰充電站"
    }, {
      Charge: "投幣式",
      name: "小花充電站"
    }, {
      Charge: "投幣式",
      name: "小明充電站"
    }, {
      Charge: "投幣式",
      name: "小天充電站"
    }
  ];
  const list=document.querySelector(".list");
  function init(){
    let str="";
    data.forEach(function(item,index){
        let content=`<li>${item.name}，${item.Charge}</li>`;
        str+=content;
    })
    console.log(str);
    list.innerHTML=str;
  }

init();

const stationFilter=document.querySelector(".filter");
console.log(stationFilter);
stationFilter.addEventListener("click",function(e){
    if(e.target.value == undefined){
        console.log("你點擊到空的地方")
        return;
    }
    let str= "";
    data.forEach(function(item,index){
        console.log(e.target.value==item.Charge);
        if(e.target.value=="全部"){
            str+=`<li>${item.name}，${item.Charge}</li>`
        }else
        if(e.target.value==item.Charge){
            str+=`<li>${item.name}，${item.Charge}</li>`
        }
    })
    list.innerHTML=str;
})

const stationName=document.querySelector(".stationName");
const stationCharge=document.querySelector(".stationCharge");
const btn=document.querySelector(".btn");
btn.addEventListener("click",function(e){
  console.log(stationName.value);
  console.log(stationCharge.value);
  let obj = {};
  obj.Charge = stationCharge.value;
  obj.name = stationName.value;
  data.push(obj);
  init();
})