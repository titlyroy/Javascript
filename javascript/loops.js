/*
for loop --> for(let i=1;i<=n;i++) {print(" ");}
i=1  -->is  my initialization value
i<=n -->is my condition 
i++ --> is my updation

examples:
for(let i=1; i<=5; i++) {
    console.log("welcome to loops!");
}
*/

// sum of 1 to n numbers:
/*let n = (prompt("enter a number"));
console.log(n);
let sum=0;
for(let count=1; count<=n; count++) {
   sum = sum + count ;
}
console.log( "Here is sum of the number you entered " , sum );*/

//while loop [ initialization , while(condition){print; updation;}]
// let i= 1;
// while(i<=4){
//     console.log("i = " , i);
//     i++;
// }

//Do while loop--> initialization ; do{print;updation;}while(condition);
// let i=1;
// do{
//     console.log ("i = " , i);
//     i++;
// }while(i<=4);

//for-of Loops[used to calculate values of --> string or array] --> for(let value of string){print;}
// let str="Titly";
// for(let val of str){
//     console.log("val =" , val)
// }

// to calculate the size of the string
// let str="Titly";
// let size= 0;
// for(let val of str){
//     console.log("val =" , val)
//     size++;
// }
// console.log("string size =" , size);

//for-in Loops[used to calculate values of --> object keys] --> for(let key in object ){print;}
// let profile= {
//     fullName:"Titly Roy",
//     post:195,
//     followers:569,
//     following:5,
//     valid:true,
// };
// for(let key in profile){
//     console.log("key = ", key ,  " = " , profile[key] , " (value)");
// }

/*
------------------------------------------------------------------------------------------------------------------------
                                      ~ P R A C T I C E Q U E S T I O N S ~
------------------------------------------------------------------------------------------------------------------------
*/
/* 1. print all even numbers from 0 to 100

console.log("All even numbers from 0 to 100");
for(let i=0; i<=100 ; i++){
    if(i % 2 == 0){
console.log(i);
    }
}
*/

/* 2.  Creat  a game  where you start a  game  number. Ask  the user to keep guessing until the user enters correct values. 
console.log( "Let's Play a game! guess the number-->" );
console.log( "here we go, guess the number");
let gamenumber = 20;
let usernumber= prompt("Enter your number");
while( usernumber != gamenumber ) {
 usernumber = prompt("Sorry! you entered a wrong number");
}
console.log("Congratulations! You have guessed the correct number");
*/



