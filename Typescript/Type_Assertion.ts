/*
TypeScript allows changing a variable from one type to another. TypeScript refers to this process as Type Assertion.
Type Assertion is Compile ime process.

There are types of type assertion as follows ->
1. using angular bracket with data type i.e. <number>
2. using as keyword i.e. val as number 
*/

var no:string = "101"                           // no is of type string
var value:number = <number> <any>no             //value is now of type number 
console.log("After Type Assertion : "+value);
 
var abc:any="21"
var value11:number = abc as number 
console.log(value11);