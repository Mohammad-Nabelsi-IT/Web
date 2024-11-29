function coloring(r){
r.style.backgroundColor="red";
}
function reset(r){
    r.style.backgroundColor="white";
}
function move(event,elem){
let x = event.clientX/4;
let y = event.clientY/4;

// elem.style.backgroundColor="rgb("+x+","+(255-y)+","+y+")";
elem.style.backgroundColor=`rgb(${x},${y},${255-x})`
}