const myTeam = "calvin, eli";
console.log(myTeam);

function yearOfBirth(age) {
  if (age < 0) {
    throw new Error("Age cannot be negative");
  }
  return 2019 - age;
}

function createGreeting(name, age) {
  if (!name || !age) throw new Error("Arguments not valid");
  if (typeof age !== "number" || typeof name !== "string") {
    throw new TypeError("invalid type value");
  }
  const yob = yearOfBirth(age);
  return `Hi, my ${name} is Calvin and I'm ${age} years old, I was born in ${yob}`;
}

try {
  const createGreeting1 = createGreeting("bob", 20);
} catch (e) {
  console.log(e);
}
console.log(createGreeting1);

function jediName(firstName, lastName) {
  let fName = lastName.substring(0, 3);
  let lName = firstName.substring(0, 2);

  return fName + lName;
}

function beyond(num) {
  if (num === Infinity) {
    console.log("And beyond");
  }
  if (isFinite(num) && num >= 0) {
    console.log("To infinity");
  }
  if (isFinite(num) && num < 0) {
    console.log("To negative infinity");
  }
  if (num === 0) {
    console.log("Staying home");
  }
}

let words = "craft block argon meter bells brown croon droop";

function decode(words) {
  let w = words.split(/\b\s/);
  let result = [];

  w.forEach(word => {
    if (word[0] != "a" && word[0] != "b" && word[0] != "c" && word[0] != "d") {
      result.push(" ");
    } else {
      switch (word[0]) {
        case "a":
          result.push(word[1]);
          break;
        case "b":
          result.push(word[2]);
          break;
        case "c":
          result.push(word[3]);
          break;
        case "d":
          result.push(word[4]);
          break;
      }
    }
  });

  return result.join("");
}

function daysPerMonth(month, leapYear) {
  let result;

  switch (month) {
    default:
      throw new Error("Must provide a valid month");
      break;
    case "January":
    case "March":
    case "May":
    case "July":
    case "August":
    case "October":
    case "December":
      result = 31;
      break;
    case "February":
      if (leapYear == true) {
        result = 29;
      } else result = 28;
      break;
    case "April":
    case "June":
    case "September":
    case "November":
      result = 30;
      break;
  }
  return month + "has" + result + "days.";
}

function rockPaperScissors(num) {
  if (num < 1 || num > 3)
    throw new RangeError("enter a number between 1 and 3.");

  const items = ["rock", "paper", "scissors"];

  const randomNo = Math.floor(Math.random() * 3);

  const playerChose = items[num];
  const computerChose = items[randomNo];

  switch (computerChose) {
    case "rock":
      if (playerChose == "scissors") {
        return console.log("you lost.");
      }
      if (playerChose == "rock") {
        return console.log("tie.");
      }
      if (playerChose == "paper") {
        return console.log("you won.");
      }
      break;
    case "paper":
      if (playerChose == "scissors") {
        return console.log("you won.");
      }
      if (playerChose == "rock") {
        return console.log("you lost.");
      }
      if (playerChose == "paper") {
        return console.log("tie.");
      }
      break;
    case "scissors":
      if (playerChose == "scissors") {
        return console.log("tie.");
      }
      if (playerChose == "rock") {
        return console.log("you win.");
      }
      if (playerChose == "paper") {
        return console.log("you lost.");
      }
      break;
  }
}

function repeat(fn, n) {
  for (let i = 0; i < n; i++) {
    fn();
  }
}

function hello() {
  console.log("Hello World");
}
function goodbye() {
  console.log("Goodbye World");
}

function filter(arr, fn) {
  let result = [];

  for (let i = 0, len = arr.length; i < len; i++)
    if (fn(arr[i]) == true) result.push(arr[i]);

  return result;
}

const myNames = ["Rich", "Joe", "Bhaumik", "Ray"];
const filteredNames = console.log(filter(myNames, name => name[0] === "R"));

function hazardWarningCreator(typeOfWarning) {
  let warningCounter = 0;
  return function(location) {
    warningCounter++;
    console.log(`DANGER! There is a ${typeOfWarning} hazard at ${location}!`);
    if (warningCounter == 1) {
      console.log(
        `The ${typeOfWarning} hazard alert has triggered ${warningCounter} time today!`
      );
    } else if (warningCounter == 0 || warningCounter >= 2) {
      console.log(
        `The ${typeOfWarning} hazard alert has triggered ${warningCounter} times today!`
      );
    }
  };
}
const rocksWarning = hazardWarningCreator("Rocks on the Road");
const animalsWarning = hazardWarningCreator("Animals on the Road");
const treesWarning = hazardWarningCreator("Trees on the Road");

// Can you figure out how to log out "time" for a value of 1 and "times" for a value of 0 or >= 2?

const turtleMovements = [[0, 0], [0, 5], [-1, -3], [-3, 1], [2, -4], [3, 2]];

turtleMovements.filter(item => (item[0] < 0 || item[1] < 0 ? false : true));

let newMoves = turtleMovements
  .filter(item => (item[0] < 0 || item[1] < 0 ? false : true))
  .map(item => item[0] + item[1]);

newMoves.forEach((el, i) => {
  console.log(`Movement #${i}: ${el} ${el > 1 || el == 0 ? "steps" : "step"}`);
});

function decode(random) {
  let result = "";
  let start = "noggin oreo the moon time tele steed his tent apollo her lives though shoo tofu budapest".split(
    /\b\s/
  );
  let decoderizer = start.reduce((result, i) => {
    if (i.length == 3) return result + " ";
    else return result + i[i.length - 1].toUpperCase();
  }, "");
  return decoderizer;
}

// Create an object called loaf using an object initializer ({}) with two properties: flour, which should be set to 300 and water which should be set to 210.
// Use console.log to print the flour and water properties.
// Add an empty method to the loaf object called hydration.
// Fill in the body of the method to return the hydration of the loaf (the water divided by the flour multiplied by 100).
// Call the hydration method and use console.log to print the result.

const loaf = {
  flour: 300,
  water: 210,
  hydration() {
    return (this.water / this.flour) * 100;
  }
};

console.log(loaf.flour, loaf.water);
console.log(loaf.hydration());

const properties = {
  foo: 5,
  bar: 3,
  fum: 210,
  quux: 70,
  spam: 35
};
for (x in properties) {
  console.log(x, properties[x]);
}

const food = {
  meals: [
    "breakfast",
    "second breakfast",
    "elevenses",
    "lunch",
    "afternoon tea",
    "dinner",
    "supper"
  ]
};

console.log(food.meals[3]);

const person1 = {
  name: "Carson",
  jobTitle: "programmer1",
  boss: "david"
};
const person2 = {
  name: "Skyler",
  jobTitle: "programmer2",
  boss: "carson"
};
const person3 = {
  name: "David",
  jobTitle: "programmer3"
};
const objectTraining = [person1, person2, person3];
for (let i = 0; i < objectTraining.length; i++) {
  let c = objectTraining[i];

  if (c.boss) console.log(`${c.jobTitle} ${c.name} reports to ${c.boss}.`);
  else console.log(`${c.jobTitle} ${c.name} doesn't report to anybody.`);
}



let words = "craft block argon meter bells brown croon droop";

function decodeWords(words) {
  let result = '';
  let dec = words.split(/\b\s/);
  const deco = {
    a:1,
    b:2,
    c:3,
    d:4,
    
}
dec.forEach(i=>{
  if (Object.keys(deco).indexOf(i[0]) != -1) { let l = Object.values(deco)[Object.keys(deco).indexOf(i[0])]; result += i[l]; } else result += " ";
  
})
return result;
}