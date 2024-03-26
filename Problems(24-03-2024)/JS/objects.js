//1.
let userInput = prompt(
  'Please enter an object (e.g., { "name": "John", "age": 30 }):'
);
let userObject = JSON.parse(userInput);
const l = userObject.name.length;
if (
  userObject.name[l - 1] === "a" ||
  userObject.name[l - 1] === "e" ||
  userObject.name[l - 1] === "i" ||
  userObject.name[l - 1] === "o" ||
  userObject.name[l - 1] === "u"
) {
  userObject.age += 2;
} else {
  userObject.age += 1;
}
console.log(userObject);
//2.
let userInput1 = prompt(
  `Please enter an object (e.g., { "name": "John", "age": 30,"subjects":{"Maths": 80, "physics": 70, "chemistry": 80 }}):`
);
let userObject1 = JSON.parse(userInput1);
let total =
  userObject1.subjects.Maths +
  userObject1.subjects.physics +
  userObject1.subjects.chemistry;
console.log(`total marks are ${total}`);
let output = {};
output["total"] = total;
if (total >= 300 / 2) {
  output["result"] = "pass";
} else {
  output["result"] = "fail";
}
console.log(output);
//3.
let userObject2 = {
  name: "John",
  age: 30,
  subjects: {
    Maths: 80,
    physics: 70,
    chemistry: 80,
  },
};
let userString = JSON.stringify(userObject2);

console.log(userString);
//4.
let userObject3 = {
  name: "John",
  age: "30",
};
if (typeof userObject3.age === "string") {
  userObject3.age = Number(userObject3.age);
  console.log(userObject3.age);
  console.log(typeof userObject3.age);
} else {
  userObject3.age = String(userObject3.age);
  console.log(userObject3.age);
  console.log(typeof userObject3.age);
}
