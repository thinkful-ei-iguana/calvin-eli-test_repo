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
  if(num === Infinity) {
    console.log('And beyond')
  }
  if(isFinite(num)&&num>=0) {
    console.log('To infinity')
  }
  if(isFinite(num)&&num<0) {
    console.log('To negative infinity')
  }
  if(num === 0) {
    console.log('Staying home')
  }
}