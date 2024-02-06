//Events --> The change in the state of an object is known as Event.
//** Events are fired to notify code of "interesting changes" that may affect the code execution.

// Mouse click (click, double click) || keybord event(key press, key up, key down)||Form events(submit)|| print event & many more. follow mdn refereces for event references.
// In case of inline js handler and separated js handler events always  separate js handler will be executed as more important event.
// event handling in js --> node.event=(function)=>{work};
// let box = document.querySelector(".box");
// box.onclick=()=>{
//     console.log("clicked the box");
// };
//Event object--> It is a special object that has details about the event.All event handlers can access the event object properties  and methods.
//node.event=(e)=>{work}; -->[e.type/e.target/e.clientX/e.clientY]
let box = document.querySelector(".box");
box.onclick=(evt)=>{
    console.log("clicked the box");
    console.log(evt.target);
    console.log(evt.type);
    console.log(evt.clientX, evt.clientY);
};

//Event listener : node.addEventListener(event, callback) => to add multiple events || node.removeEventListener(event, callback) => to remove multiple events, In this case callback referene should be same to remove.

//add event listener : node.addEventListener(event, callback)
let button= document.querySelector("button");
let newButton= button.addEventListener("click", (clickFunction) =>{
    console.log("clicked the button 1");
});
 button.addEventListener("click", (clickFunction) =>{
    console.log("clicked the button 2");
});
 button.addEventListener("click", (clickFunction) =>{
    console.log(clickFunction.target);
    console.log(clickFunction.type);
    console.log(clickFunction.clientX, clickFunction.clientY);
});

//to remove =>
let eventRemove=(clickFunction) =>{
    console.log("clicked the button 3");};
    button.addEventListener("click", eventRemove);
    button.removeEventListener("click", eventRemove);

