// 2 valeurs particulières qui sont de type number

// NaN (Not A Number)
// le résultat d'une opération qui retourne
// un nombre mais que JavaScript ne sait pas faire
// Exemples :
// - convertir 'ABC' en nombre
console.log(Number('ABC'));
// - calculer la racine carré de -1
console.log(Math.sqrt(-1));
// - addition un nombre et undefined
console.log(1 + undefined);

// On ne peut pas utiliser un opérateur pour comparer NaN
// y compris :
console.log(NaN == NaN); // false

// Pour tester NaN
console.log(Number.isNaN(NaN)); // true
// ou par exemple sur des entiers
console.log(Number.isInteger(NaN)); // false (aussi pour des nombres à virgules)

// Autre valeur spéciale : Infinity
// Souvent dans les languages de programme, une division par zéro
// provoque une erreur, mais pas en JS
console.log(100 / 0); // Infinity
console.log(-100 / 0); // -Infinity

// Opérateurs sur les nombres
// Arithmétiques
console.log(1 + 1);
console.log(10 - 1);
console.log(2 * 3);
console.log(10 / 2);
console.log(10 % 2); // modulo (reste de la division entière)
console.log(2 ** 3); // 2 ^ 3 (2 puissance 3 === 2 * 2 * 2 ou 8)

// On peut les combiner avec une affectation
let number = 5;
number += 1; // équivalent à number = number + 1;
number /= 2; // équivalent à number = number / 2;

let i = 0;
i++; // i = i + 1

// Pour ++ et --
// On a la notation préfixe ou postfix
i = 0;
let j = ++i; // le + 1 se fait avant l'affectation
console.log('i', i); // 1
console.log('j', j); // 1

i = 0
let k = i++; // le + 1 se fait après l'affectation
console.log('i', i); // 1
console.log('k', k); // 0

i = 0
console.log(i++); // 0
console.log(i); // 1
