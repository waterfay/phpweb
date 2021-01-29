let name;
var at1;
var at2;
var at3;
var at4;
var attact;
var pokp={
    name:"皮卡丘",
    blood:520,
    at1:["電光一閃",45],
    at2:["打雷",100],
    at3:["電擊",35],
    at4:["十萬伏特",80]
}
var poki={
    name:"伊布",
    blood:550,
    at1:["撞擊",30],
    at2:["挖洞",100],
    at3:["高速星星",60],
    at4:["電光一閃",45]
}
var pokh={
    name:"海星星",
    blood:600,
    at1:["水槍",35],
    at2:["撞擊",30],
    at3:["泡沫光線",45],
    at4:["力量寶石",80]
}
var mybtn = document.getElementById("btn");
mybtn.addEventListener("click", start);
var pok1 = document.getElementsByClass("pok1")[0];
pok1.addEventListener("click", game);
var pok2 = document.getElementsByClass("pok2")[0];
pok2.addEventListener("click", game);

var Atb = document.getElementsByClassName("attack")[0];
Atb.addEventListener("click", atbb);


function gameplay (){
    document.getElementsByClassName("btnst")[0].style.display = 'none';
    document.getElementsByClassName("person1")[0].style.display = 'block';
    Swal.fire({
        title: '訓練家，你叫什麼名字？',
        input: 'text',
        inputValue: '小智',
        showLoaderOnConfirm: true,
        confirmButtonText: '就決定是你了',
        cancelButtonText: '略過',
        // cancelButtonColor: "#000000",
        showCancelButton: true,
        confirmButtonColor:'rgb(255, 85, 0)',
        background:'rgb(245, 222, 178,.7)',
    }).then((result) => {
        if (result.dismiss === 'cancel') {
            name="小智";
            Swal.fire({
                text:`${name}準備好成為神奇寶貝大師了嗎？`,
                confirmButtonColor:'rgb(255, 85, 0)',
                background:'rgb(245, 222, 178,.7)',
            }).then(start);
        } else {    
            name = result.value;
            Swal.fire({
                text: `${name}準備好成為神奇寶貝大師了嗎？`,
                confirmButtonColor:'rgb(255, 85, 0)',
                background:'rgb(245, 222, 178,.7)',
            }).then(start);
        }
    })
    function start(){
        document.getElementsByClassName("person1")[0].style.display = 'none';
        document.getElementsByClassName("pok1")[0].style.display = 'block';
        document.getElementsByClassName("pok2")[0].style.display = 'block';
        Swal.fire({
            text:"選擇一隻你喜歡的神奇寶貝開始冒險吧！",
            confirmButtonColor:'rgb(255, 85, 0)',
            background:'rgb(245, 222, 178,.7)',
        });

    }

}
// let pok ={
//     hp:200,
//     skill:
// }
function game(pokname){
    switch(pokname){
        case pokp.name:
            document.getElementsByClassName("pok2")[0].style.display = 'none';
            document.getElementsByClassName("pok1")[0].style.top='55%';
            document.getElementsByClassName("pok1")[0].style.left='65%';
            document.getElementsByClassName("pok1")[0].style.height='300px';
            document.getElementsByClassName("pok1")[0].style.width='300px';
            document.getElementsByClassName("person2")[0].style.display = 'block';
            document.getElementsByClassName("pok3")[0].style.display = 'block';
            document.getElementsByClassName("person3")[0].style.display = 'block';
            // at1="撞擊";
            // at2="打雷";
            // at3="高速星星";
            // at4="十萬伏特";
            Swal.fire({
                text:`${pokname}，就決定是你了！`,
                confirmButtonColor:'rgb(255, 85, 0)',
                background:'rgb(245, 222, 178,.7)',
            })
            .then(function() {
                document.getElementsByClassName("attack")[0].style.display = 'block';
                document.getElementsByClassName("atbtn")[0].value = pokp.at1[0];
                document.getElementsByClassName("atbtn")[1].value = pokp.at2[0];
                document.getElementsByClassName("atbtn")[2].value = pokp.at3[0];
                document.getElementsByClassName("atbtn")[3].value = pokp.at4[0];
            })
            
        break;
        case poki.name:
            document.getElementsByClassName("pok1")[0].style.display = 'none';
            document.getElementsByClassName("pok2")[0].style.left='65%';
            document.getElementsByClassName("pok2")[0].style.top='55%';
            document.getElementsByClassName("pok2")[0].style.height='300px';
            document.getElementsByClassName("pok2")[0].style.width='300px';
            document.getElementsByClassName("person2")[0].style.display = 'block';
            document.getElementsByClassName("pok3")[0].style.display = 'block';
            document.getElementsByClassName("person3")[0].style.display = 'block';

            Swal.fire({
                text:`${pokname}，就決定是你了！`,
                confirmButtonColor:'rgb(255, 85, 0)',
                background:'rgb(245, 222, 178,.7)',
            })
            .then(function() {
                document.getElementsByClassName("attack")[0].style.display = 'block';
                document.getElementsByClassName("atbtn")[0].value = poki.at1[0];
                document.getElementsByClassName("atbtn")[1].value = poki.at2[0];
                document.getElementsByClassName("atbtn")[2].value = poki.at3[0];
                document.getElementsByClassName("atbtn")[3].value = poki.at4[0];
            })

        if(pokh.blood<=0){
            document.getElementById('btn1').onclick = null;
            document.getElementById('btn2').onclick = null;
            document.getElementById('btn3').onclick = null;
            document.getElementById('btn4').onclick = null;
    }
        }
    }

