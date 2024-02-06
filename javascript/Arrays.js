//create a array-collection of items in linear form
let veggies = ["tomato","potato","carrot","beet"];
console.log(veggies);
console.log(veggies.length);//propery to calculate length 

//Arrays are type of object wich also have key:value pairs where index is key and value is data.
//Array indices /index--> arr[0]... 
let foodItems = ["burger", "chips","cakes","orange"];
console.log(foodItems[1]);
// Array is mutable
foodItems[0] ="samosa";
console.log(foodItems);

// print all elements of array using loops
//iterable = arrays,objects,strings

let colour=["red", "green", "blue", "black"];
// for(i=0; i<foodItems.length; i++){
//     console.log (colour[i]);

// }

// we can use for of loop 
for(let rainbowItem of colour){
    console.log (rainbowItem);
}

//Avarage marks of a class-->
let marks=[85,97,44,36,60];
let AvarageMark=0;
for(let i=0;i< marks.length;i++) {
 console.log(marks[i]);
AvarageMark=(AvarageMark+marks[i]);
}
console.log (AvarageMark/marks.length);

//or

// let mark=[85,97,44,36,60];
// let sum=0;
// let Avg;
// for(let val of mark){
//     sum= sum+val;
//     Avg= sum/mark.length;
// }
// console.log(`The Avarage value of the marks = ${Avg}`);
//Question-2-->
let Price=[250,645,300,900,50];

//All item have offer 10% OFF on them
for(let i=0; i< Price.length; i++){
    // console.log(Price[i]);
let offer= Price[i]/10;
Price[i]-= offer;

}
console.log("new offer perice is =", Price);

//or

for(let val of Price) {
    let offer= val/10;
    val-= offer;//val=val-offer
}
console.log("new offer perice is =", Price);

//Methods in Array-->
//1. push();--> to add something at the end of the array !! Mutable 
let Path=["karma", "mokhs","uplabdhi"];
console.log(Path);
//  Path.push("Dhairya", "Shanti");
// console.log(Path);

//2. pop();---> to delete something at the end of the array !!Mutable
let deletedItem=Path.pop();
console.log(Path);
console.log(deletedItem);

//3. toString();--> used to convert an array to a string !!immutable-does not change the original array !!
let items=[20,25,12,26];
console.log(items);
console.log(items.toString());
console.log(items);
//4. array1.concat(array2);--> used to concat multiple arrays to a single array and return a new array!! immutable
let array1 = ["a", "b", "c", "d", "e" ];
let array2 = ["A", "B", "C", "D"];
let array3 =["f","g", "h", "I", "J", "K"];
newArray= array1.concat(array2, array3);
console.log(newArray);
//5. unshft(); --> to add new items to an array in the start position !! mutable
let hobby=["dance","painting","singing"];
hobby.unshift("craft");
console.log(hobby);

//6. shift();---> to delete something at the starting value of the array !!Mutable
let deletedPart=hobby.shift();
console.log(hobby);
console.log(deletedPart);

// 7.slice(startindex , endeindex)--> to cut a piece of an array. end index in not included. !!immutable
let colourItems=["red", "green", "blue", "white", "black"];
console.log(colourItems.slice(1,3));
console.log(colourItems);
console.log(colourItems.slice(1));

// 8. splice(startindex , Deletedindex , newaddindex);---> y this method  we can delete replace or add anyitem in an array.
let numberOfItems =[1,2,3,4,5,6]; 
//** to add elements to the array !! mutable
// numberOfItems.splice(2, 0 ,10 );//start index= 2 , deleted index= 0, newadd element at index 2 is =10
// console.log(numberOfItems);

//** to delete elements
// numberOfItems.splice(2,2);  // start index = 2, deleted 2 index from 2nd index
// console.log(numberOfItems); 

// //**  to Replace elements !! mutable
// numberOfItems.splice(2,1,15);// start index = 2, deleted 1 index at 2nd index , added 15 to the same deleted index 
// console.log(numberOfItems); 

//** if you pass only staring index number then splice will act like slice 
// numberOfItems.splice(2);// it will remove all elements from 2nd index
let deletedNumbers=numberOfItems.splice(2);
console.log(deletedNumbers);
console.log(numberOfItems); 
//**  splice()--> no index value no change

/*
------------------------------------------------------------------------------------------------------------------------
                                      ~ P R A C T I C E Q U E S T I O N S ~
------------------------------------------------------------------------------------------------------------------------
*/

let company=["Bloomberg","Microsoft","Uber","Google"];
//remove the first company
// console.log(company.shift());
// console.log(company);
//remove uber add ola
company.splice(2, 1,"ola");
console.log(company);
//add amazon in the end
company.push("Amazon");
console.log(company);
