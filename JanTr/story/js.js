let name;
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
            }) .then(start);
        } else {    
            name = result.value;
            Swal.fire({
              text: `${name}準備好成為神奇寶貝大師了嗎？`,
              confirmButtonColor:'rgb(255, 85, 0)',
              background:'rgb(245, 222, 178,.7)',
            }).then(start);
        }
    });
  }
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