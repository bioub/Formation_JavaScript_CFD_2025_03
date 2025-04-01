// 1 / Générer un entier aléatoire entre 0 et 100
// et le stocker dans une variable entierAlea

// 2 / Avec Node.js, demander à l'utilisateur
// de saisir un nombre entier (avec Romain), puis
// convertir la saisie clavier en nombre
// puis afficher si le nombre est plus grand
// ou plus petit (ou trouvé) que l'entier aleatoire

// 3 / (avec Romain) pouvoir rejouer

// 4 / stocker chaque essais dans un tableau
// et afficher entre 2 tours, le contenu du tableau
// ex: Vous avez déjà joué : 20, 5, 8

// 5 / Afficher une message d'erreur si
// l'utilisateur ne saisi pas un nombre
// ne pas utiliser throw (à cause du code async)
// ex: ABC

// Dans Node.js les APIs ne sont pas globaux
// contrairement au navigateur
const readline = require('readline');

// Configure readline pour lire sur le clavier
// et afficher des messages dans le terminal

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function jouer() {
  rl.question('Quel est le nombre entier ? ', (answer) => {
    // answer est de type string
    console.log('Vous avez saisi : ', answer);

    // rejouer
    jouer()

    // pour quitter (arrete d'écouter line)
    // rl.close();
  })

}
jouer();
