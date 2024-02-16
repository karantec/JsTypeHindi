//array
const myArray=[0,1,2,3,4,5,true,'karan'];
const myHeros=['Spiderman',"naagraj"];
const myArray2=new Array(1,2,3,4)
console.log(myArray);
console.log(myArray[0]);
///Array Methods

myArray.push(20);
myArray.push(7);
myArray.push(10);
myArray.push(60);
myArray.pop();
// myArray.unshift(9);//start of the array
// myArray.shift(9);
// console.log(myArray.includes(9))
// console.log(myArray.indexOf(3))
const newArray=myArray.join()
console.log(myArray);
console.log( newArray);
//slice
console.log("A",myArray);
const myn1=myArray.slice(1,3);
console.log(myn1);
console.log("B",myn1)
const myn2=myArray.splice(1,3);
console.log(myn2);
console.log("B",myn2)