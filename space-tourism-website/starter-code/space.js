var left=document.querySelector("#left");
var right=document.querySelector("#right");
var slideImages=document.querySelectorAll(".theCrew");

var circle=document.querySelectorAll(".circle");
var i=0;
slideImages[i].className="display"
// show(i);
circle[i].setAttribute("src","font awesome\\circle-dot.svg")
right.addEventListener("click",()=>{
    
    i==3?i=0:
    i++
    x=i-1
    x==-1?x=3:x=x
    slideImages[x].className="theCrew";
    slideImages[i].className="display";
    circle[x].setAttribute("src","font awesome\\circle.svg")

    circle[i].setAttribute("src","font awesome\\circle-dot.svg")
    console.log(i,x)
    
})
left.addEventListener("click",()=>{
    
    i==0?i=4:i=i
    i--
    x=i+1
    x==4?x=0:x=x
    slideImages[x].className="theCrew";
    slideImages[i].className="display";
    
    circle[x].setAttribute("src","font awesome\\circle.svg")
    
    circle[i].setAttribute("src","font awesome\\circle-dot.svg")

console.log(i,x)

})

 