let body= document.querySelector("body");
let button= document.querySelector("button");
let currentMode ="light"; 
button.addEventListener("click",()=>{
if(currentMode==="light"){
    currentMode="dark";
    console.log(currentMode);
    body.style.backgroundColor="black";
        button.style.backgroundColor="gray";
        button.style.color="darkgreen";
}
else{
    currentMode ="light"; 
    console.log(currentMode);
    body.style.backgroundColor="white";
    button.style.backgroundColor="lightseagreen";
    button.style.color="white";


}});
    




 