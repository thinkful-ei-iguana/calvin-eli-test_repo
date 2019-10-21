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
