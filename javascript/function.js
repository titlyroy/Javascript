//Functions are block of codes that performs a specific task which can be invoked whenever needed.ex- log , toUpperCase , push() etc.

//** There are 2 parts function definition and function call
//step-1. function definition- function functionNamr(){do some work} step 2. function call- functionName();
function myFunction(){
    console.log("hello!");
    console.log("hello!");
}
myFunction();

//** parameter --> input variables functiondefinitions || Argument--> the value we pass in the function call.
// function myFunction(msg)//parameters- a and b
// {
// console.log(msg);

// }
// myFunction("Restart");// restart is my argument

// sum of 2 numbers
// function sum(a,b){
//   console.log(a+b);
// }
// sum(1,2);


// sum of 2 numbers use return in function
function sum(a,b){
    s= a+b;
    return s;
}

let val = sum(2,2);
console.log(val);

//parameters of a function is defined as local variable ,It is a block scope element because outside the particular block it won't be valid anymore.

//Arrow function--> compact way to write a function
// const functionName= (parameter1, parameter 2..)=> {do some work};

const arrowMul=(a,b)=>{
    console.log(a*b);
};
arrowMul(3,4);
//or
const arrowSum=(x,y)=>{
    return x+y ;
};
let cal=arrowSum(5,6);
console.log(cal);

//or we can wrte without any parameters
const arrowMsg=()=>{
    console.log("hello");
};
arrowMsg();


//Question-1. create a function that takes a string as an argument and returns the number of vowel characters in the string
// function countVowels(str){
//    let count=0;
//     for(const char of str ){
//     if(char==="a"||char==="e"||char==="i"||char==="o"||char==="u")  {
//     count++;}}
// console.log(count);

//     }

// countVowels("owl");

// in arrow function in same task
const countVowels=(str)=>{
    let count=0;
        for(const char of str ){
        if(char==="a"||char==="e"||char==="i"||char==="o"||char==="u")  {
        count++;}}
  return count;
    
}
let result=countVowels("moon");
console.log(result);



