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
  };
  const yob = yearOfBirth(age);
  return `Hi, my ${name} is Calvin and I'm ${age} years old, I was born in ${yob}`;
}
try {
  const createGreeting1 = createGreeting();
} catch (e) {
  console.log(e);
}
console.log(createGreeting1);
