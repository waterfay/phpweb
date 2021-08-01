
window.onload=function(){
    var cvs=document.getElementById("canvas");
    var ctx=cvs.getContext("2d");

$(document).ready(function() {

    var canvas = document.getElementById('canvas');

    function resize() {
        var height = window.innerHeight;
        var width = window.innerWidth;
        canvas.width = width;
        canvas.height = height;

        var ctx = canvas.getContext("2d");

        function circle() {
          
            var x = Math.floor(Math.random() * width) +1;
            var y = Math.floor(Math.random() * height) +1;
            var r = Math.floor(Math.random() * height)  / 200;
          
            // var color = "#" + (0x1000000 + (Math.random()) * 0xffffff).toString(16).substr(1, 6);
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
            setInterval(circle, 200);
        }
        repeat();
    }
    resize();
    $(window).resize(function() {
        resize();
    });
});

};