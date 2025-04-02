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

// Dans Node.js les APIs ne sont pas globaux
// contrairement au navigateur
const readline = require('readline');

// Configure readline pour lire sur le clavier
// et afficher des messages dans le terminal

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
