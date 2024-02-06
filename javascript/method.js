//arr.forEach(callBackFunction)---> it is used to execute for arrays only also called forEach loop for Array
//**call back function--> It is a function which can execute each of the elements of an array.
//**CallBack--> It is a function that passed as an argument to another function or we can say a function which is to be executed after another function has finished execution.
//for example-->
let arr=["mumbai", "pune", "delhi"];
arr.forEach(function printVal(val){     //value at each index
    console.log(val);
})
// can print array and index 

arr.forEach(function printVal(val,idx,arr){     
    console.log(val,idx,arr);
})

// we can execute it by Arrow function --> arr.forEach((val)=>{});
let months=["jan","feb","march"];
months.forEach((val)=>{
    console.log(val);
});

// HOF/ HOM=> Higher Order funtion or higher order method --> HoF or HOM are the functions hho either take another functions as a parameter inside them or can rturn another functions as their outputs . example-> forEach(callBackFuntion)


// Practice--> for a given array of numbers which can return the square value of each element of the array
let numbers=[2,3,4,5];
console.log(numbers);
// numbers.forEach(function printSquare(val){
//     console.log("Square value of the element  = ",val**2);
// })

// Map methods in arrays---> create a new array with the results of some operation and the value it callback retuns are used to form a new array.
// arr.map(callBackFunction(val){})--> **Map is similar to the foreach only difference is Map returns the value in  a new array   !!immutable

let newNumbers=numbers.map((val)=>{
    return val*2;
});
console.log(newNumbers);


//Filter method=>creats a new array of element by filtrate the value based on some conditions
//e.g= for all even elements=>  let newarr=arr.filter((val)=>{return val%2==0});
let Numbers= [2,5,6,4];
// let evenOnly=Numbers.filter((val)=>{
//     return val%2==0;
// });
// console.log(evenOnly);

// Reduce method=> Performs some operations and reduces the array to asingle value. It returns that single value.
// sum of elements-->
let sumOfNumbers= Numbers.reduce((Res,curr)=>{
    return Res+curr ;
});

console.log(sumOfNumbers);
// in reduce method prev value starts from 0 index value and curr will be the the next index=> 
//for 1st line=> Res=2 ,curr=5 now return = 2+5=7 ; 7 will store in res 
//next res =7 and curr= 6 which is the next index position value ; return= 7+6 = 13
//next res=13 curr=4 and return= 13+4=17
//next res =17 but no cuurent value exist so return res value and print.

// calculate largest number
let LargestNum= Numbers.reduce((prev,curr)=>{
    return prev > curr ? prev : curr ;
});
console.log(LargestNum);
 
//Given array marks of student ,filter out the marks of students who scored 90+
let marks=[50,90,95,92,49,78];
let upScore=marks.filter((val)=>{
return val>90 ;
})  ;
console.log(upScore);

//Q-2 
// let n=prompt("enter a number");
// let arr1=[];
// for(let i=1; i<=n ; i++) {
// arr1[i-1]=i ;

// }
// console.log(arr1);
// let sumOfNumber=arr1.reduce((prev,curr)=>{
// return prev+curr ;
// });
// console.log(sumOfNumber);

// let productOfNumber=arr1.reduce((prev,curr)=>{
//     return prev*curr ;
// });
// console.log(productOfNumber);
