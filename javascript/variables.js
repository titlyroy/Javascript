// to define variables with "let"
let age=24;

//for print something
console.log(age);

// define objects(non-primitive variables)
const profile= {
    fullName:"Titly Roy",
    post:195,
    followers:569,
    following:5,
    valid:true,
};

//to print type
console.log(typeof profile);
console.log(typeof profile["followers"]);
console.log(typeof profile["fullName"]);

// print profile name only
console.log(profile.fullName);

// or we can write 
console.log(profile["followers"]);

// if we need to just change the fullname only
profile["fullName"] = "Tony Stark"
console.log(profile["fullName"]);

//incase of numbers to sum 
profile["following"]=profile["following"]+1;
console.log(profile["following"]);

//incase of strings
profile["fullName"]=profile["fullName"]+123;
console.log(profile["fullName"]);