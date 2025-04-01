'use strict';

// Variable globale à utiliser si aucune autre
// solution
globalThis.globalVar = 'globalVar';

// Historiquement ça se serait écrit comme ça
// globarVar = 'globarVar';
// déclarée sans mot clé, la variable aurait été globale
// cette mauvaise pratique est désactivée depuis
// ES5 si on active le "strict mode"
// Dans certains cas, on est en mode strict sans avoir
// à le spécifier :
// - dans les accolades créé à partir du mot clé class
// class User { /* strict mode */ }
// - dans les modules ECMAScript

// La portée d'une variable en début de fichier
// dépend de la plateforme (Browser, Node.js...)
// et du système de module
const fileVar = 'fileVar';

function externe() {
  const closureVar = 'closureVar';

  function interne() {
    const localVar = 'localVar';

    // une variable déclarée dans une fonction n'est disponible que dans cette fonction
    // (entre les accolades)
    // par contre une variable déclarée dans la portée du dessus
    // elle est disponible (je n'ai besoin de passer la variable en param comme
    // ce serait le cas dans la plupart des langages)
    if (true) {
      const blockVar = 'blockVar';

      console.log(blockVar); // 'blockVar'
      console.log(localVar); // 'localVar'
      console.log(closureVar); // 'closureVar'
      console.log(fileVar); // 'fileVar'
      console.log(globalVar); // 'globalVar'
    }
  }

  interne();
}

externe();
