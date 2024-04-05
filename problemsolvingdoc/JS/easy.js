//1.
// n1=Number(prompt("enter a value"))
// n2=Number(prompt("enter a value"))
// function add(a,b){
//     console.log(a+b);
// }
// add(n1,n2);
//2.
// min=Number(prompt("enter minutes"))
// function add(a){
//     console.log(a*60);
// }
// add(min);
//3.
// n=Number(prompt("enter number"))
// function add(a){
//     return ++a
// }
// let b=add(n);
// console.log(b)
// 4.
// n=Number(prompt("enter number"))
// function add(a){
//     return a*365
// }
// let b=add(n);
// console.log(b)
//5.
// let v=Number(prompt("enter the voltage"))
// let i=Number(prompt("enter the current"))
// function add(a,b){
//     return a*b
// }
// let p=add(v,i);
// console.log(p)
//6.
// let a=" "
// function add(a){
//     return ("something"+a)
// }
// add(a);
//7.
// Create a function that takes two arguments. Both arguments are integers, a and b. Return true if one of them is 10 or if their sum is 10
// n1=Number(prompt("Enter a value"))
// n2=Number(prompt("Enter a value"))
// function check(a,b){
//     let sum=a+b;
//     if(sum===10||a===10||b===10){
//         return true
//     }else{
//         return false
//     }
// }
// let output=check(n1,n2)
// console.log(output)
// 8.Create a function that takes two strings as arguments and returns either true or false depending on whether the total number of characters in the first string is equal to the total number of characters in the second string.
// n1=prompt("Enter a value")
// n2=prompt("Enter a value")
// function check(a,b){
//     let l1=a.length;
//     let l2=b.length;
//     if(l1===l2){
//         return true
//     }else {
//         return false
//     }
// }
// let output=check(n1,n2)
// console.log(output)
//9.Create a function that takes a name and returns a greeting in the form of a string. Don't use a normal function, use an arrow function.
// let name=prompt("enter a name");
// const greeting=(a)=>{
//     let output="Hi "+a;
//     return output;
// }
// console.log(greeting(name));

//Create a function that takes an array of 10 numbers (between 0 and 9) and returns a string of those numbers formatted as a phone number (e.g. (555) 555-5555).
// let arr = [];
// for (let i = 0; i < 10; i++) {
//     let a = Number(prompt(`Enter the ${i + 1}th element in the array:`));
//     arr.push(a);
// }

// let str = arr.join('');

// let modStr = "(" + str.slice(0, 3) + ") " + str.slice(3, 6) + "-" + str.slice(6);

// console.log(modStr);

// let arr=[5,5,5,5,5,5,5,5,5,5];
// function phn (a){
//     console.log(`(${a[0]}${a[1]}${a[2]}) ${a[3]}${a[4]}${a[5]}-${a[6]}${a[7]}${a[8]}${a[9]}`)
// }
// phn(arr)
// 11.Create a function that returns an array of strings sorted by length in ascending order.
// Example:
// sortByLength(["a", "ccc", "dddd", "bb"]) ➞ ["a", "bb", "ccc", "dddd"]
// let a=["a", "ccc", "dddd","bb"];
// function insertion(arr){
// for(let i=0;i<arr.length;i++){
//     for(let j=i+1;j<arr.length;j++){
//         if(arr[i].length>arr[j].length){
//             let temp=arr[i];
//             arr[i]=arr[j]
//             arr[j]=temp;
//         }
//     }
// }
// return arr;
// }
// console.log(insertion(a))
// Create a function that returns an array of strings sorted by length in ascending order.
// Example:
// sortByLength(["a", "ccc", "dddd", "bb"]) ➞ ["a", "bb", "ccc", "dddd"]
// let a=[2,52,84,623,95];
// let output=a.sort(function(a,b){
//     return b-a
// });
// console.log(output)
// 12.Create a function that takes an array of arrays with numbers. Return a new (single) array with the largest numbers of each.
// Example:
// findLargestNums([[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]]) ➞ [7, 90, 2]
// let a=[[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]];
// let res=[];
// for(let i=0;i<a.length;i++){
//     var max=a[i][0]
//     for(let j=1;j<a[i].length;j++){
//         if(max<a[i][j]){
//             max=a[i][j];
//         }
//         }
//         res.push(max);
// }
// console.log(res);
//13.
// let arr = [54,56,42,62,18,59];

// var larger = arr[0];
// var sec_large = Number.MIN_SAFE_INTEGER;

// for(let i = 1; i < arr.length; i++)
// {
//     if(arr[i] > larger)  //  59 > 62
//     {// x
//         sec_large = larger; // 56
//         larger = arr[i];   //  62

