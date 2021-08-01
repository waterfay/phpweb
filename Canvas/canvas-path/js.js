
window.onload=function(){
    var cvs=document.getElementById("canvas");
    var ctx=cvs.getContext("2d");

    ctx.fillStyle="#f1f6f8";
    ctx.globalAlpha=0.5;
    width = cvs.width,
    height = cvs.height,
    ctx.fillRect(100,100,100,100);

    ctx.globalAlpha=1;
    ctx.strokeStyle="#f1f6f8";
    ctx.strokeRect(200,200,50,50);

    ctx.beginPath();
    ctx.moveTo(200,100);
    ctx.lineTo(300,300);
    ctx.closePath();
    ctx.stroke(); //ctx.fill
    //利用路徑畫出多邊形
    ctx.beginPath();
    ctx.moveTo(300,300);
    ctx.lineTo(400,350);
    ctx.lineTo(250,400);
    ctx.closePath();
    ctx.fill();

    ctx.font = "20px Georgia";
    ctx.fillText("Hello World!", 10, 50);
    
    ctx.font = "30px Verdana";
    // Create gradient
    var gradient = ctx.createLinearGradient(0, 0, cvs.width, cvs.height);
    gradient.addColorStop("0", "magenta");
    gradient.addColorStop("0.5", "blue");
    gradient.addColorStop("1.0", "red");
    // Fill with gradient
    ctx.fillStyle = gradient;
    ctx.fillText("Big smile!", 500, 500);


    // function drawArc(s, e) {
    //     var x = width / 2, // center x
    //         y = height / 2, // center y
    //         radius = 100,
    //         counterClockwise = false;
    
    //     ctx.fillStyle = '#2BD1EA';
    //     ctx.strokeStyle = '#2BD1EA';
    
    //     ctx.beginPath();
    //     ctx.moveTo(x, y);
    //     ctx.arc(x, y, radius, s, e, counterClockwise);
    //     ctx.fill();
    //     ctx.stroke();
    // }
    
    // var step = 2,
    //     startAngle = - 0.12 * Math.PI,
    //     endAngle = 0;
    
    // var animation_interval = 10,
    //     n = 90; // count of arc
    
    // var animation = function () {
    //     if (step <= n) {
    //         endAngle = step * 1.50 * Math.PI / n;
    //         drawArc(startAngle, endAngle);
    //         step++;
    //     } else {
    //         // clearInterval(varName);
    //     }
    // };
    
    // setInterval(animation, animation_interval);




//     $(document).ready(function() {

//     var canvas = document.getElementById('canvas');

//     function resize() {
//         var height = window.innerHeight;
//         var width = window.innerWidth;
//         canvas.width = width;
//         canvas.height = height;

//         var ctx = canvas.getContext("2d");

//         function circle() {
          
//             var x = Math.floor(Math.random() * width) + 1;
//             var y = Math.floor(Math.random() * height) + 1;
//             var r = height / 10;
          
//             var color = "#" + (0x1000000 + (Math.random()) * 0xffffff).toString(16).substr(1, 6);
//             var thick = Math.floor(Math.random() * r/5) + 1;
//             var R = Math.floor(Math.random() * 255) + 1;
//             var G = Math.floor(Math.random() * 255) + 1;
//             var B = Math.floor(Math.random() * 255) + 1;
//             var alpha = 0;
//             var RGB = "rgb(" + R + "," + G + "," + B + ")";
//             var RGBA = "rgba(" + R + "," + G + "," + B + "," + "0.4)";            

//             ctx.strokeStyle = RGB;
//             ctx.fillStyle = RGBA;
//             ctx.lineWidth = thick;

//             ctx.beginPath();
//             ctx.arc(x, y, r, 0, Math.PI * 2, true);
//             ctx.stroke();
//             ctx.fill();
//             ctx.closePath();
//         }
//         function repeat() {
//             setInterval(circle, 50);
//         }
//         repeat();
//     }
//     resize();
//     $(window).resize(function() {
//         resize();
//     });
// });


$(document).ready(function() {

    var canvas = document.getElementById('canvas');

    function resize() {
        var height = window.innerHeight;
        var width = window.innerWidth;
        canvas.width = width;
        canvas.height = height;

        var ctx = canvas.getContext("2d");

        function circle() {
          
            var x = Math.floor(Math.random() * width) + 1;
            var y = Math.floor(Math.random() * height) + 1;
            var r = height / 100;
          
            var color = "#" + (0x1000000 + (Math.random()) * 0xffffff).toString(16).substr(1, 6);
            var thick = Math.floor(Math.random() * r/5) + 1;
            // var R = Math.floor(Math.random() * 255) + 1;
            // var G = Math.floor(Math.random() * 255) + 1;
            // var B = Math.floor(Math.random() * 255) + 1;
            var alpha = 0;
            var RGB = "#ffffff";
            var RGBA = "#ffffff";            

            ctx.strokeStyle = RGB;
            ctx.fillStyle = RGBA;
            ctx.lineWidth = thick;

            ctx.beginPath();
            ctx.arc(x, y, r, 0, Math.PI * 2, true);
            ctx.stroke();
            ctx.fill();
            ctx.closePath();
        }
        function repeat() {
            setInterval(circle, 500);
        }
        repeat();
    }
    resize();
    $(window).resize(function() {
        resize();
    });
});



};
