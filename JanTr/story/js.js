function gameplay (){
    Swal.fire({
        title: '訓練家，你叫什麼名字？',
        input: 'text',
        inputValue: '小智',
        showLoaderOnConfirm: true,
        confirmButtonText: '就決定是你了',
        cancelButtonText: '略過',
        // cancelButtonColor: "#000000",
        showCancelButton: true,
        allowOutsideClick: false,
        background:'rgb(245, 222, 178,.5)',
    })

}
