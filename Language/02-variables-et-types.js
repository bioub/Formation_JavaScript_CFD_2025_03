// Une variable permet de stocker une valeur
// en vue de la réutiliser plus tard
// elle peut aussi aider à la lecture du code
// puisqu'elle introduit un nom

// En JavaScript
// Historiquement (jusqu'à ES5)
// On déclare une variable avec var
// Exemple
// var prenom = 'Romain'
// Depuis ES6 on privilégie let ou const
// La différence entre var et let ou const
// se situe au niveau de la portée (où la variable est accessible)
// let et const on une portée de bloc
// si elle sont définie dans un bloc
// exemple if (condition) { le bloc }
// ou for (const n of names) { le bloc }

if (true) {
  var maVarDeclareAvecVar = 'ma variable declaré avec var';
  const maVarDeBloc = 'ma variable de bloc';
  let maVarDeBloc2 = 'ma variable de bloc';
  console.log(maVarDeclareAvecVar); // 'ma variable declaré avec var'
  console.log(maVarDeBloc); // 'ma variable de bloc'
  console.log(maVarDeBloc2); // 'ma variable de bloc'
}

console.log(maVarDeclareAvecVar); // 'ma variable declaré avec var'
// console.log(maVarDeBloc); // erreur
// console.log(maVarDeBloc2); // erreur

// Pour lire la variable il suffit d'utiliser son nom
// const name = 'Romain'
// name vaut 'Romain'
// name == 'Romain' vaut true
// Attention Name avec une majuscule n'existe pas (sensible à la casse)

// Différence entre let et const
// avec let je peux réaffecter une valeur à la variable
// avec const non
// Comme dit précédemment const est plus restrictif donc à privilégier
// const prenom = 'Romain';
// prenom = 'Toto'; // erreur TypeError: Assignment to constant variable.

let prenom = 'Romain';
prenom = 'Toto'; // ok

// ça vaut pour tous les opérateurs d'affectation
// = += -= /= *+ ++ --

// Cas particulier des objets et tableaux
const names = ['Toto', 'Titi'];

// On peut mettre à jour le tableau sans affectation :
names.push('Tata'); // ok
// names = ['Toto', 'Titi', 'Tata']; // erreur avec const, mais pas avec let
console.log(names); // ['Toto', 'Titi', 'Tata']

// Idem pour un objet
const coords = { x: 1, y: 2 };
coords.z = 3; // ok
// coords = { x: 2, y: 10 }; // erreur avec const, mais pas avec let
console.log(coords.z); // 3

// let et const sont apparus en ES6 (à partir de Edge 12)


// Exercice 1
const firstName = 'Romain';
const lastName = 'Bohdanowicz';

// créer une variable fullName qui contient le prenom suivi d'un espace
// suivi du nom et l'afficher dans le terminal :
// const fullName = firstName + ' ' + lastName;
// avec template literal (attention ce n'est pas une apostrophe, ALT GR-7 pour le backquote `)
const fullName = `${firstName} ${lastName}`;
console.log(fullName);

// Exercice 2
let first = 'Value 1';
let other = 'Value 2';

// sans toucher au code précédent, intervertir et afficher
// le contenu de first et other :
const tmp = first;
first = other;
other = tmp;
console.log(first, other);

// alternative sans tmp :
// utilise la destructuration (depuis ES6)
[first, other] = [other, first];

// Les types en JS :
let age = 20;
let title = 'Sans titre';
let isOdd = true;
const colors = ['red', 'green', 'blue'];
const user = { username: 'toto', email: 'toto@gmail.com' };

// Du type dépend les opérations possibles
// ex: une addition sur des nombres
// une concaténation sur un type string
