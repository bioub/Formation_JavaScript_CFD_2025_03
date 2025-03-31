// Pour exécuter ce programme avec Node.js
// on tape dans le terminal :
// node [chemin-vers-le-fichier-js]
// ex :
// node 01-hello.js
// Si je dois l'exécuter dans le navigateur
// il faut en plus un fichier HTML

// L'objectif de ce programme est d'afficher
// Hello suivi d'un prénom pour chaque élément
// d'un tableau en utilisant une fonction

// On déclare une variable avec const (ou let)
// cette variable est initialisée avec un tableau de prénoms
// Dans ma convention le fait de mettre le nom de variable
// au pluriel indique que c'est un tableau
// si ce n'est pas assez clair, on pourrait nommer la variable
// namesList ou namesArray ou namesTab ou aNames (array Names)
const names = ['Toto', 'Titi', 'Tata'];

// Une expression en programmation est quelque chose qui a une valeur
// exemples :
// 'Romain'
// 1 + 1
// hello('Romain')

// Ici on déclare une fonction hello avec un paramètre
// d'entrée name (on ne peut pas indiquer son type)
// cette fonction retourne Hello suivi du paramètre
// name est un parametre donc une variable locale à la fonction
// elle n'existe pas à l'extérieur (que dans la fonction)
// si j'appelle ma fonction de cette façon
// hello('Romain')
// 'Romain' est affecté à name (c'est comme si j'avais écris name = 'Romain')
// L'expression hello('Romain') vaut 'Hello Romain'
// L'expression hello(n) dépend de la valeur de n
function hello(name) {
  return 'Hello ' + name;
}

// Ici on boucle sur tous les éléments du tableau names
// à chaque passage de la boucle n vaut l'élément
// 'Toto' la première, puis 'Titi', puis 'Tata'
// n est le diminutif de name
// Dans ma convention ça indique que la variable n'existe que dans la boucle
// inspiré de i qui est le diminutif de index
// C'est une convention peu répandue, d'autre l'aura nommé :
// name, nameEl, element
// console.log ne fait pas partie de la norme ECMAScript
// ça vient du navigateur
// dans le navigateur ça affiche le message dans un outil de développement
// appelé console (c'est dans cette console que s'affiche également les erreurs
// et qu'il faudra donc gardée ouverte pendant le dev)
// Node qui est apparu en 2009 a réutilisé console.log
// par contre ce n'est pas un outil de dev, c'est ce que le programme
// affiche dans le terminal
for (const n of names) {
  console.log(hello(n));
}

// Variante pour cette boucle
// for (let i = 0; i < names.length; i++) {
//   const n = names[i];
//   console.log(hello(n));
// }
