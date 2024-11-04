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


const readline = require("readline");

// Define available stocks
let stocks = {
  Fruits: ["strawberry", "grapes", "banana", "apple"],
  liquid: ["water", "ice"],
  holder: ["cone", "cup", "stick"],
  toppings: ["chocolate", "peanuts"],
};

// Set up readline interface for user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Ask for fruit selection
const askFruit = () => {
  rl.question(`Choose a fruit (${stocks.Fruits.join(", ")}): `, (fruit) => {
    if (stocks.Fruits.includes(fruit)) {
      askHolder(fruit);
    } else {
      console.log("Invalid fruit selection. Please try again.");
      askFruit();
    }
  });
};

// Ask for holder selection
const askHolder = (fruit) => {
  rl.question(`Choose a holder (${stocks.holder.join(", ")}): `, (holder) => {
    if (stocks.holder.includes(holder)) {
      askTopping(fruit, holder);
    } else {
      console.log("Invalid holder selection. Please try again.");
      askHolder(fruit);
    }
  });
};

// Ask for topping selection
const askTopping = (fruit, holder) => {
  rl.question(
    `Choose a topping (${stocks.toppings.join(", ")}): `,
    (topping) => {
      if (stocks.toppings.includes(topping)) {
        production(fruit, holder, topping);
      } else {
        console.log("Invalid topping selection. Please try again.");
        askTopping(fruit, holder);
      }
    }
  );
};

// Ice cream production process with delays
const production = (fruit_name, holder_name, topping_name) => {
  console.log(`${fruit_name} was selected`);
  console.log("Production has started");

  // Step 2: After 1 second - Chop the fruit
  setTimeout(() => {
    console.log(`The ${fruit_name} fruit has been chopped`);
  }, 1000);

  // Step 3: After 2 seconds - Add liquid (water and ice)
  setTimeout(() => {
    console.log("Water and ice added");
  }, 2000);

  // Step 4: After 4 seconds - Start the machine
  setTimeout(() => {
    console.log("Start the machine");
  }, 4000);

  // Step 5: After 6 seconds - Place ice cream in holder
  setTimeout(() => {
    console.log(`Ice cream placed on ${holder_name}`);
  }, 6000);

  // Step 6: After 9 seconds - Add topping
  setTimeout(() => {
    console.log(`${topping_name} as toppings`);
  }, 9000);

  // Step 7: After 11 seconds - Serve ice cream
  setTimeout(() => {
    console.log("Serve Ice cream");
    rl.close(); // Close the input stream
  }, 11000);
};

// Start the process
askFruit();
