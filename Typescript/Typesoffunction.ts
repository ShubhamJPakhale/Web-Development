var ret:number=0; //global variable 

// Regular function :-

function Addition1(Val1:number,Val2:number):number
{
    var ans:number=0;//local variable
    ans = Val1+Val2;
    return ans;
}

ret=Addition1(10,11);
console.log("Addition is "+ret);

// Anonymous function :- function(function without name)

var Addition2= function(Val1:number,Val2:number):number
{
    var ans:number=0;//local variable
    ans = Val1+Val2;
    return ans;
}

ret=Addition2(21,30);
console.log("Addition is "+ret);

// Fat arrow/ Lambda / Arrow function :-

var Addition3 = (Val1:number,Val2:number):number =>
{
    var ans:number=0;//local variable
    ans = Val1+Val2;
    return ans;
}

ret=Addition3(21,80);
console.log("Addition is "+ret);