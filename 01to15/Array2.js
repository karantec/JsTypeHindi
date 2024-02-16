const marvel_heros=["thor","spiderman"];
const dc_heroes=["superman","flash","batman"];

// const allHeros=marvel_heros.push(dc_heroes);
// console.log(allHeros);
// // console.log(marvel_heros);
// // console.log(marvel_heros[3][1]);
// marvel_heros.concat(dc_heroes);
// console.log(marvel_heros);
//Spread-glass
const all_new_heros=[...marvel_heros,...dc_heroes];
console.log(all_new_heros);
//another 
const another_array=[1,2,3,[4,5,6],7,[6,7],[4,5]]

const real_another_array=another_array.flat(Infinity);
console.log(real_another_array);
// [
//     1, 2, 3, 4, 5,
//     6, 7, 6, 7, 4,
//     5
//   ]

console.log(Array.isArray("karan"));
console.log(Array.from("Rana"));
console.log(Array.from({name:"karan"})); //interesting case

let score1=100;
let score2=200;
let score3=300;
console.log(Array.of(score1,score2,score3));