//     }

//     else if((arr[i] > sec_large) && (arr[i] !== larger || arr[i] == larger))
//     // 42 > 54 && ( 42 !== 56  || 42 == 56 )
//     {
//         sec_large = arr[i];
//     }

// }
// console.log(sec_large);
// 14.Create a function that takes an array of items, removes all duplicate items and returns a new array in the same sequential order as the old array (minus duplicates).
// Example:

// removeDups([1, 0, 1, 0]) ➞ [1, 0]

// removeDups(["The", "big", "cat"]) ➞ ["The", "big", "cat"]
//let a = [1, 0, 1, 0];
// let b = [];
// b.push(a[0]);
// for (let i = 0; i < a.length; i++) {
//     let found = false;
//     for (let j = 0; j < b.length; j++) {
//         if (a[i] === b[j]) {
//             found = true;
//             break;
//         }
//     }
//     if (found===false) {
//         b.push(a[i]);
//     }
// }
// console.log(b);
// 15.Create a function that takes an array of integers as an argument and returns a unique number from that array. All numbers except unique ones have the same number of occurrences in the array.

// Example:

// findSingleNumber([2, 2, 2, 3, 4, 4, 4]) ➞ 3
// let a = [2,2,2,4,5,5,5,9,7,7];
// for(let i = 0; i < a.length; i++)
// {
//     let count = 0;
//     for(let j = 0; j < a.length; j++)
//     {
//         if(a[i] === a[j])
//         {
//             count++
//         }
//     }
//     if(count == 1)
//     {
//         console.log(a[i])
//     }
// }
//16.Create a function that takes two strings as arguments and returns the number of times the first string (the single character) is found in the second string
// let char=prompt("enter a character")
// let str=prompt("Enter a string")
// function num_of_occ(a,b){
//     let count=0;
//     for(i=0;i<b.length;i++){
//         if(a===b[i]){
//             count++;

//         }
//     }
//        return count;
// }
// console.log(num_of_occ(char,str));
//17. Create a function that takes a string and returns the number (count) of vowels contained within it.
// let str=prompt("Enter a string")
// function num_of_occ(a){
//     let count=0;
//     for(i=0;i<a.length;i++){
//         if(a[i]=="a" || a[i]=="e" || a[i]=="i" || a[i]=="o" || a[i]=="u" ){
//             count++;

//         }
//     }
//        return count;
// }
// console.log(num_of_occ(str));
//18. Given a string, create a function to reverse the case. All lower-cased letters should be upper-cased, and vice versa.
// let str=prompt("Enter a string")
// let output=""
// let small= /[a-z]/

// let cap = /[A-Z]/
// for(i=0;i<str.length;i++){
//      if (small.test(str[i])){
//          output += str[i].toUpperCase();
//      }
//      else{
//         output+= str[i].toLowerCase();
//      }
// }
// console.log(output)
//19.
//   Take one integer n, loop till n and pass each value to a function, create a function that takes one integer parameter, and multiply with 2 in every integer.

// 			Input:      n=5
// 			Output:   2 4 6 8 10
// let n=Number(prompt("enter a value"));
// function multiple(l){
//     for(let i=1;i<=l;i++){
//         console.log(2*i);
//     }
// }
// multiple(n)
//20.
// Create Function that will take one parameter and return type of the data.
// let input1=prompt("enter the string");
// let input2=Number(prompt("enter the number"));
// function datatype(datavalue){
// return typeof datavalue;
// }
// console.log(datatype(input1));
// console.log(datatype(input2));
//21.
// Program to find greatest of three numbers(using ternery operator).
// let a =Number(prompt("enter the value1"));
// let b =Number(prompt("enter the value2"));
// let c =Number(prompt("enter the value3"));
// (a>b)&&(a>c)?console.log(a):
// (b>a)&&(b>c)?console.log(b):
// console.log(c)
//22.
//  Program to find factorial of number.
// let num=Number(prompt("enter the value"));
// let fact=1;
// for(let i=5;i>=2;i--){
//     fact=fact*i
// }
// console.log(fact)
//  to arrange numbers in ascending order
// let a=[2,3,1,5,4];
// for(let i=0;i<a.length-1;i++){
//     let flag=0;
//     for(let j=0;j<a.length-1-i;j++){
//         if(a[j]>a[j+1]){
//             let temp=a[j];
//             a[j]=a[j+1];
//             a[j+1]=temp;
//             flag=1
//         }
//     }
//     if(flag===0){
//         break;
//     }
// }
// console.log(a);

