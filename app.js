let boxes= document.querySelectorAll(".box");
let resetButton= document.querySelector("#reset-btn");
let newButton=document.querySelector("#new-btn");
let para= document.querySelector("#msg");
let msgContainer= document.querySelector(".msg-container");


//player x / player 0 trun added
let turnx=true; 

// add winning patterns in 2D array
const winPatterns=[
[0, 1, 2],
[3, 4, 5],
[6, 7, 8],
[0, 3, 6],
[1, 4, 7],
[2, 5, 8],
[0, 4, 8],
[2, 4, 6]
];


//for reset the game-->
const resetGame=()=>{
    turnx=true;
    enableBoxes();
    msgContainer.classList.add("hide");


};

//for x and 0 adding in the boxes and make it unchangable
boxes.forEach((box)=>{
     box.addEventListener("click",()=>{
        // console.log("box was clicked");
        if(turnx){
            box.innerText="X";
            turnx=false;
        }else{
            box.innerText="0";
            box.style.color="#ff7900";
            turnx=true;
        }
        box.disabled=true;//for not changing after clicked once

        checkWinner();
     });
    
});
//for disable all button after getting first winner
const disableBoxes=(box)=>{
    for(let box of boxes){
        box.disabled=true;
    }
};
// need to enable all buttons for reset or new game start
const enableBoxes=(box)=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};
//showing the winner in the top
const showWinner=(winner)=>{
    para.innerText=`Congradulations! The winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};




//checking winner need to access all the position of boxarray 
const checkWinner = ()=>{
    for(let pattern of winPatterns){
        
          let pos1Val =  boxes[pattern[0]].innerText;
          let pos2Val =  boxes[pattern[1]].innerText;
          let pos3Val =  boxes[pattern[2]].innerText;

// if there is no empty place then only it will check for the value is equal for 3 position or not

   if(pos1Val !=="" && pos2Val !=="" && pos3Val !==""){
    if(pos1Val===pos2Val&& pos2Val===pos3Val){
    // console.log("winner", pos1Val);
    showWinner(pos1Val);
   
   }
}
}};

//acceess the reset and new game button-->
resetButton.addEventListener("click", resetGame);
newButton.addEventListener("click", resetGame);

