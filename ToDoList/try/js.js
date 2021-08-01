const list = document.querySelector(".box");
// e.target.getAttribute("class")=="view"
list.addEventListener("click",function(e){
    if(e.target.getAttribute("class")=="view"){
        console.log(e.target.getAttribute("value"));
    }

})