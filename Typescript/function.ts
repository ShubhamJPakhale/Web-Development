export{}
//function 

function Display1(value: number):void
{
    console.log("the parameter is "+value);
}

var no=21;
Display1(no);

var no1:number=11;
var no2:number=21;
var ret:number=0;

ret=Addition1(no1,no2);
console.log("The sum of number is "+ret);

function Addition1(value1:number,value2:number):number
{
    var ans:number=0;
    ans=value1+value2;
    return ans;
}

var i:number=0;

for(i=0;i<5;i++)
{
    console.log("Om Namah Shivay");
}