// B=pokname;
function atbb1(){
    j=Math.ceil(Math.random()*4);
    switch(j){
        case 1:
        pokp.blood=pokp.blood-pokh.at1[1];
        break;
        case 2:
            pokp.blood=pokp.blood-pokh.at2[1];
            break;
            case 3:
                pokp.blood=pokp.blood-pokh.at3[1];
                break;
                case 4:
                    pokp.blood=pokp.blood-pokh.at3[1];
                    break;
    }


    // console.log(atbb());

    if(pokp.blood<=0){
        pokp.blood=0;
        document.getElementById("win").innerHTML = 'You Lost';
    }
    document.getElementById("blood1").innerHTML = pokp.blood;
}
function atbb2(){
    // A=Math.ceil(Math.random()*4);
    poki.blood=poki.blood-pokh.at1[1];
    // console.log(atbb());

    if(poki.blood<=0){
        poki.blood=0;
        document.getElementById("win").innerHTML = 'You Lost';
    }
    document.getElementById("blood1").innerHTML = poki.blood;
}

function attact(i){
    switch(i){
    case 1:
    pokh.blood=pokh.blood-pokp.at1[1];
    atbb1();
    if(pokh.blood<=0){
        pokh.blood=0;
        document.getElementById("win").innerHTML = 'You Win';
    }
    document.getElementById("blood").innerHTML = pokh.blood;
    console.log(pokh.blood);
    break;
    case 2:
    atbb1();
    pokh.blood=pokh.blood-pokp.at2[1];
    if(pokh.blood<=0){
        pokh.blood=0;
        document.getElementById("win").innerHTML = 'You Win';
    }
    document.getElementById("blood").innerHTML = pokh.blood;
    console.log(pokh.blood);
    break;
    case 3:
        atbb1();
    pokh.blood=pokh.blood-pokp.at3[1];
    if(pokh.blood<=0){
        pokh.blood=0;
        document.getElementById("win").innerHTML = 'You Win';
    }
    document.getElementById("blood").innerHTML = pokh.blood;
    console.log(pokh.blood);
    break;
    case 4:
        atbb1();
    pokh.blood=pokh.blood-pokp.at3[1];
    if(pokh.blood<=0){
        pokh.blood=0;
        document.getElementById("win").innerHTML = 'You Win';
    }
    document.getElementById("blood").innerHTML = pokh.blood;

    console.log(pokh.blood);
    break;
    }
    if(pokh.blood<=0){
        document.getElementById('btn1').onclick = null;
        document.getElementById('btn2').onclick = null;
        document.getElementById('btn3').onclick = null;
        document.getElementById('btn4').onclick = null;
}

    }


    function attact(i){
        switch(i){
        case 1:
        pokh.blood=pokh.blood-poki.at1[1];
        atbb2();
        if(pokh.blood<=0){
            pokh.blood=0;
            document.getElementById("win").innerHTML = 'You Win';
        }
        document.getElementById("blood").innerHTML = pokh.blood;
        console.log(pokh.blood);
        break;
        case 2:
            atbb2();
        pokh.blood=pokh.blood-poki.at2[1];
        if(pokh.blood<=0){
            pokh.blood=0;
            document.getElementById("win").innerHTML = 'You Win';
        }
        document.getElementById("blood").innerHTML = pokh.blood;
        console.log(pokh.blood);
        break;
        case 3:
            atbb2();
        pokh.blood=pokh.blood-poki.at3[1];
        if(pokh.blood<=0){
            pokh.blood=0;
            document.getElementById("win").innerHTML = 'You Win';
        }
        document.getElementById("blood").innerHTML = pokh.blood;
        console.log(pokh.blood);
        break;
        case 4:
            atbb2();
        pokh.blood=pokh.blood-poki.at3[1];
        if(pokh.blood<=0){
            pokh.blood=0;
            document.getElementById("win").innerHTML = 'You Win';
        }
        document.getElementById("blood").innerHTML = pokh.blood;
    
        console.log(pokh.blood);
        break;
        }
        if(pokh.blood<=0){
            document.getElementById('btn1').onclick = null;
            document.getElementById('btn2').onclick = null;
            document.getElementById('btn3').onclick = null;
            document.getElementById('btn4').onclick = null;
    }
        }

// .then((result) => {
//         if(result){
//         Swal.fire({
//             text:"1111",
//             confirmButtonColor:'rgb(255, 85, 0)',
//             background:'rgb(245, 222, 178,.7)',
//         });
//     }
// }



    // .then((result) =>{
    //     if (result.dismiss === 'cancel') {
    //         Swal.fire({
    //             text: `${name}，選擇一隻你順眼的神奇寶貝吧！`,
    //             confirmButtonColor:'rgb(255, 85, 0)',
    //             background:'rgb(245, 222, 178,.7)',
    //             confirmButtonText: '就決定是你了',
    //             cancelButtonText: '略過',
    //         })
    // }else{


//   }
// function start(){
//     Swal.fire({
//         text:"選擇一隻你喜歡的寵物";
//         confirmButtonText: '就決定是你了',
//         cancelButtonText: '略過',
//     })
// }
// function start(){
    
// }
// Swal.fire({  
//     title: 'Do you want to save the changes?',  
//     showDenyButton: true,  showCancelButton: true,  
//     confirmButtonText: `Save`,  
//     denyButtonText: `Don't save`,
//   }).then((result) => {  
//       /* Read more about isConfirmed, isDenied below */  
//       if (result.isConfirmed) {    
//           Swal.fire('Saved!', '', 'success')  
//       } else if (result.isDenied) {    
//           Swal.fire('Changes are not saved', '', 'info')  
//        }
//   });