const letterABorC = String.fromCharCode(Math.floor(Math.random() * 3) + 65);

function paramMustBeAorB(letter) {
  if (letter !== 'A' && letter !== 'B') {
    throw new Error('letter must be A or B');
  }

  console.log('Letter is A or B');
}

try {
  paramMustBeAorB(letterABorC);
  console.log('La suite...');
}
catch (e) {
  console.log(e.message);
  // TODO rattraper l'erreur en regénérant un nombre...
}

console.log('La suite du catch...');
