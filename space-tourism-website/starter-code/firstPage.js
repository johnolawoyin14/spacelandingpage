var aTag=document.querySelectorAll("a");

aTag.forEach((a)=>{
    a.addEventListener("click",()=>{
        a.classList.toggle("border");
        
    
    }) 
})