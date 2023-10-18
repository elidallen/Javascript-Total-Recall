/*How do we assign a value to a variable? A. We assign a value to a variable using the assignment operator =. For example: let x = 42;.

How do we change the value of a variable? A. To change the value of a variable, you simply reassign it using the assignment operator. For example: x = 100;.

How do we assign an existing variable to a new variable? A. You can assign an existing variable to a new variable by simply using the existing variable's name. For example: let y = x; would assign the value of x to y.

Remind me, what are declare, assign, and define? A.

Declare: Declaring a variable involves creating it and specifying its name, but without giving it an initial value. For example: let x; declares a variable named x.
Assign: Assigning a variable involves giving it a value using the assignment operator. For example: x = 42; assigns the value 42 to the variable x.
Define: Defining a variable is a general term that encompasses both declaration and assignment. It refers to creating a variable, giving it a name, and providing it with an initial value in one step.
What is pseudocoding and why should you do it? A. Pseudocoding is the practice of writing out the steps or logic of a program in a human-readable, high-level way, before actually writing the code. It helps you plan and think through your code's structure and functionality without getting lost in the details of the programming language. Pseudocoding is useful because it:

Helps you clarify your thoughts and intentions.
Allows you to work out the algorithm and design of your code.
Makes it easier to collaborate with others on the project.
Can save time by preventing mistakes early in the development process.
What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it? A. The amount of time spent thinking about how to solve a problem versus writing code can vary depending on the complexity of the problem and your experience level. However, it's generally a good practice to spend a significant portion of your time, perhaps around 50% or more, thinking and planning before writing code. The more time you invest in understanding the problem, designing a solution, and pseudocoding, the more efficient and error-free your coding process is likely to be.*/




// B. Strings
let firstVariable;

firstVariable = "Hello World";

firstVariable = 42;

let secondVariable = firstVariable;

secondVariable = "Goodbye World";

console.log(firstVariable); // It is 42

let yourName = "John";

let greeting = `Hello, my name is ${yourName}`;
console.log(greeting); // Output: "Hello, my name is John"

// C. Booleans
const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kevin';

console.log(a < b); // true
console.log(c > d); // true
console.log('Name' === 'Name'); // true
console.log(true || false); // true
console.log(false || false || false || false || false || true); // true
console.log(false === false); // true
console.log(e === 'Kevin'); // true
console.log(a < b && b < c); // true
console.log(a === a && a < d); // true
console.log(48 === '48'); // false

// D. The Farm
let animal = "cow";
if (animal === "cow") {
  console.log("mooooo");
} else {
  console.log("Hey! You're not a cow.");
}

// E. Drivers Ed
let age = 16;
if (age >= 16) {
  console.log("Here are the keys!");
} else {
  console.log("Sorry, you're too young.");
}

// Loops
// Basics
for (let i = 0; i <= 10; i++) {
  console.log(i);
}

for (let i = 10; i <= 400; i++) {
  console.log(i);
}

for (let i = 12; i <= 4000; i += 3) {
  console.log(i);
}

// B. Get Even
for (let i = 1; i <= 100; i++) {
  if (i % 2 === 0) {
    console.log(`${i} <-- is an even number`);
  }
}

// C. Give Me Five
for (let i = 0; i <= 100; i++) {
  if (i % 5 === 0) {
    console.log(`I found a ${i}. High five!`);
  } else if (i % 3 === 0) {
    console.log(`I found a ${i}. Three is a crowd.`);
  }
}

// D. Savings Account
let bank_account = 0;
for (let i = 1; i <= 10; i++) {
  bank_account += i;
}

console.log(`Bank Account: $${bank_account}`);

let bank_account_bonus = 0;
for (let i = 1; i <= 100; i++) {
  bank_account_bonus += i * 2;
}

console.log(`Bank Account with Bonus: $${bank_account_bonus}`);

// III. Arrays & Control Flow
// A. Talk About It
// Things in an array are called elements.
//Arrays do guarantee that elements will be in order.

// B. Easy Does It
let quotes = ["Quote 1", "Quote 2", "Quote 3"];

// C. Accessing Elements
const randomThings = [1, 10, "Hello", true];
const firstElement = randomThings[0];
const thirdElement = randomThings[2];
console.log(`First Element: ${firstElement}`);
console.log(`Third Element: ${thirdElement}`);

// D. Change Values
const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"];
ourClass[4] = "Octocat";
ourClass.push("Cloud City");
console.log(`Updated Array: ${ourClass}`);

// E. Mix It Up
const myArray = [5, 10, 500, 20];
myArray.push("Aegon", "AnotherString");
myArray.shift();
myArray.unshift("Bob Marley");
myArray.pop();
myArray.reverse();
console.log(`Updated Array: ${myArray}`);

// F. Biggie Smalls
let number = 120;
if (number < 100) {
  console.log("little number");
} else {
  console.log("big number");
}

// G. Monkey in the Middle
let num = 7;
if (num < 5) {
  console.log("little number");
} else if (num > 10) {
  console.log("big number");
} else {
  console.log("monkey");
}
// H. What's in Your Closet
// ... (no code changes needed)

// IV. Functions
// A. printGreeting
function printGreeting(name) {
  return `Hello there, ${name}!`;
}

console.log(printGreeting("Slimer")); // Output: Hello there, Slimer!

// B. printCool
function printCool(name) {
  console.log(`${name} is cool`);
}

printCool("Captain Reynolds"); // Output: Captain Reynolds is cool

// C. calculateCube
function calculateCube(number) {
  const volume = Math.pow(number, 3);
  console.log(volume);
}

calculateCube(5); // Output: 125

// D. isVowel
function isVowel(character) {
  const lowerChar = character.toLowerCase();
  return ['a', 'e', 'i', 'o', 'u'].includes(lowerChar);
}

console.log(isVowel("a")); // Output: true

// E. getTwoLengths
function getTwoLengths(string1, string2) {
  return [string1.length, string2.length];
}

console.log(getTwoLengths("Hank", "Hippopopalous")); // Output: [4, 13]

// F. getMultipleLengths
function getMultipleLengths(stringArray) {
  const lengths = [];
  for (let i = 0; i < stringArray.length; i++) {
    lengths.push(stringArray[i].length);
  }
  return lengths;
}

console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"])); // Output: [5, 4, 2, 2, 4]

// G. maxOfThree
function maxOfThree(num1, num2, num3) {
  return Math.max(num1, num2, num3);
}

console.log(maxOfThree(6, 9, 1)); // Output: 9

// H. printLongestWord
function printLongestWord(stringArray) {
  let longestWord = stringArray[0];
  for (let i = 1; i < stringArray.length; i++) {
    if (stringArray[i].length > longestWord.length) {
      longestWord = stringArray[i];
    }
  }
  return longestWord;
}

console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"])); // Output: "Peanutbutter"

// Optional: Objects
const cat1 = {
  name: "Mama Cat",
  breed: "Siamese",
  age: 7,
};

console.log(`Name: ${cat1.name}`);
console.log(`Breed: ${cat1.breed}`);
console.log(`Age: ${cat1.age}`);

const cat2 = {
  name: "Papa Cat",
  breed: "Maine Coon",
  age: 5,
};

console.log(`Name: ${cat2.name}`);
console.log(`Breed: ${cat2.breed}`);
console.log(`Age: ${cat2.age}`);

function combineCats(cat1, cat2) {
  return {
    name: `${cat1.name} ${cat2.name}`,
    breed: `${cat1.breed} ${cat2.breed}`,
    age: (cat1.age + cat2.age) / 2,
  };
}

const newCat = combineCats(cat1, cat2);
console.log(newCat);