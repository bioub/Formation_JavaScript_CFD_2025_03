function sum(a, b, c = 0) {
  return a + b + c;
}

console.log(sum(1, 2)); // 3 (1 + 2 + 0)
console.log(sum(1, 2, 3)); // 6 (1 + 2 + 3)

// Avec le OU Logique
// si la première partie (à gauche) est falsy (undefined, null, 0, false, ''...)
// l'ensemble vaut la partie droite
// Donc on peut s'en servir pour les valeur par défaut
// A CONDITION qu'elles soient elles memes falsy
console.log(false || false); // false
console.log(false || true); // true
console.log(0 || true); // true
console.log('' || true); // true
console.log(undefined || true); // true
console.log(undefined || 0); // 0
console.log(undefined || 10); // 10
console.log(15 || 10); // 15
console.log(0 || 10); // 10 BUG, on devrait garder 0

// Avec l'opérator ??
// Nullish Coalescing Operator
// C'est le même fonctionnemet que le OR
// sauf que la première partie doit etre null ou undefined uniquement
// pour activer la partie de droite
// Aussi adapté aux valeurs par défaut car pas limité à certaines valeurs
console.log(0 ?? 10); // 0
console.log(undefined ?? 10); // 10

const coords = { x: 1, y: 2 };

const z = coords.z ?? 10;
