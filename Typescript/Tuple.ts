//Tuple in typescript 
// tuple is collection of hetrogenous element in ts

var Arr1=[10,true,30,"Shubham",50.78]; // Arr1 is one diensional array whi array which contains 5 elements 

console.log("Length of arr1 is "+Arr1.length);
console.log("First element of arr1 is "+Arr1[0]);
console.log("Second element of arr1 is "+Arr1[1]);

console.log("Elements from array is as follows : ");
var i:number=0;

// iteration of tuple through for loop in typescript 

for(i=0;i<Arr1.length;i++)
{
    console.log(Arr1[i]);
}

for(var index in Arr1)
{
    console.log(Arr1[index]);
}