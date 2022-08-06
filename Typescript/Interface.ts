 /*
Interface : 
    Interfaces define properties, methods, and events, which are the members of the interface. 
    Interfaces contain only the declaration of the members. 
    It is the responsibility of the deriving class to define the members. 
    It often helps in providing a standard structure that the deriving classes would follow.
*/

// Declare interface
interface StudentN
{ 
    name:string, 
    college:string, 
    fun:()=>string 
 } 
 
 // Implement the above interface
 var objn:StudentN = 
 { 
    name:"Piyush Khairnar",
    college:"Pune University", 
    fun: ():string =>{return "Welcome to Marvellous Infosystems"} 
 }
 
 // Display contents of object
 console.log("Students Object objn:") 
 console.log(objn.name) 
 console.log(objn.college) 
 console.log(objn.fun())  
 
  // Implement the above interface
 var objm:StudentN = 
 { 
    name:"Rahul Joshi",
    college:"Modern", 
    fun: ():string =>{return "Marvellous : Admission Confirmed"} 
 } 
   
  // Display contents of object
 console.log("Students Object objm") 
 console.log(objm.name) 
 console.log(objm.college)
 console.log(objm.fun())  
 