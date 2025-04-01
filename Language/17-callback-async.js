setTimeout(() => console.log('A'), 500);
setTimeout(() => console.log('B'), 0);
setTimeout(() => console.log('C'), 1000);
setTimeout(() => console.log('D'), 500);

// Avec setTimeout on peut prédire l'ordre
// mais dans le reste des cas de callback async
// on ne peut pas savoir
// fetch('https://url1').then((res) => {
//   console.log(res);
// });
// fetch('https://url2').then((res) => {
//   console.log(res);
// });

console.log('E')

// B E A D C
// B A D C E
// E B A D C
// A B C D E

// pile d'appel de fonction
// ^
// |
// |
// |
// |                        [log]              [log]  [log]             [log]
// |[sT][sT][sT][sT][log]⟳ [taskB]⟳          [taskA][taskD]⟳          [taskC]
// +------------------------7ms----------------------------------------------> temps
//                  E       B                  A      D                  C

// File d'attente (0ms) : taskB
// File d'attente (7ms) :
// File d'attente (499ms) : taskA - taskD
// File d'attente (500ms) : taskD
// File d'attente (501ms) :
// File d'attente (999ms) : taskC
// File d'attente (1000ms) :

// Côté C++
// do {
//   executeCurrentCallStack()
// }
// while(thereIsCallbackToCall);

// JSConf Asia 2018 : In The Loop
// Jake Archibald

