 // Declare class Student
class Student 
{ 
    // Characteristics
    name:string; 
  
    //constructor 
    constructor(value:string) 
    { 
       this.name = value 
    }  
 
    //Behaviour
    display():void 
    { 
       console.log("Name of student : "+this.name) 
    } 
 }

 // Create object of above class
 var obj1 = new Student("Joh Biden");
 obj1.display();