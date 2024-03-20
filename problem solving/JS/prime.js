//Write a javascript program to count how many prime numbers are present between 1 to 5
let start = Number(prompt("enter the starting number"));
let end = Number(prompt("enter the ending number"));
let output = 0;
for (let i = start; i <= end; i++) {
  let count = 0;
  for (let j = 1; j <= i; j++) {
    if (i % j === 0) {
      count++;
    }
  }
  if (count === 2) {
    output++;
  }
}
console.log(`There are ${output} prime numbers between ${start} and ${end}`);
//Write a Javascript program to find the factorial of user defined number
let num = Number(prompt("enter a value to find factorial"));
let fact = 1;
for (let i = num; i > 0; i--) {
  fact = fact * i;
}
console.log(fact);
