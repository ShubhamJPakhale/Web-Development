//Array in typescript 

//c, c++,java,c#
//int arr[5]={10,20,30,40,50};

var arr1:number[]=[10,20,30,40,50]; // Arr1 is one diensional array array which contains 5 elements 

console.log("Length of arr1 is "+arr1.length);//5
console.log("First element of arr1 is "+arr1[0]);//10
console.log("Second element of arr1 is "+arr1[1]);//20

console.log("Elements from array is as follows : ");
var i:number=0;
for(i=0;i<arr1.length;i++)
{
    console.log(arr1[i]);
}

var arr:number[][]=[[10,20,30,40,50],[4,8,9]]; //multidimensional arrray
