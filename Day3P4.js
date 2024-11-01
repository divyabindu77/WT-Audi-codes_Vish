/*
You are tasked with simulating an ice cream production process using JavaScript. 
The user will select a fruit, holder, and topping, and the program will simulate 
the production process with specific delays for each step.

Input:
======
A fruit (e.g., "apple").
A holder (e.g., "cup").
A topping (e.g., "chocolate").

Ouptut: (i.e., the following production steps are executed with delays:)
=======
1. Production starts immediately.
2. After 1 second: The fruit is chopped.
3. After 1 second: Liquid (water and ice) is added.
4. After 2 seconds: The machine starts.
5. After 2 seconds: Ice cream is placed in the holder.
6. After 3 seconds: Topping is added.
7. After 2 seconds: Ice cream is served.


Expected Input:
---------------
Choose a fruit (strawberry, grapes, banana, apple): grapes
Choose a holder (cone, cup, stick): cup
Choose a topping (chocolate, peanuts): peanuts

Expected Output:
----------------
grapes was selected                                                              
production has started                                                          
The grapes fruit has been chopped                                                
water and ice Added                                                             
start the machine                                                               
Ice cream placed on cup                                                       
peanuts as toppings                                                           
serve Ice cream


Each step is performed with the appropriate delay as specified.


*/


const readline = require('readline');

let stocks = {
  Fruits: ["strawberry", "grapes", "banana", "apple"],
  liquid: ["water", "ice"],
  holder: ["cone", "cup", "stick"],
  toppings: ["chocolate", "peanuts"],
};

// Set up readline interface for user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Ask for fruit selection
const askFruit = () => {
  rl.question(`Choose a fruit (${stocks.Fruits.join(', ')}): `, (fruit) => {
    askHolder(fruit);
  });
};

// Ask for holder selection
const askHolder = (fruit) => {
  rl.question(`Choose a holder (${stocks.holder.join(', ')}): `, (holder) => {
    askTopping(fruit, holder);
  });
};

// Ask for topping selection
const askTopping = (fruit, holder) => {
  rl.question(`Choose a topping (${stocks.toppings.join(', ')}): `, (topping) => {
    production(fruit, holder, topping);
  });
};

// Ice cream production process
const production = (fruit_name, holder_name, topping_name) => {
    // Implement your logic here.
};

// Start the process
askFruit();

