// challenge 1
// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

// const BMIMark = massMark / heightMark ** 2;
// const BMIJohn = massJohn / heightJohn ** 2;
// const markHigherBMI = BMIMark > BMIJohn;
// console.log(BMIMark, BMIJohn, markHigherBMI);

// literals
const firstName = "Jaweria";
const job = "teacher";
const age = 21;
const JaweriaNew = `Hi i'm ${firstName},a ${job}`;
console.log(JaweriaNew);
// string with multiple lines
console.log(
  "string with \n\
multiples \n\
 line "
);
console.log(`string
with differnt
lines`);
// if
const ages = 19;
const isOldEnough = age >= 18;
if (isOldEnough) {
  console.log("Jaweria can start driving License 🚗 Wohooo!");
}
// if else
const agess = 15;
if (agess >= 18) {
  console.log("Jaweria can start driving License 🚗 Wohooo!");
} else {
  const yearsleft = 18 - agess;
  console.log(`Jaweria is too young. Wait another ${yearsleft} years :)`);
}
// challenge 2

const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / heightJohn ** 2;

if (BMIMark > BMIJohn) {
  console.log(`Marks BMI (${BMIMark}) is higher than Johns  (${BMIJohn})!`);
} else {
  console.log(`Johns BMI  (${BMIJohn}) is higher than Marks (${BMIMark}) !`);
}
console.log(String(23));
const inputYear = "1991";
console.log(Number(inputYear));
// challenge 3
// const scoreDolphin = (96 + 108 + 89) / 3;
// const scoreKoalas = (88 + 91 + 110) / 3;
// console.log(scoreDolphin, scoreKoalas);

// if (scoreDolphin > scoreKoalas) {
//   console.log("wohooo🏆 Team Dolphin Wins");
// } else {
//   console.log("Alas😒 Team Koalas lost the Game");
// }
const scoreDolphin = (97 + 112 + 101) / 3;
const scoreKoalas = (109 + 106 + 95) / 3;
console.log(scoreDolphin, scoreKoalas);

if (scoreDolphin > scoreKoalas && scoreDolphin >= 100) {
  console.log("wohooo🏆 Team Dolphin Wins");
} else if (scoreKoalas > scoreDolphin && scoreKoalas >= 100) {
  console.log("wohooo🏆 Team Koalas Win");
} else if (scoreDolphin == scoreKoalas) {
  console.log("Both win the Trophy🏆");
}
// functions

