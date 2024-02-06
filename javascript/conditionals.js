//if else statement--->
let color;
let mode="mn";
if(mode=="dark"){
    color="black";
}
else{
    color="white";
}
console.log(color);

// odd even numbers
let number=5;
if(number%2==0){
    console.log("even");
}else{
    console.log("odd");
}

//ternary operator(a?b:c)
let voter_age=10;
 voter_age>=18 ? console.log("canVote") : console.log("cannotVote");//or
let result= voter_age>=18 ? "canVote" : "cannotVote";
console.log(result);

//alert();
//promt();

//practice set 1- Get user input a number using promt("enter a number").check the number is multiple of 5 or not.
// let Number = prompt("Enter a number");
// if (Number % 5 == 0){
//     console.log(Number,"is multiple of 5");
// }else{
//     console.log(Number , "is not multiple of 5");
// }


//Grades of students
let grade=50;
if(grade>=80 && grade<=100){
    console.log("Grades of student is A");
}else if(grade>=70 && grade<=79){
   console.log("Grades of student is B"); 
}
else if(grade>=60 && grade<=69){
   console.log("Grades of student is C"); 
}
else if(grade>=50 && grade<=59){
   console.log("Grades of student is D"); 
}
else if(grade>=0 && grade<=49){
   console.log("Grades of student is F"); 
}
else {
    console.log("invalid");
}



