// $(document).ready(function(){
//     $(".button").click(function(event){
//         $('.text').toggleClass('active');
//     })
// })

const containerEle = document.querySelector(".swiper-wrapper");

let observer = new MutationObserver((mutationRecords) => {
  console.log(mutationRecords); // 输出变动记录
});

observer.observe(containerEle, {
    attributes:true,
    addedNodes: true, // 监视node所有后代的变动
    removedNodes: true, // 记录任何有变动的属性的旧值

});


var swiper = new Swiper(".mySwiper", {
    effect:"fade",
    direction: "vertical",
    slidesPerView: 1,
    spaceBetween: 30,
    mousewheel: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
  lightbox.option({
'resizeDuration': 200,
'wrapAround': true
})

lightbox.option({
'resizeDuration': 200,
'wrapAround': true
})

function resizewin(e){

// e.preventDefault();
a=$(window).width()
b=$(".list").height()
console.log($(".list"))
$(".toggle").offset({top:b-35,left:100})
}

$(document).ready(function(){
resizewin()
$(".dropdown").click(function(e){
  e.preventDefault();
    resizewin()
    $(".toggle").toggle();
});
$(".dropdown-moble").click(function(e){
    e.preventDefault();
    e.stopPropagation()
    $(".toggle-moble").toggle();
})
$('.nav-list').click(function(e) {
    e.stopPropagation()
    $(".asidetoggle").toggleClass('open');
  });
  $(window).resize(function(e) { 
    e.stopPropagation()
    $(".asidetoggle").removeClass('open');
});
});

$(".scrollTop").click(function(){
$("html body").animate({
    scrollTop:0
},700);
})

var swiper = new Swiper(".mySwiper", {
  effect:"fade",
  direction: "vertical",
  slidesPerView: 1,
  spaceBetween: 30,
  mousewheel: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
lightbox.option({
'resizeDuration': 200,
'wrapAround': true
})

lightbox.option({
'resizeDuration': 200,
'wrapAround': true
})


// $(window).resize(function() { //開始監聽視窗寬度
//     HEIGHT=$(".list").height()
//     WIDTH=$(".list").width()
//     Off=$(".toggle").offset();
//     Off.top=HEIGHT
//     Off.left=WIDTH
//     console.log(HEIGHT) //視窗寬度
//     console.log(Off)
//     a=$(window).width()
//     console.log(a)
// });
