// Function declaration
function hello(name) {
  return 'Hello ' + name;
}

// Anonymous function expression
var hello = function (name) {
  return 'Hello ' + name;
};

document.addEventListener('click', function (name) {
  return 'Hello ' + name;
});


// Named function expression
var hello = function hello(name) {
  return 'Hello ' + name;
};

document.addEventListener('click', function hello(name) {
  return 'Hello ' + name;
});

// Arrow function (ES6)
var hello = (name) => 'Hello ' + name;

document.addEventListener('click', (name) => {
  console.log('Hello ' + name);
});
