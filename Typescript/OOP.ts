//Object Oriented Programming (OOP)

// internally oop class is coverted as closure in javascript due to functional programming of js using tsc transpilation process

//Class Defination

class Arithmetic {
    //public Val1:number=10;
    //public Val2:number=11;
    //public Ret:number=0;

    //characteristics 
    No1: number;
    No2: number;

    constructor(a: number, b: number) {
        this.No1 = a;
        this.No2 = b;
    }

    Addition() // Behaviour
    {
        var Ans: number = 0;   //Local Variable 
        Ans = this.No1 + this.No2;
        return Ans;
    }

    Substraction() // Behaviour
    {
        var Ans: number = 0;   //Local Variable 
        Ans = this.No1 - this.No2;
        return Ans;
    }
}

var obj1 = new Arithmetic(10, 11);
var obj2 = new Arithmetic(20, 21);

var Ret: number = 0;

Ret = obj1.Addition();
console.log("Addition is " + Ret)

Ret = obj2.Substraction();
console.log("Substraction is " + Ret)


