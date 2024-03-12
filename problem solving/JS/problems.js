// 1. WAJSP to tell the wwather status as per user entered value

let temp = Number(prompt("enter the temperature of weather"));
if (temp >= 30) {
  console.log("hot summer");
} else if (temp > 18 && temp < 29) {
  console.log("normal temperature");
} else {
  console.log("cold temperature");
}

// 2. WAJSP to check weather the year is leap year or not

let year = Number(prompt("Enter the year "));

if (year % 4 === 0 && year % 100 !== 0) {
  console.log("year is a leap year.");
} else if (year % 400 === 0 && year % 100 == 0) {
  console.log("year is a leap year.");
} else {
  console.log("year is not leap year.");
}

// 3. WAJSP to check weather the alphabet is vowel or not

let alphabet = prompt("Enter an alphabet");
if (
  alphabet == "a" ||
  alphabet == "e" ||
  alphabet == "i" ||
  alphabet == "o" ||
  alphabet == "u" ||
  alphabet == "A" ||
  alphabet == "E" ||
  alphabet == "I" ||
  alphabet == "O" ||
  alphabet == "U"
) {
  console.log(alphabet + " it's a vowel");
} else {
  console.log(alphabet + " It's a consonent");
}

// 4. WAJSP to check weather the triangle is equalateral triangle or Isosceles triangle or scalene triangle
let s1 = Number(prompt("Enter first s of triangle"));
let s2 = Number(prompt("Enter second s of triangle"));
let s3 = Number(prompt("Enter third s of triangle"));
if (s1 + s2 <= s3 || s1 + s3 <= s2 || s2 + s3 <= s1) {
  console.log("it's not a triangle");
} else if (s1 === s2 && s1 === s3) {
  console.log("equilateral triangle");
} else if (
  (s1 === s2 && s1 !== s3) ||
  (s2 === s3 && s2 !== s1) ||
  (s1 === s3 && s1 !== s2)
) {
  console.log("Isosceles Triangle");
} else {
  console.log("scalene triangle");
}

// 5. WAJSP to check weather the given number is odd or even
let num = Number(prompt("Enter a number"));

if (num % 2 === 0) {
  console.log("Even number");
} else {
  console.log("odd number");
}

// 6. WAJSP to access weekdays with number
let weekNum = Number(prompt("Enter a number between 1 - 7"));
switch (true) {
  case weekNum === 1:
    console.log("Monday");
    break;
  case weekNum === 2:
    console.log("Tuesday");
    break;
  case weekNum === 3:
    console.log("Wednesday");
    break;
  case weekNum === 4:
    console.log("Thursday");
    break;
  case weekNum === 5:
    console.log("Friday");
    break;
  case weekNum === 6:
    console.log("Saturday");
    break;
  case weekNum === 7:
    console.log("Sunday");
    break;
  default:
    console.log("Enter valid number");
    break;
}

// 7. WAJSP to access months with number
let month = Number(prompt("Enter number between 1 - 12"));
month === 1
  ? console.log("January")
  : month === 2
  ? console.log("February")
  : month === 3
  ? console.log("March")
  : month === 4
  ? console.log("April")
  : month === 5
  ? console.log("May")
  : month === 6
  ? console.log("June")
  : month === 7
  ? console.log("July")
  : month === 8
  ? console.log("August")
  : month === 9
  ? console.log("September")
  : month === 10
  ? console.log("October")
  : month === 11
  ? console.log("November")
  : month === 12
  ? console.log("December")
  : console.log("Enter number between 1 - 12");
