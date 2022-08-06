/*
Anonymous Function :- Function without name is called anonymous function. 
    this function is called by using variable in which it is defined. 
*/

var anony = function(a:number,b:number):number
{
    return a+b;
}

var ans=anony(10,11);
console.log("Output of anonymous function is "+ans);