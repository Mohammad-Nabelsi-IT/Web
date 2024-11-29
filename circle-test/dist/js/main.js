let myRect = document.getElementById("rect");
var l =200;
var t =200;
var step=20;

function moveLeft(){
    l-=step;
    myRect.style.setProperty("left" , l+"px");
}
function moveRight(){
    l+=step;
    myRect.style.setProperty("left" , l+"px");
}
function moveUp(){
    t-=step;
    myRect.style.setProperty("top" , t+"px");
}
function moveDown(){
    t+=step;
    myRect.style.setProperty("top" , t+"px");
}