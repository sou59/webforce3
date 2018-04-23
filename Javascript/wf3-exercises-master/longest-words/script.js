const words = ['foo', 'longest', 'bar', 'test', 'estlong'];
let longestWord = [];

for (const word of words) {
    if (longestWord.length <= word.length) {
        longestWord = word;
    }
}
console.log('test');
// Seulement le mot le plus long
console.log('Le mot le plus long est : ', longestWord);
console.log(words.reduce( function( a, b ) { return a.length > b.length ? a : b; } ));
console.log(words.sort( function( a, b ) { return b.length - a.length; } )[0]);

// Tous les mots les plus longs
console.log(words.filter(word => word.length === longestWord.length));

console.warn(words.filter(v => v.length === Math.max(...words.map(v => v.length))));
