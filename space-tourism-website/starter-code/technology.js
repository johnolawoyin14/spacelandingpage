var technology=document.querySelectorAll(".vehicleContainer");
var number=document.querySelectorAll(".number");
// technology.forEach(tech => {
//    tech.style.display="flex"
// });

technology[0].style.display="flex";

number[0].addEventListener("click",()=>{
    technology[0].style.display="flex"
    technology[1].style.display="none"
    technology[2].style.display="none"

    number[0].className="theNumber"
    number[1].className="number"
    number[2].className="number"
    
})
number[1].addEventListener("click",()=>{
    technology[1].style.display="flex"
    technology[0].style.display="none"
    technology[2].style.display="none"

    number[0].className="number"
    number[1].className="theNumber"
    number[2].className="number"
})
number[2].addEventListener("click",()=>{
    technology[2].style.display="flex"
    technology[0].style.display="none"
    technology[1].style.display="none"

    number[0].className="number"
    number[1].className="number"
    number[2].className="theNumber"
})
