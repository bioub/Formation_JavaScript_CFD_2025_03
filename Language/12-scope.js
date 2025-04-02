const fileVar = 'fileVar';

function interne() {
  const fileVar = 'other'
  const localVar = 'localVar';

  // une variable déclarée dans une fonction n'est disponible que dans cette fonction
  // (entre les accolades)
  // par contre une variable déclarée dans la portée du dessus
  // elle est disponible (je n'ai besoin de passer la variable en param comme
  // ce serait le cas dans la plupart des langages)
  console.log(localVar); // 'localVar'
  console.log(fileVar); // 'fileVar'
}

interne();
// console.log(localVar); // ReferenceError: localVar is not defined
