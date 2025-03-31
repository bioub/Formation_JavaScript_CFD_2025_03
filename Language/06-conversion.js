// Conversion Explicite
console.log(Number("123")); // 123
console.log(String(123)); // '123'
console.log(Boolean(123)); // true

// Conversion Implicite
console.log('1' + 1); // 11
console.log('2' * 3); // 6
console.log(!!'ABC'); // true (la version courte de Boolean('ABC'))

// Le problème de la conversion vers Boolean
// est qu'elle n'est pas réciproque

const result = false;
console.log(result); // false

const toString = String(result);
console.log(toString); // 'false'
console.log(Boolean(toString)); // true

// Différence Number et Number.parseInt
console.log(Number("123 soleil")); // NaN
console.log(Number.parseInt("123 soleil", 10)); // 123