// 24. Print Patter using loop.
// let l=Number(prompt("enter the length"));
// let sum=0;
// for(let i=1;i<=l;i++){
//     sum=(sum*10)+i;
//     console.log(sum);
// }
//  25. C Program to Calculate the Power of a Number(using loop only).
// let n=Number(prompt("enter the value"));
// let p=Number(prompt("enter the power"));
// let output=1
// for(let i=1;i<=p;i++){
//     output*=n
// }
// console.log(output)
// 26. Program to Check Whether a Number is Prime or Not
// let n=Number(prompt("enter the value"));
// let count=0;
// for(let i=1;i<=n;i++){
//     if(n%i===0){
//         count++;
//     }
// }
// if (count===2){
//     console.log("prime number");
// }else{
//     console.log("not a prime number");
// }
//27.Program to find LCM of two numbers using while loop
// let a=Number(prompt("enter a value"));
// let b=Number(prompt("enter b value"));
// let g=(a>b)? a: b;
// let s=(a<b)? a: b;
// let i=1;
// while(i<=a*b){
//     let m=g*i;
//     if(m%s===0){
//         console.log(m)
//         break;
//     }
//     i++;
// }
//28. Display characters from 'A' to 'Z' along with their corresponding counts
// let AChar=65;
// for(let i=0;i<26;i++){
//     let char = String.fromCharCode(AChar+i);
//     let count=i+1;
//     console.log(char+count);
// }
// 29. Program to find a missing number
// let a=[5,3,1,4];
// let n=5;
// for(let i=1;i<=n;i++){
//     let count=0;
//     for(let j=0;j<n;j++){
//         if(i===a[j]){
//             count++
//         }
//     }
//     if(count===0){
//         console.log(i)
//     }
// }
// 30. Program to count vowels and consonants in a given String.
// let string=prompt("enter the string");
// let space=0;
// let vowel=0;
// let consonant=0;
// for(let i=0;i<string.length;i++){
//     if(string[i]==='a'||string[i]==='e'||string[i]==='i'||string[i]==='o'||string[i]==='u'){
//         vowel++;
//     }else if(string[i]===' '){
//         space++;
//     }else{
//         consonant++;
//     }
// }
// console.log(`${vowel} vowels ${consonant} consonants.`)
// 31.program to insert  the elements of an array for specific index.
// let input =[1,2,3,4,5,7,8,9,10];
// input.splice(5,0,6);
// console.log(input)
//31. program to insert  the elements of an array for specific index.
// let n=Number(prompt("Enter index"))
// let a=[4,5,6,7]
// let b=[]
// for(i=0;i<n;i++){
//     b[i]=a[i];

// }
// // console.log(b)
// b[n]=Number(prompt("Enter value"))
// // console.log(b)
// for(j=n+1;j<=a.length;j++){
//     b[j]=a[j-1];
// }
// console.log(b)
// 32. Reverse a number using while Loop
// let num=Number(prompt("enter the value to reverse"));
// let rev=0;
// while(num>0){
//     let rem=num%10;
//     rev=(rev*10)+rem;
//     num=Math.floor(num/10);
// }
// console.log(rev)
// 33. Count occurrence of number:
// let n=Number(prompt("enter the value"));
// let input=[1,6,3,1,5,9,7,2,1,9,3,7,8,9,10];
// let count=0;
// for(let i=0;i<input.length;i++){
//     if(input[i]===n){
//         count++;
//     }
// }
// console.log(`${n} present ${count} times.`)
//bubble sort
// let arr=[12,21,54,55,56,645,354,5421];
// let l=arr.length;
// for(let i=0;i<l-1;i++){
//     let flag=0;
//     for(let j=0;j<l-1-i;j++){
//         if(arr[j]>arr[j+1]){
//             let temp=arr[j];
//             arr[j]=arr[j+1];
//             arr[j+1]=temp;
//             flag=1;
//         }
//     }
//     if(flag===0){
//         break;
//     }
// }
// console.log(arr)
//insertion sort
// let a1=Number(prompt("Enter size of array"))
// let arr6=[];
// let temp=[]
//     for(i=0;i<a1;i++){
//     arr6[i]=Number(prompt("Enter element" + i + ":"))
// }
// function SL(a1){

// for(i=0;i<a1;i++){
//     for(j=i+1;j<a1;j++){
//         if(arr6[i]<arr6[j]){
//             temp=arr6[i];
//             arr6[i]=arr6[j];
//             arr6[j]=temp;

//         }
//     }
// } return arr6[1];
// }

// console.log(SL(a1))
