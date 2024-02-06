/*  What is window object?
The window object represents an open window in browser.It is browser's object(not JavaScript) & it automatically created by browser.It is a global object with lots of properties & methods.
console.log("dom");--> It will be same as --> window.console.log("dom");

what is DOM?
when the browser loaded it automatically creats a Document Objet Model(DOM)of the page. It is basically a tree like stucture.
Dom is responsible for accessing the HTML document by JS.
 console.log-> only print 
 console.dir-> print the all method and function and properties of the document
  Each element of DOM is called node.
           
           Window(node)
              |
            Document(node)
          |          |
    Head(node)       Body(node)
         /  \       /  |  \
    meta   title  div img  script --> each elements are nodes
**
console.dir(document.body.childNodes[1]);
document.body.style.backgroundcolor = "red";
 **
 The changes is webpage due to some action of user called Dom manipulation / Dynamic manipulation . It does not change the main HTML or Css code it only changes dynamically.



 ------------------------------------------------------------------------------------------------------------------------
                    <---DOM Manipulation--->

1. Selecting with Id--> document.getElementById("myId")

2. Selecting with class---> document.getElementsByClassName("class")--> It returns a  HTMLcollection . 
HTMLCollection : It almost like an array. It has length and indices . 

3.selecting with Tagname---> document.getElementByTagName("tagname")
It also returns a  HTMLcollection . 
HTMLCollection : It almost like an array. It has length and indices . 


*/
// let heading=document.getElementsByClassName("heading");
// console.log(heading);
// console.dir(heading);

// let paragraph=document.getElementById("para");
// console.log(para);
// console.dir(para);

// let click=document.getElementsByTagName("button");
// console.log(click);
// console.dir(click);

/*  
Query Selector-->
document.querySelector("class/Id/tag");--> It always return the first element 
document.querySelectorAll("class/tag");--> returns a node list[nodelist has its on length and index]
*/
//console.log(document.body.firstChild);--> It returns text nodes.
// DOM tree-->creates  #text nodes & #comments nodes & #Elements nodes. In JS we will work only with element nodes. But in first node will create #text node .
//document.querySelector("div").Children;--> HTMLCollection(3) [h2, p, i]0: h21: p2||ilength: 3[[Prototype]]: HTMLCollection.

/* Properties of DOM manipulation -->
1. tagName : returns tag for element nodes.
2. innertext : returns the text content of element and its children.
3. innerHTML : returns the plain text or Element contents in the element.
4.textContent : returns the textual content even for the hidden content element.
*/
// let div=document.querySelector('div');
// console.dir(div);
// console.dir(div.innerText);
// console.dir(div.innerHTML);
// console.dir(div.textContent);
// console.dir(div.innerText='Nothing');
// console.dir(div.innerHTML='<div>No list</div>');

// let h2=document.querySelector('h2');
// console.dir(h2.innerText);
// h2.innerText= h2.innerText + "From all students";
// console.dir(h2.innerText);

/* let box=document.querySelectorAll(".box");
box[0].innerText="new box 1";
box[1].innerText="new box 2";
box[2].innerText="new box 3";
 or

using loops-->
let box=document.querySelectorAll(".box");
let index=0;
for(let divs of box)
{
    divs.innerText=`new text ${index}`;
    index++;
}
*/

/* Attributes-->
1. getAttribute(attribute);--> to get the attribute value
2. setAttribute(attribute, value);--> to set the attribute value to new value.

let input= document.querySelector('input');
let val=input.getAttribute("type");
console.log(val);

val=input.setAttribute("type", "radio");
console.log(val); */

/*
style--> node.style--> changes the css in js 
let input= document.querySelector('input');
input.style.backgroundColor="lightblue";
let label= document.querySelector('label');
label.style.textDecoration = "underline";
*/

/* Insert elements=>
let el= document.createElement('');
1. node.append(el);--> adds at the end of the node(inside the node)
2.node.prepend(el);--> adds at the start of the node(inside the node)
3.node.before(el);--> adds before the node(outside the node)
4.node.after(el);--> adds after the node(outside the node)


let newBtn= document.createElement('button');
newBtn.innerText= "click me"; 
console.log(newBtn);
let div= document.querySelector('div');
div.append(newBtn);
div.prepend(newBtn);
div.before(newBtn);
div.after(newBtn);
*/

/* delete nodes--> node.remove();
let p= document.querySelector('p');
p.remove(); */

//practice qs -->

// let para= document.createElement('para');
// let p= document.querySelector('p');
// p.classList.add("para");
//classlist add used for adding more than one class, we can remove a class from list  by --> node.classlist.remove("classname");






