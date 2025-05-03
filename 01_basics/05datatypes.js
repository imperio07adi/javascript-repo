// Primitive 

// 7 types : String , Number, Boolean, Null, Undefined, Symbol, BigInt

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false
const outsideTemp = null
let userEmail = undefined;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

const bigNumber = 324546564655164864653n



// Reference type (Non premitive)

// Arrays, Objects, Functions

const heros = ["shaktimaan" , "naagraj" , "doga"];
let myObj = {
    name: "hitesh",
    age:22,
}

const myFunction = function(){
    console.log("hello World");
}

console.log(typeof id);
