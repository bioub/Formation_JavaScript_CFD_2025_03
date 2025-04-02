// Un objet est une structure de donnée
// qui regroupe des valeurs et/ou des fonctions
// En JavaScript on présente ça comme un dictionnaire
// clé/valeur
// Exemple à la clé x d'un objet coords je trouve la valeur 10
// à la clé username d'un objet user je trouve la valeur 'romain'

// Les clés/valeurs associées à des valeurs sont appelées aussi "propriété" (property)
// Les clés/valeurs associées à des fonctions sont appelées aussi "méthode" (method)

// L'avantage de démarrer par l'objet en JS c'est qu'on manipule presque toujours
// des objets sans avoir à les créer

// Exemple : console est un objet, on appelle sa méthode log :
console.log('Hello');

// Exemple : PI est une propriété de l'objet Math
console.log(Math.PI)

// Les objets prédéfinis comme Math peuvent l'être par le langage
// ou par la plateforme (Browser/Node.js/Deno...)

// Exemple d'objet du Langage
console.log(Math.PI);
console.log(JSON.stringify({x: 10}));
console.log(Number.parseInt('123', 10));
// Tous les objets du langages sont documentés ici :
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects


// Exemples d'objet Node
console.log(process.version); // version de Node
console.log(typeof console); // object (function,string,array sont aussi des objets)

// Exemples d'objet du navigateur
console.log(typeof document); // object (dans le navigateur, undefined sinon)
console.log(typeof window); // object (dans le navigateur, undefined sinon)
console.log(typeof navigator); // object (dans le navigateur, undefined sinon)

// Pour accéder au contenu d'un objet
// il existe 2 syntaxes . et []
console.log(Math.PI);
console['log'](Math['PI']);

// les crochets sont à utiliser quand la clé nécessite une lecture de variable
// ou un calcul
const key = 'PI';
console.log(Math[key]);

// En JavaScript les objets sont extensibles
// on peut les modifier en ajouter/modifiant ou supprimant des clés/valeurs
// c'est un système dynamique
// contrairement à la plupart des langages ou le système est statique

console.log(Math.sum); // undefined

// Ajouter
Math.sum = (a, b) => a + b;
console.log(Math.sum(1, 2)); // 3

// Modifier
Math.sum = (a, b) => Number(a) + Number(b);
console.log(Math.sum('1', '2')); // 3

// Supprimer
delete Math.sum;

// MAUVAISE PRATIQUE de modifier les objets qu'on pas soit même créé :
// les objets du langage, de la plateforme, d'une bibliotheque...
// SAUF dans les tests unitaires par exemple où le temps du test
// on pourrait donner un autre comportement à une fonction
// ex: une fonction getRandomInt qui dépend de Math.random
// est difficile à tester car son résultat est aléatoire

// Pour créer des objets il existe 2 systèmes
// Object Literal et constructor

// Pour créer un objet avec Object literal on utilise les accolades
// comme une valeur, ex :
const coords = {
  x: 1,
  y: 2,
};

// rl.createInterface({
//   input: process.stdin,
//   output: process.stdout
// })

// Object literal à utiliser :
// - lorsque l'objet n'est créé qu'un fois
// (comme celui de createInterface)
// - lorsqu'il est créé plusieurs fois, il ne faut pas
// y mettre des méthodes (fonctions)
// (comme coords)

// On peut utiliser Object Literal pour créer
// des namespaces objects: une façon de regrouper
// plusieurs propriétés et/ou méthodes dans un même variable, ex :
// Math, process, document, jQuery
// MAUVAISE PRATIQUE depuis les modules (ECMAScript...)

// Exemple au lieu de modifier Math, créons MyMath (global ici)
globalThis.MyMath = {
  sum(a, b) {
    return a + b;
  },
  sub(a, b) {
    return a - b;
  }
};

// Les objets en mémoire sont stockés en 2 parties :
// pile (référence) / tas (l'objet lui même)

const x1 = 1;
let x2 = x1; // passage par valeur
x2 = 2;
console.log(x1); // 1

const coords1 = {
  x: 1,
  y: 2,
};
const coords2 = coords1; // passage par référence
coords2.x = 2;
console.log(coords1.x); // 2


function sum(a, b) {
  return a + b;
}

sum(1, 2) // a = 1, b = 2

function modify(coords) {
  coords.x = 10;
}

modify(coords1); // coords = coords1
console.log(coords1.x); // 10
console.log(coords2.x); // 10


// pour créer un objet avec constructor
// Pour les cas :
// - l'objet doit etre créé plusieurs fois et contient des fonctions
// - l'objet doit pouvoir être identifié par un type

// function User(name) {
//   // dans le constructeur et les méthodes d'un objet
//   // la pseudo variable this est créée
//   // ça correspond à l'objet dans lequel on est
//   // la variable romain n'est pas connu ici
//   this.name = name;
// }

// User.prototype.hello = function() {
//   return `Hello ${this.name}`;
// };

class User {
  constructor(name) {
    // dans le constructeur et les méthodes d'un objet
    // la pseudo variable this est créée
    // ça correspond à l'objet dans lequel on est
    // la variable romain n'est pas connu ici
    this.name = name;
  }
  hello() {
    return `Hello ${this.name}`;
  }
}

console.log(typeof User); // function
console.log(typeof User.prototype.hello); // function


const romain = new User('Romain');
console.log(typeof romain); // object
console.log(romain); // User {}
console.log(romain instanceof User); // true
console.log(romain.name); // Romain
console.log(romain.hello()); // Hello Romain

const toto = new User('Toto');
console.log(toto.name); // Toto
console.log(toto.hello()); // Hello Toto

// ATTENTION si la fonction hello est définie dans le constructeur
// de User, il y aura autant de fonction hello (qui sont des objets)
// que d'objet User (pas génial pour la performance)
// console.log(romain.hello === toto.hello); // false (les fonctions sont dupliquées)
console.log(romain.hello === toto.hello); // true (1 seule fonction hello)
