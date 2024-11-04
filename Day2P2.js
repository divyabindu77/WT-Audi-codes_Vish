/* You are given a collection of books objects in a library.
Request the user's library ID 
and assist them in determining whether the book is available at the library.

Input Format:
-------------
Line 1: A number, represents libraryId

Output Format:
--------------
Line 2: A string, please refer sample output

Sample Input 1:
---------------
5

Sample Output 1:
----------------
Book with libraryId 5 : 'The Old Man and the Sea' by 'Ernest Hemingway' is available.


Sample Input 2:
---------------
10

Sample Output 2:222
----------------
Sorry! Book with libraryId 10 is not available.

*/
let library = [
  {
    title: "The Great Gatsby",
    author: "Francis Scott Fitzgerald",
    libraryId: 1,
  },
  {
    title: "The Catcher in the Rye",
    author: "J. D. Salinger",
    libraryId: 2,
  },
  {
    title: "The Grapes of Wrath",
    author: "John Steinbeck, Robert DeMott",
    libraryId: 3,
  },
  {
    title: "The Catcher in the Rye",
    author: "The Road Ahead",
    libraryId: 4,
  },
  {
    title: "The Old Man and the Sea",
    author: "Ernest Hemingway",
    libraryId: 5,
  },
  {
    title: "Of Mice and Men",
    author: "John Steinbeck",
    libraryId: 6,
  },
  {
    title: "A Song of Ice and Fire",
    author: "R. R. Martin",
    libraryId: 7,
  },
];

const readline = require("readline");

// Set up readline interface for reading input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  let libraryId = parseInt(line);
  solution(libraryId);
  rl.close();
});

function solution(libraryId) {
  // Use the libraryId directly
  for (let obj of library) {
    if (obj.libraryId === libraryId) {
      console.log(
        `Book with libraryId ${libraryId} : '${obj.title}' by '${obj.author}' is available.`
      );
      return;
    }
  }
  console.log(`Sorry! Book with libraryId ${libraryId} is not available.`);
}
