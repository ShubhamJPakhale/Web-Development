// Procedure Oriented Programming (POP)

function Addition(No1:number,No2:number):number
{
    var ans:number=0;
    ans=No1 + No2;
    return ans;
}

function Substraction(No1:number,No2:number):number
{
    var ans:number=0;
    ans=No1 - No2;
    return ans;
}

var value1:number=10;
var value2:number=11;
var Ret:number=0;

Ret=Addition(value1,value2);
console.log("Addition is "+Ret)

Ret=Substraction(value1,value2);
console.log("Substraction is "+Ret)
