function getRandom() {
  return Math.random();
}

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

function getRandomInt(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
}

function getRandomIntInclusive(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
}

// Exercice 1
// Créer un namespace object Random avec la syntaxe
// object literal et y regrouper les 4 fonctions
// précédentes, remplacer l'appel de getRandomInt par Random.getRandomInt


// Dans Node.js les APIs ne sont pas globaux
// contrairement au navigateur
const readline = require('readline');

// Configure readline pour lire sur le clavier
// et afficher des messages dans le terminal

// Exercice 2
// Créer une class Jeu avec un constructeur sans paramètre pour l'instant
// Dans le constructeur créer 3 propriétés : entierAlea, essais et rl
// (avec les mêmes valeur que précédemment)
// Puis faire de la fonction jouer une méthode de Jeu
// de sorte à ce qu'on puisse écrire :
// const game = new Jeu();
// game.jouer();
// Dans jouer il faudra aller chez les propriétés : entierAlea, essais et rl
// (ex : this.rl)

const entierAlea = getRandomInt(0, 100);
const essais = [];
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function jouer() {
  if (essais.length) {
    console.log('Vous avez déjà joué : ' + essais.join(', '));
  }

  rl.question('Quel est le nombre entier ? ', (answer) => {
    // answer est de type string
    console.log('Vous avez saisi : ', answer);
    const entierSaisi = Number.parseInt(answer, 10);

    if (Number.isNaN(entierSaisi)) {
      console.log('Vous devez saisir en entier');
      return jouer();
    }

    essais.push(entierSaisi);

    if (entierSaisi < entierAlea) {
      console.log('Trop petit');
      jouer();
    } else if (entierSaisi > entierAlea) {
      console.log('Trop grand');
      jouer();
    } else {
      console.log('Gagné');
      rl.close();
    }
  });
}
jouer();

// pile d'appel de fonction
// ^
// |
// |
// |                                      [question]                           [question]
// |[question]                       [log][jouer   ]                      [log][jouer   ]
// |[jouer   ]⟳                     [taskAnswer]   ⟳                    [taskAnswer]   ⟳
// +---------------------------------50ENTREE-----------------------------25ENTREE-------> temps
//

// Exercice 3
// Faire évoluer Jeu
// de sorte à ce qu'on puisse passer un objet au constructeur
// constructor(options) {
//
// }
// En terme d'appel, les appels suivant doivent être possible
// const game = new Jeu();
// const game = new Jeu({});
// const game = new Jeu({ min: 50 });
// const game = new Jeu({ max: 10 });
// const game = new Jeu({ min: 10, max: 20 });
// Par défaut min vaut 0 et max vaut 100
// et utiliser options.min et options.max pour générer entierAlea
