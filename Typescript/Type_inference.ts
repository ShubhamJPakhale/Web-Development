/* type inference - in this method, typescript compiler will determine the data type of variable based on initialized value 
Types are inferred by TypeScript compiler when:

1. Variables are initialized

2. Default values are set for parameters

3. Function return types are determined
*/

var a="Typescript";
console.log(a);// typescript compiler type inference a as string data type 

var b=11;
console.log(b);// typescript compiler type inference b as number data type 

var c=true;
console.log(c);// typescript compiler type inference c as boolean data type 

function sum(d,e):number
{
    return d+e;
}

sum(10,11);// compiler inference d and e variable as number data type
