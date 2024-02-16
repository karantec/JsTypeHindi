// 
//Stack(Primitive) , Heap(Non-Primitive)
let myYoutubename="karanranadot.com"
let anothername=myYoutubename
anothername="chaiorcode";
console.log(anothername);
console.log(myYoutubename);
//goes into heap
let userOne={
    email:"karanrana3095@gmail.com",
    upi:"user1@gmail.com"
}
let userTwo=userOne
userTwo.email="karanrana3095@gmail.com"
console.log(userOne.email);
console.log(userTwo.email);