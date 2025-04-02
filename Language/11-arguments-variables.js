function calculerMoyenne() {
  // arguments est une pseudo-variable
  // elle est créé automatiquement au moment de l'appel
  // ATTENTION ce n'est pas un mot clé réservé, elle pourrait etre
  // écrasée pour une variable
  // ATTENTION arguments n'est pas un tableau, meme si on peut itérer avec une boucle
  // cependant on peut le convertir en tableau : Array.from(arguments)
  let result = 0;

  for (const argument of arguments) {
    result += argument;
  }

  result /= arguments.length;

  return result;
}

// Alternative moderne REST param (ES6)
// ... au moment de déclarer une variable
// provoque une conversion de syntaxe
// d'une liste de valeur (ici 10, 20 , 30)
// vers un tableau (ici [10, 20, 30])
function calculerMoyenne(first, second, ...nbs) {
  let result = first + second;

  for (const nb of nbs) {
    result += nb;
  }

  result /= nbs.length + 2;

  return result;
}

console.log(calculerMoyenne(10, 20, 30)); // 20
