// Arithmatic operators = + , - , * ,/
let a=4;
let b=2;

console.log("a + b =", a+b);
console.log("a - b =", a-b);
console.log("a * b =", a*b);
console.log("a / b =", a/b);

// modulo=% , exponentiation= ** 
console.log("a % b =", a%b);
console.log("a ** b =", a**b);//a^b
// Unary operator-->
// Increment--> pre= ++a and post= a++
let c=5;
console.log("c++ = ", c++);
console.log(c);
let d=3;
console.log("++d =", ++d);

// Decrement--> pre= --b and post= b--
console.log("a-- =", a--);
console.log("a =" , a);
console.log("--b =", --b);

// Assignment Operators---> = , += , -= ,  *= , /= , %= ,**=
let x=5;
let y=6;
console.log("y = x " , y=x );//y=5
console.log("y = " , y);

console.log("x += 5 means x = " , x += 5 );
console.log("x = " , x );

console.log("x -= 5 means x = " , x -= 5 );
console.log("x = " , x );

console.log("x *= 5 means x = " , x *= 5 );
console.log("x = " , x );

console.log("x /= 5 means x = " , x /= 5 );
console.log("x = " , x );

console.log("x %= 5 means x = " , x %= 5 );
console.log("x = " , x );

console.log("x **= 5 means x = " , x **= 5);
console.log("x = " , x );

// Comparison Operator--> == equal to , not equal to != , === equal to & type , not equal &type !== 
let m = 5;
let n = 6;
// equal to --> 
console.log("m == n ", m==n); //false
// not equal to -->
console.log("m != n", m!=n); //true

//  === equal to & type , not equal &type !== 
let p = 5;//number
let q = "5";//string
console.log("p === q", p===q);//false 
console.log("p == q" , p==q);//true

console.log("p !== q", p !== q);//true
console.log("p != q" , p != q);//false

//> , >= , <= , <
console.log( "m = " ,m , "n = ", n);
console.log("m > n ",m>n); //false
console.log("m >= n ",m>=n); //false
console.log("m < n ", m<n); //true
console.log("m <= n ", m<=n); //true

//Logical Operator
console.log( "m = " ,m , "n = ", n);
console.log( "m > n  && m < n  ", ( m > n && m < n));//false
console.log( "m > n  || m < n  ", ( m > n || m < n));//true
console.log( "!(m > n)", !(m>n));//true








