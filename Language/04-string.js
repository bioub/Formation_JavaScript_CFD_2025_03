// On peut déclarer une chaine de caractères
// avec "", '' ou ``

const firstName = 'Romain';
// prettier-ignore
const lastName = "Bohdanowicz";

const email = `
Bonjour ${firstName} ${lastName},

Bienvenue sur notre site...
`;

// Une chaine de caractère déclarée avec `
// peut etre multiligne
// pas possible avec "" ou ''

// Toutes les méthodes et propriétés sur les chaines de caractères
// sont définies ici :
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String

// Quelques exemples :
// Pour obtenir la taille :
console.log(firstName.length); // 6

// Pour passer en majuscule :
console.log(firstName.toUpperCase()); // 6

// Une méthode Static s'appelle sur l'objet global String
// "la classe String"
console.log(String.fromCharCode(65, 66, 67)); // ABC

// Une méthode du prototype s'appelle sur l'objet de type string
console.log("ABC".charCodeAt(0)); // 65


// Attention à l'opérateur +
// qui fait à la fois l'addition et la concaténation en
// donnant priorité à la concaténatation :
// si à gauche ou à droite du + il y a une chaine
// de caractère => concaténation
// si 2 nombres => addition

console.log('1 + 1 = ' + 1 + 1); // 1 + 1 = 11
console.log('1 + 1 = ' + (1 + 1)); // 1 + 1 = 2

