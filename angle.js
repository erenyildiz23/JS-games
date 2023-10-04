//add/change HTML elements

const nameTag=document.createElement("h1");
nameTag.innerHTML ="Eren";
document.body.append(nameTag);

const myList =document.querySelector("#fruit");
const listItem =document.createElement("li");
listItem.textContent ="mango";
myList.insertBefore(listItem,myList.getElementsByTagName("li")[1]);
const title =document.getElementById("myTitle");

title.style.backgroundColor = "blue";
title.style.color = "white";
title.style.fontFamily ="consolas";
title.style.textAlign ="center";
title.style.border ="2px solid";
title.style.border.display="block";

//events

function doSomething() {
    alert("You did something!");
    element2.style.backgroundColor ="red";
}



function changeBlue(){
    innerDiv.style.backgroundColor="blue";
}

//show/hide HTML elements

const btn =document.querySelector("#btn");
const myImg =document.querySelector("#myImg");

btn.addEventListener("click",() =>{
    console.log(myImg.style.display);
    if(myImg.style.display == "none"){
        myImg.style.display ="block";
    }
    else{
        myImg.style.display ="none";
    }
})

//detect key presses

const myDiv= document.getElementById("div2");
window.addEventListener("keydown",move);
let x=0;
let y=0;
function move(event){
    switch (event.key) {
        case "ArrowDown":
            y+=5;
            div2.style.top=y+ "px";
            break;
        case "ArrowUp":
            y-=5;
            div2.style.top=y+ "px";
            break;
         case "ArrowRight":
            x+=5;
            div2.style.left= x + "px";
            break;
         case "ArrowLeft":
            x-=5;
            div2.style.left= x + "px";
            break;
        default:
            break;
    }
}

const anibtn =document.getElementById("anibtn");
const myAnimation =document.getElementById("anidiv");

anibtn.addEventListener("click",begin);

function begin(){
    let timerId =null;
    let x2 = 0;
    let y2 = 0;

    timerId=setInterval(frame,5);

    function frame() {
        if(x2 >=200 || y2>=200 ){
            clearInterval(timerId);
        }
        else{
            y2+=1;
            x2+=1;
            myAnimation.style.left =x2 +"px";
            myAnimation.style.top =y2 +"px";
        }
    }
}

