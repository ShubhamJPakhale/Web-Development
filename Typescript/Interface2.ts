
// Declare interface
interface Student2 
{ 
    name:string, 
    college:string, 
    fun:()=>string 
 } 
 
 class DemoA implements Student2
 {
   name:string;
   college:string; 

   constructor(str1,str2)
   {
      this.name = str1;
      this.college = str2;
      console.log("Inside Demo constructor");
   }

   fun()
   {
      return "Inside fun";
   }
 }

var obj = new DemoA("Piyush","PVG");
 console.log(obj.name) 
 console.log(obj.college)
 console.log(obj.fun())  
 