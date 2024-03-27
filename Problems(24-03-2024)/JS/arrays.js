//1.
let l = Number(prompt("enter the length of the array"));
let arr = [];
for (let i = 0; i < l; i++) {
  let a = Number(prompt(`enter the ${i}th element in the array`));
  arr.push(a);
}
let newarr = [];
let pos = 0;
let neg = 0;
for (let i = 0; i < l; i++) {
  if (arr[i] >= 0) {
    pos += arr[i];
  } else {
    neg += arr[i];
  }
}
newarr.push(pos);
newarr.push(neg);
console.log(newarr);
//2.take an array of strings if the last char ends with vowel convert it into capitals and print even chars
let size1 = Number(prompt("Enter the size of array "));
let name = [];
let name1 = [];

for (let i = 0; i < size1; i++) {
  name[i] = prompt("Enter name " + i + ":");
  let modifiedName = "";
  for (let j = 0; j < name[i].length; j += 2) {
    modifiedName += name[i][j];
  }
  name1.push(modifiedName);

  if (
    name[i].slice(-1) === "a" ||
    name[i].slice(-1) === "e" ||
    name[i].slice(-1) === "i" ||
    name[i].slice(-1) === "o" ||
    name[i].slice(-1) === "u"
  ) {
    name[i] = name[i].toUpperCase();
  } else {
    name[i] = name[i].toLowerCase();
  }
}

console.log(name1, name);

//3.
let size5 = Number(prompt("Enter no.of words you want to enter in array"));
let plndrome = [];
let arr4 = [];
for (i = 0; i < size5; i++) {
  arr4[i] = prompt("Enter word" + i + ":");
  let str = "";
  for (j = arr4[i].length - 1; j >= 0; j--) {
    str += arr4[i][j];
  }
  if (str === arr4[i]) {
    plndrome.push(str);
  }
}
console.log(plndrome);
console.log(arr4);