function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);
  const juice = `juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}
const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
const appleOrangeJuice = fruitProcessor(2, 2);
console.log(appleOrangeJuice);
// function Declaration
function calcAge(birthYear) {
  return 2023 - birthYear;
}
const age1 = calcAge(2001);
console.log(age1);
// function Expression
const calcAge2 = function (birthYear) {
  return 2023 - birthYear;
};
const age2 = calcAge2(2001);
console.log(age2);
// arrow Function
let sum = (a, b) => a + b;
console.log(sum(1, 2));
// function coding challenge
const calcAverage = (a, b, c) => (a + b + c) / 3;
console.log(calcAverage(3, 4, 5));
//test 1
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalass = calcAverage(65, 54, 49);
console.log(scoreDolphins, scoreKoalass);
const checkWinner = function (avgDolphins, avgKoalass) {
  if (avgDolphins >= 2 * avgKoalass) {
    console.log(`Dolphins Win the Trophy🏆 (${avgDolphins} vs. ${avgKoalass})`);
  } else if (avgKoalass >= 2 * avgDolphins) {
    console.log(`Koalass Win the Trophy🏆 (${avgKoalass} vs. ${avgDolphins})`);
  } else {
    console.log(`No team Wins.....`);
  }
};
checkWinner(scoreDolphins, scoreKoalass);

// test 2
scoreDolphins = calcAverage(85, 54, 41);
scoreKoalass = calcAverage(23, 34, 27);
console.log(scoreDolphins, scoreKoalass);

checkWinner(scoreDolphins, scoreKoalass);
// function practice
function totalMarks(Eng, Urdu, Maths) {
  var a = Eng + Urdu + Maths;
  return a;
}
var b = totalMarks(50, 80, 75);
console.log("obtained Marks " + b);

// coding challenge 3
const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};
const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(bills, tips, totals);
// arrays
let marks = [21, 33, 44, 66];
console.log(marks);
console.log(marks.length);
// pop
console.log(marks.pop());
// push
marks.push(99);
console.log(marks);
// shift
marks.shift();
console.log(marks);
// unshift
marks.unshift(88);
console.log(marks);
console.log(marks.length);

// Objects
const jaweria = {
  firstName: "Jaweria",
  lastName: "Abdul-Khaliq",
  age: 2023 - 2001,
  job: "Developer",
  friends: ["Laveeza", " Uswah", "Azwa", "Amna"],
};
console.log(jaweria);
// delete
delete jaweria.age;
// dot Method
console.log(jaweria.firstName);
jaweria.location = "Lahore";
// bracket notation
console.log(jaweria["lastName"]);
jaweria["twitter"] = "@jaweriaak";
console.log(jaweria);
// challenge
// jaweria has 4 friends, and her best friend is laveeza.
console.log(
  `${jaweria.firstName} has ${jaweria.friends.length} friends,and her best friend is ${jaweria.friends[0]}`
);
// this method
const laveeza = {
  firstName: "Jaweria",
  lastName: " Abdul-Khaliq ",
  age: 2023 - 2001,
  job: "Developer",
  friends: ["Laveeza", " Uswah", "Azwa", "Amna"],
  fullName: function () {
    return this.firstName + "" + this.lastName;
  },
};
document.write(laveeza.fullName());
// OBJECT CODDING CHALLENGE
const markss = {
  fullName: "Markss Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};
const johns = {
  fullName: "Johns Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};
markss.calcBMI();
johns.calcBMI();
console.log(markss.bmi, johns.bmi);

if (markss.bmi > johns.bmi) {
  console.log(
    `${markss.fullName}'s BMI (${markss.bmi}) is higher than ${johns.fullName}'s BMI (${johns.bmi}) `
  );
} else if (johns.bmi > markss.bmi) {
  console.log(
    `${johns.fullName}'s BMI (${johns.bmi}) is higher than ${markss.fullName}'s BMI (${markss.bmi}) `
  );
}
// for loop
for (var rep = 2; rep <= 10; rep++) {
  console.log(`Today I baked ${rep} cakes 🎂`);
}
// looping Backwards
const lizi = ["Laveeza", "Sabir", 2023 - 2001, ["Jeri", "Uswi", "Azwi"]];
for (let l = lizi.length - 1; l >= 0; l--) {
  console.log(l, lizi[l]);
}
// loop inside loop
for (let exercise = 1; exercise <= 3; exercise++) {
  console.log(`Cooking Class${exercise}`);
  for (let rep = 1; rep < 6; rep++) {
    console.log(` Class ${exercise}: Taday we cooked ${rep} kg chicken 🍗`);
  }
}

// asynchronus
console.log("Hello one");
setTimeout(function () {
  console.log("Hello Two in 2 seconds");
}, 2000);
console.log("Hello Three");

// promise
let promise = new Promise(function (resolve, reject) {
  alert("Hi");
  resolve(56);
});
console.log(promise);

let p1 = new Promise((resolve, reject) => {
  console.log("Promise is pending");
  setTimeout(() => {
    console.log("Im a promise and im fulfilled");
    resolve(true);
  }, 3000);
});

let p2 = new Promise((resolve, reject) => {
  console.log("Promise is pending");
  setTimeout(() => {
    console.log("Im a promise and im rejected");
    reject(new Error("Im a error"));
  }, 3000);
});
p1.then((value) => {
  console.log(value);
});
p2.catch((error) => {
  console.log("some error occured in p2");
});
// promise practice 2

let p3 = new Promise((resolve, reject) => {
  let z = 1 + 1;
  if (z == 2) {
    resolve("Success");
  } else {
    reject("Failed");
  }
});
p3.then((message) => {
  console.log("This is in the then " + message);
}).catch((message) => {
  console.log("This is in the catch " + message);
});
