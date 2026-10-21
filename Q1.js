// Q.1

let number=[10,20,30,40,50,60]

let [first, second,fourth, remaining]=number

console.log("first"+first);
console.log("second"+second);
console.log("fourth"+fourth);
console.log("remaining"+ remaining);


// Q.2

let student ={
    name1 :"rahul",
    age:21,
    city:"mumbai"
}

let{
    name1 ,
    age,
    city:studentcity,
    course = "unknown"
}=student;

console.log(name1);
console.log(age);
console.log(studentcity);
console.log(course);


// Q.3

let num=[2,5,8,10,15,20];

let square = num.map( n =>n*n);
console.log("square: "+square);

let grater = num.filter(n => n>20);
console.log("grater than 20: "+grater);

let sum= num.reduce((total,num)=>{
    return num+total;
})
console.log("sum of all no: "+sum);

// Q.4


let students = [
    { name: "tom", marks: 75 },
    { name: "priya", marks: 90 },
    { name: "rahul", marks: 45 },
    { name: "senha", marks: 80 }
];

let passstudent = students.filter(student => student.marks > 60);

console.log("Students scoring above 60:");
console.log(passstudent);

let names = passstudent.map(student => student.name);

console.log("students names");
console.log(names);

let totalmarks = students.reduce((total ,student)=>
    total+student.marks,0);

let average= totalmarks/students.length;

console.log("average marks");
console.log(average);


// Q.5

class bankaccount {

   constructor( accountholder, balance){

    this.accountholder=accountholder;
    this.balance=balance;
   }

   deposit(amount){

    if (amount<=0){
        console.log("Invalid deposit amount");
        return
        
    }
    this.balance += amount;
    console.log("Deposited:"+amount);
    
   }

   withdraw(amount){

    if(amount<=0){
        console.log("Invaild withdrawal amount");
        
    }else if(amount > this.balance){
        console.log("Insufficient balance");
    
    }else{
        this.balance -= amount;
        console.log("withdraw"+ amount);
        
    }
        
   }

   checkbalance(){
    console.log("Account holder: "+this.accountholder);
    console.log("current balance: "+this.balance);
        
   }

}

let account = new bankaccount("rahul",5000);

account.checkbalance();

account.deposit(2000);
account.checkbalance();

account.withdraw(500);
account.checkbalance()


// Q.6 

class Person {

    constructor(name,age){
    this.name = name
     this.age = age
    }
    
}

class Employee extends Person{

    constructor(name ,age, empid , salary){

        super(name,age)

        this.empid=empid
        this.salary=salary
    }

    displaydetails(){

        console.log("name"+this.name);
        console.log("age"+this.age);
        console.log("empid"+this.empid);
        console.log("salary"+this.salary);
        
    }
}

let employee= new Employee("rahul",21,101,30000);

employee.displaydetails();


// Q.7


class invalidAgeError  extends Error{
    
    constructor(message){
        super(message);
        this.name="invalidAgeError"
    }
}

function checkAge(age){

    if(age<18){
        throw new invalidAgeError("Age must be 18 above")
    }
    console.log("your eligible");
    
}

try{
    checkAge(15)
}catch(error){

    console.log(error.name+":"+error.message);
    
}


// Q.8

class InvalidAmountError extends Error {
    constructor(message) {
        super(message);
        this.name = "InvalidAmountError";
    }
}

class InsufficientBalanceError extends Error {
    constructor(message) {
        super(message);
        this.name = "InsufficientBalanceError";
    }
}

let balance = 5000;

function withdraw(amount) {
    if (amount <= 0) {
        throw new InvalidAmountError("Amount must be greater than zero");
    }

    if (amount > balance) {
        throw new InsufficientBalanceError("Insufficient balance");
    }

    balance -= amount;

    console.log("Withdrawal successful");
    console.log("Remaining Balance:", balance);
}

try {
    withdraw(6000);
} catch (error) {
    if (error instanceof InvalidAmountError) {
        console.log("Invalid Amount:", error.message);
    } else if (error instanceof InsufficientBalanceError) {
        console.log("Balance Error:", error.message);
    } else {
        console.log("Unexpected Error:", error.message);
    }
}


// Q.9

let task = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("task completed successfully")
    }, 2000);
    
});

task
    .then(message =>{
        console.log(message)
    })
    .catch(error=>{
        console.log("error:"+error)
    });


// Q.10


function checknumber(number){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(number>0){
                resolve("postive number")
            }else{
                reject("invalid number")
            }
        },2000)
    })
}

checknumber(10)
    .then(result =>{
        console.log(result);
        
    })
    .catch(error=>{
        console.log(error);
        
    })


 // Q.11


// Q.12

let promise = new Promise ((resolve,reject)=>{
    setTimeout(() => {
        resolve(10)
    }, 1000);

})

promise
.then(number =>{
    return number*2;
})
.then(number=>{
    return number+5;
})
.then(result=>{
    console.log("final result"+result);
    
})
.catch(error=>{
    console.log("error"+error);
    
})

// Q.13


export function add(a,b){
    return a+b;
}

export function multiplay(a,b){
    return a*b;
}

// Q.14

function greet(name){
    return `hello ,${name}!welcome.`;
}
export default greet;


// Q.15


function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

module.exports = {
    add,
    subtract,
    multiply
};