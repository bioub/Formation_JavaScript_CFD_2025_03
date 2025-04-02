import { createInterface } from 'node:readline';
// importer getRandomInt
// et exporter Jeu (par defaut)

class Jeu {
  constructor(options = {}) {
    const min = options.min ?? 0;
    const max = options.max ?? 100;

    this.entierAlea = getRandomInt(min, max);
    this.essais = [];
    this.rl = createInterface({
      input: process.stdin,
      output: process.stdout
    });
  }
  jouer() {
    if (this.essais.length) {
      console.log('Vous avez déjà joué : ' + this.essais.join(', '));
    }

    this.rl.question('Quel est le nombre entier ? ', (answer) => {
      // answer est de type string
      console.log('Vous avez saisi : ', answer);
      const entierSaisi = Number.parseInt(answer, 10);

      if (Number.isNaN(entierSaisi)) {
        console.log('Vous devez saisir en entier');
        return this.jouer();
      }

      this.essais.push(entierSaisi);

      if (entierSaisi < this.entierAlea) {
        console.log('Trop petit');
        this.jouer();
      } else if (entierSaisi > this.entierAlea) {
        console.log('Trop grand');
        this.jouer();
      } else {
        console.log('Gagné');
        this.rl.close();
      }
    });
  }
}
