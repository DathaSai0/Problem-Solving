//palindrome number
let num = Number(prompt("enter a value to find palindrome or not"));
let check = num;
let rev = 0;
while (num > 0) {
  let rem = num % 10;
  rev = rev * 10 + rem;
  num = Math.floor(num / 10);
}
if (check === rev) {
  console.log(`${check} is a palindrome number`);
} else {
  console.log(`${check} is not a palindrome number`);
}
// generating 6 digit code
const otpLength = 6;
let otp = "";
for (let i = 0; i < otpLength; i++) {
  otp += Math.floor(Math.random() * 10);
}
console.log("Generated OTP:", otp);
//nth fibanocci series value
let frst = 0;
let scnd = 1;
let target = Number(prompt("enter the value"));
let count = 2;
for (let i = 3; i <= 100; i++) {
  let nxt = frst + scnd;

  frst = scnd;
  scnd = nxt;
  count++;
  if (target === count) {
    console.log(nxt);
    breek;
  }
}
//median
let numbers = [7, 2, 9, 4, 5];
let median;
numbers.sort(function (a, b) {
  return a - b;
});
console.log(numbers);
let n = numbers.length;
if (n % 2 !== 0) {
  median = numbers[Math.floor(n / 2)];
} else {
  let middle1 = numbers[n / 2 - 1];
  let middle2 = numbers[n / 2];
  median = (middle1 + middle2) / 2;
}

console.log("Median:", median);

//Write a javascript program to convert decimal number to binary number
let num1 = Number(prompt("enter a value"));
let output = "";
while (num1 > 0) {
  output = (num1 % 2) + output;
  num = Math.floor(num1 / 2);
}
console.log(output);
