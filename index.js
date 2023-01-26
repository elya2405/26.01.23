function sayHello() {
  console.log("Hello");
}
function sayBye() {
  console.log("Bye");
}

sayHello();
sayHello();

function sayHello(name) {
  console.log("Hello " + name);
}

sayHello("Bakyt");
sayHello("Dactan");

function myCity(city) {
  console.log("I was born in " + city);
}

myCity("Bishkek");
myCity("Karakol");

function myFriend(name) {
  console.log("My best friend is " + name);
}

myFriend("Ajara");
myFriend("Nestan");
myFriend("Tina");

function printSum(a, b) {
  let sum = a + b;
  console.log("The sum of " + a + " and " + b + " is " + sum);
}

printSum(5, 10);
printSum(-5, 0);
printSum(100, 125);

function printDiff(x, y) {
  let diff = x - y;
  console.log(x + " - " + y + " = " + diff);
}

printDiff(5, 10);

function printMultiply(a, b) {
  let multiply = a * b;
  console.log(a + " * " + b + " = " + multiply);
}

printMultiply(6, 3);

function printDivide(x, y) {
  let divide = x / y;
  console.log(x + " / " + y + " = " + divide);
}

printDivide(20, 5);
