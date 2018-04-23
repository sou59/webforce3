let i = 26;
let j = 0;
const a = [];
let k = 65;
let alfa = '';

/*
- Here a loop executing all the required "ACCUMULATIONS"
- trouver la fonction permettant de générer une lettre à partir d'un Number
*/
while (i -= 1) { // Quand i sera a 0 la boucle s'arrêtera car en JS 0 == false
  j += 2;
  a.push(i);
  alfa += String.fromCharCode(k += 1);
}

console.log('i => ', i); // 0
console.log('j => ', j); // 50
console.log('a =>', a); // 26,25,24,23,22,21,20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0
console.log('alfa => ', alfa); // 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
