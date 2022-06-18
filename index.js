function add(a = 0, b = 0) {
  return a + b;
}
function isEven(number) {
  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }
}
function greet(name = "Siri") {
  return `Hello ${String(name)}`;
}
function isAnAdult(number) {
  if (number < 18) {
    return false;
  } else {
    return true;
  }
}
function yearsToAdulthood(number) {
  if (number >= 18) {
    return 0;
  } else {
    return 18 - number;
  }
}
function admit(person) {
  if (isAnAdult(person.age)) {
    return greet(person.name);
  } else {
    return `Come back in ${yearsToAdulthood(person.age)}`;
  }
}
console.log(admit({ age: 0, name: "taulant" }));
