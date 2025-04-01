const names = ['Toto', 'Titi', 'Tata'];

function hello(name) {
  return 'Hello ' + name.toUpperCase();
}

// Un callback (ici la fonction fléchée)
// est une fonction qu'on déclare
// mais dont on ne fait pas l'appel
names.forEach((n) => {
  console.log(hello(n));
});

console.log('FIN');


// pile d'appel de fonction
// ^
// |
// |
// |       [hello][hello][hello]
// |[for { [=>   ][=>   ][=>   ] }]
// |[forEach                      ][log]
// +--------------------------------------> temps
//         TOTO   TITI   TATA      FIN
