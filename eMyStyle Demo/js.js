$(document).ready(function(){
$(".slick-shirt").on({
    "click": function(e){
        $(".slick-active").attr("aria-hidden","false").find("img").attr("src")
        NowShirt=$(".slick-active").attr("aria-hidden","false").find("img").attr("src")
        $(".Shirt-Ex>img").attr("src",NowShirt)
    }
  })
  $(".btn2").on({
    "click": function(e){
        $(".Shirt-Ex>img").after(`<img src="./Collar/collar01.png" style="position:absolute">`)
}
});
});


function Gameplay(){
    document.getElementsByClassName("StartGame")[0].style.display = 'none';
    document.querySelector("#Step").style.display = 'block';
    $(document).ready(function(){
        $('.slick-bg').slick({
            dots: false,
            arrows: true,
            infinite: false,
            speed: 300,
            slidesToShow: 1,
            slidesToScroll: 1,
            variableWidth: true,
            prevArrow: '<span style="color:#ffffff;font-size:4rem;position: absolute;top:179px;left: -72px;"> ◀ </span>',
            nextArrow: '<span style="color:#ffffff;font-size:4rem;position: absolute;top:179px;left:370px;"> ▶ </span>',
        });
      });

}
function GameStep1(){
    document.querySelector("#Step1").style.display = 'none';
    document.querySelector("#Step2").style.display = 'block';
    
}
let myjson=null;
$.getJSON("obj.json",function(e){
     myjson=e.Shirt.img;
     todo();
})

function todo(){
    console.log(myjson)
    for(const key in myjson){
        $(".slick-bg").append(`<img src="${myjson[key]}" width="355px" height="400px" class="slick-shirt">`);
    }
    $(".Shirt-Ex>img").attr("src",Object.values(myjson)[0]);

}

NowShirt=$(".slick-active").attr("aria-hidden","false").find("img").attr("src")
$(".Shirt-Ex>img").attr("src",NowShirt)


