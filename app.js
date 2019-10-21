const myTeam = "calvin, eli";
console.log(myTeam);

function createGreeting(name, age) {
    let yearOfBirth = (2019-age);
    return `Hi, my ${name} is Calvin and I'm ${age} years old, I was born in ${yearOfBirth}`;
}
const createGreeting1 = createGreeting();
console.log(createGreeting1);
