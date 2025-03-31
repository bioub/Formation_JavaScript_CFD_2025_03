const letterABorC = String.fromCharCode(Math.floor(Math.random() * 3) + 65);

if (letterABorC === 'A') {
  console.log('La lettre est A (if seul)');
}

if (letterABorC === 'A') {
  console.log('La lettre est A (if/else)');
} else {
  console.log("La lettre n'est pas A (if/else)");
}

if (letterABorC === 'A') {
  console.log('La lettre est A (if/else/if/else)');
} else {
  if (letterABorC === 'B') {
    console.log('La lettre est B (if/else/if/else)');
  } else {
    console.log('La lettre est C (if/else/if/else)');
  }
}

// Avec if / else ou les boucles
// s'il n'y a qu'une seul instruction, pas besoin du bloc { }
// PAS RECOMMANDE
if (letterABorC === 'A') console.log('La lettre est A (if/else)');
else console.log("La lettre n'est pas A (if/else)");

// LE SEUL CAS ou c'est recommandé :
if (letterABorC === 'A') {
  console.log('La lettre est A (if/else/if/else)');
} else if (letterABorC === 'B') {
  console.log('La lettre est B (if/else/if/else)');
} else {
  console.log('La lettre est C (if/else/if/else)');
}

// C'est exemple pouvait aussi s'écrire avec switch
switch (letterABorC) {
  case 'A':
    console.log('La lettre est A (switch)');
    break;
  case 'B':
    console.log('La lettre est B (switch)');
    break;
  default:
    console.log('La lettre est C (switch)');
}
