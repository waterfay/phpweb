let name;
var pokname;
var mybtn = document.getElementById("btn");
mybtn.addEventListener("click", start);
var pok1 = document.getElementsByClass("pok1")[0];
pok1.addEventListener("click", game);
var pok2 = document.getElementsByClass("pok2")[0];
pok2.addEventListener("click", game);

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

function game(pokname){
    switch(pokname){
        case '皮卡丘':
            document.getElementsByClassName("pok2")[0].style.display = 'none';
            document.getElementsByClassName("pok1")[0].style.top='50%';
            document.getElementsByClassName("pok1")[0].style.left='70%';
            document.getElementsByClassName("pok1")[0].style.height='300px';
            document.getElementsByClassName("pok1")[0].style.width='300px';
            document.getElementsByClassName("person2")[0].style.display = 'block';
        break;
        case '伊布':
            document.getElementsByClassName("pok1")[0].style.display = 'none';
            document.getElementsByClassName("pok2")[0].style.left='70%';
            document.getElementsByClassName("pok2")[0].style.top='50%';
            document.getElementsByClassName("pok2")[0].style.height='300px';
            document.getElementsByClassName("pok2")[0].style.width='300px';
            document.getElementsByClassName("person2")[0].style.display = 'block';
        break;
    }

    Swal.fire({
        text:`${pokname}，就決定是你了！`,
        confirmButtonColor:'rgb(255, 85, 0)',
        background:'rgb(245, 222, 178,.7)',
    })
}
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