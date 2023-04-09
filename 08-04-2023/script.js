// console.log(this)
// Alone, this refers to the global object

// function test(){
//     "use strict"
//     console.log(this)
// }
// In a function, this refers to the global object
// In a function, in strict mode, this is undefined

// const Person = {
//     firstName : "Jagan",
//     lastName : "Mohan",
//     fullName : function(){
//         console.log(this.firstName + this.lastName)
//     }
// }

// console.log(Person.fullName())

// In a object method, this refers to the current object

// function getStudentObj(name, age, className){
//     let obj = {name, age, className}
//     return obj;
// }

// class className{
//     constructor(){...}
// }

class Student {
  constructor(firstName, lastName, dob, className) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = dob;
    this.className = className;
  }
  getAge() {
    return 2023 - this.dob;
  }

  getDetails() {
    return `Name is ${this.firstName} ${this.lastName} and age is ${
      2023 - this.dob
    }, studying in ${this.className}`;
  }
}

// let student1 = new Student("jagan", "mohan", 1997, "B46WE");
// let student2 = new Student("askar", "ali", 1998, "B46WE");
// console.log(student2);

// name is fname+lastName and age is  studying in className

// class Admission{
//     constructor(firstName, lastName, dob, className, feeAmount, feePaid){
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.dob = dob;
//         this.className= className;
//         this.feeAmount = feeAmount;
//         this.feePaid = feePaid
//     }
//     getPendingBalance(){
//         return this.feeAmount - this.feePaid
//     }
// }

class Admission extends Student {
  constructor(firstName, lastName, dob, className, feeAmount, feePaid) {
    super(firstName, lastName, dob, className);
    this.feeAmount = feeAmount;
    this.feePaid = feePaid;
  }
  getPendingBalance() {
    return this.feeAmount - this.feePaid;
  }
}

Admission.prototype.getFeeAmount = function(){
    return this.feeAmount
}



let Admission1 = new Admission('Jagan','Mohan', 1997, 'B46WE', 80000, 42000)

console.log(Admission1)

// console.log(Admission1.hasOwnPropety())
// Object

// class name{
//     constructor(){

//     }
// }

// let obj = {
//     name : 'jagan',
//     getName : function(){
//         return this.name
//     }
// }
// console.log(obj.hasPropertY())

// create a class to calculate price for uber;


const func = function(){

}

const func = ()=>{

}

(func(){
    
})()