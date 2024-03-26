//1.to convert even digit strings to upper case
let str = prompt("enter any string");
modStr = str.split(" ").join("");
let result = "";
for (let i = 0; i < modStr.length; i++) {
  if ((i + 1) % 2 === 0) {
    result += modStr[i].toUpperCase();
  } else {
    result += modStr[i];
  }
}
console.log(result);
//2.to print one time repeated characters
let str1 = prompt("enter any string");
let res = "";
for (let i = 0; i < str1.length; i++) {
  let count = 0;
  for (let j = 0; j < str1.length; j++) {
    if (str1[i] === str1[j]) {
      count++;
    }
  }
  if (count === 1) {
    res += str1[i];
  }
}
console.log(res);
//3. to convert string into object
let string = prompt(
  "enter properties and values in the object by dividing them by space and given equal sign between property and value  "
);
let keyValuePairs = string.split(" ");
let obj = {};
for (let i = 0; i < keyValuePairs.length; i++) {
  let pair = keyValuePairs[i];
  [key, value] = pair.split("=");
  obj[key] = value;
}
console.log(obj);
//4.to convert half of the string into uppercase and remaining to lower case
let str2 = prompt("enter a string");
let l = str2.length;
console.log(l);
let result1 = "";
for (let i = 0; i < Math.floor(l / 2); i++) {
  result1 += str2[i].toUpperCase();
}
for (let i = Math.floor(l / 2); i < l; i++) {
  result1 += str2[i].toLowerCase();
}
console.log(result1);
//5. to print the repeated character in the given string
let str3 = prompt("Enter any string");
let charCount = {};
for (let i = 0; i < str3.length; i++) {
  let char = str3[i];
  charCount[char] = charCount[char] + 1 || 1;
}
const charKeys = Object.keys(charCount);
for (let i = 0; i < charKeys.length; i++) {
  const char = charKeys[i];
  if (charCount[char] > 1) {
    console.log(`Character '${char}' is repeated ${charCount[char]} times`);
  }
}
//6.to convert the string into array
let str5 = prompt("enter strings");
let arr = [];
let word = "";
for (let i = 0; i < str5.length; i++) {
  if (str5[i] !== " ") {
    word += str5[i];
  } else {
    arr.push(word);
    word = "";
  }
}
if (word !== "") {
  arr.push(word);
}
console.log(arr);
