export{};

//required arguments - what ever arguments we pass that should be present in function that  ifor parameter

function sum(a:number,b:number,c:number):number
{
    var sum:number=0;
    sum=a+b+c;
    return sum;
}

var ret=sum(10,20,30);
console.log("sum of all number is "+ret);
// if we pass more than 3 parameter here in sum function then it will give error  number of expected arguments are is lesss than given ike 


//Default argument : intialize argument at defination only 
// we have to give default argument at last only once required fiels are given then only start to give default value 

// **if we give first variable as default and second variable as required field then we get error ....

function Demo(a:number,b:number=20,c:number=30)
{
    console.log("Demo");
}

//Demo(); error 

Demo(10);
Demo(10,51);
Demo(11,84,75);

//Optional argument : 
//parameter passing is optional either we can pass.. if we didn't pass then we get undefined as output 
//write optional parameter from right to left 

function Optional(a:number,b?:number)
{
    console.log("a is "+a);
    console.log("b is "+b);
}

Optional(10,11);
Optional(11);// a is 11 & b is undefined - b  is called before initialize 

function multiply(a:number,b:number,c?:number):number //? is used for optional parameter 
{
    var ans=0;
    ans = a*b;
    if(c != undefined)
    {
        ans=a*b*c;
    }
    return ans;
}

var Mulret:number = multiply(10,20);
console.log("Multiplication of two number is "+Mulret);

var Mulret1:number = multiply(10,20,4);
console.log("Multiplication of two number is "+Mulret1);

// Rest argument :
