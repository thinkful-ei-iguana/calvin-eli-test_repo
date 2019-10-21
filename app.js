const myTeam = "calvin, eli";
console.log(myTeam);

function yearOfBirth(age) {
  return 2019 - age;
}

function createGreeting(name, age) {
  const yob = yearOfBirth(age);
  return `Hi, my ${name} is Calvin and I'm ${age} years old, I was born in ${yob}`;
}
const createGreeting1 = createGreeting();
console.log(createGreeting1);
