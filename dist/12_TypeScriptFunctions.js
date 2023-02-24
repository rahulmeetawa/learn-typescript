"use strict";
// Functions are the primary means of passing data around in JavaScript. TypeScript allows you to specify the types of both the input and output values of functions
//Parameter Type Annotations :
//Example 1 :
function fun(x) {
    console.log(x);
}
fun(4); // Here we cannot use this "fun("rahul")"
//Example 2 :
function fun1(x) {
    console.log(x);
}
fun1("rahul");
//Normal Function
/*function name():void {
    return "rahul";
}
console.log(name()); //Type 'string' is not assignable to type 'void'.
*/
//Return Type Annotations
function addNum(x, y) {
    return x + y;
}
console.log(addNum(3, 4));
