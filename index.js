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

function isDivibleBy(a, b) {
  let remainder = a % b;
  if (remainder === 0) {
    console.log(a + " is divisible by " + b);
  } else if (remainder === 1) {
    console.log(a + " is not divisible by " + b);
  }
}

isDivibleBy(5, 2);
isDivibleBy(4, 2);

function isEven(a) {
  let number = 0;
  if (a % 2 === 0) {
    console.log(a + " is even");
  } else if (a % 2 === 1) {
    console.log(a + " is not even");
  } else {
    console.log(a + " is not number");
  }
}

isEven(5);
isEven(2);
isEven("asd");
isEven(0);

// ex 1
isPositive(-5);
isPositive(5);

function isPositive(a) {
  let number = a;
  if (a > 0) {
    console.log(a + " is positive");
  } else if (a < 0) {
    console.log(a + " is not positive");
  } else {
    console.log(a + " is not number");
  }
}

// ex 2
usdToKgs(400);

function usdToKgs(x) {
  let dollar = x;
  let som = x * 80;
  console.log(x + " is " + som);
}

// ex 3 
circleArea(5); // circle with diameter of 5 cm is 51cm2

function circleArea(d) {
  let p = 3.14;
  let r = d / 2;
  let area = r ** 2 * p;
  console.log("circle with diameter of " + d + area) 
  }


