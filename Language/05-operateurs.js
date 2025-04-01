// Comparaisons :
// On peut comparer les nombres
console.log(1 > 2); // false
console.log(1 < 2); // true
console.log(1 >= 2); // false
console.log(1 <= 2); // true

// ATTENTION ne pas écrire
console.log(1 < 2 < 3);
// si on décompose, ça revient à écrire :
console.log(true < 3);
// true converti en nombre vaut 1
console.log(1 < 3); // true

// et/ou des strings
console.log('ABC' > 'XYZ'); // false

// Pour tester l'égalité on a 2 opérateurs
// == et ===
console.log('123' == 123); // true
console.log('123' === 123); // false
console.log('123' != 123); // false
console.log('123' !== 123); // true

// Opérateurs logiques

// On ne peut pas écrire
console.log(1 < 2 < 2); // true
// Il faut utiliser la logique boolean pour scinder les tests en 2
console.log(1 < 2 && 2 < 2); // false

const prenom = 'Toto';
console.log(prenom === 'Toto' || prenom === 'Titi'); // true
console.log(!(prenom === 'Toto' || prenom === 'Titi')); // false

// Opérateur Ternaire
// if .. else en une ligne

let message = '';

if (prenom === 'Toto') {
  message = 'Le prénom est Toto';
} else {
  message = "Le prénom n'est pas toto";
}

// (condition) ? valeur si vrai : valeur si faux
let message2 = (prenom === 'Toto') ? 'Le prénom est Toto' : "Le prénom n'est pas toto";
