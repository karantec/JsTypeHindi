//Primitive

// 7 type:String,Number, Boolean, null,undefined,
// symbol,BigInt

const score=false//dynamic type
const scoreValue=100.3
const isLoggedin=false;
const outsideTemp=null;
let userEmail;
const id=Symbol('123');
const anotherId=Symbol('123');

console.log(id===anotherId);
const bigNumber=3456454545454;

// Refrence (Non Primitive)
//Array, objects, functions, 
const heros=("Shaktiman","naagraj","doga");

let myobj=
{
    name:"hites",
    age:22,
}
const myFunction=function(){
    console.log("hellow world")
}
console.log(typeof bigNumber);
// Return type of variables in JavaScript
// 1) Primitive Datatypes
//        Number => number
//        String  => string
//        Boolean  => boolean
//        null  => object
//        undefined  =>  undefined
//        Symbol  =>  symbol
//        BigInt  =>  bigint

// 2) Non-primitive Datatypes
//        Arrays  =>  object
//        Function  =>  function
//        Object  =>  object

