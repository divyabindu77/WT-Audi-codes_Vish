/*
You are given a string str, and your task is to find the number of vowels and 
non-vowels in the string.

Input Format:
-------------
Line-1: A string

Output Format:
--------------
Line-1: A number, Vowels count
Line-2: A number, Non-Vowels count

Sample Input-1:
---------------
Hello

Sample Output-1:
----------------
Vowels: 2
Non-Vowels: 3

Sample Input-1:
---------------
Hello world

Sample Output-1:
----------------
Vowels: 3
Non-Vowels: 8

*/

const readline = require('readline');

// Set up readline interface for reading input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Function to count vowels in a string
const countLetters = (str) => {
  //Write your code and return vowel count
  let vowels = ['a','e','i','o','u','A','E','I','O','U']
  let cnt = 0
  
  for(let i=0 ; i < str.length ; i++){
      let ch = str[i];
      if (vowels.includes(ch)){
          cnt++;
      }
  }
  return cnt;
};

// Reading input synchronously
// console.log("Enter a string:");
rl.on('line', (input) => {
  const len = input.length;
  const count = countLetters(input);
  console.log(`Vowels: ${count}\nNon-Vowels: ${len - count}`);
  rl.close();
});


