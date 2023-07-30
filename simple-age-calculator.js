// Simple Age Calculator
// We define our variables birthyear and currentyear
// we define a function called calculateAge() that takes two parameters, birthYear and currentYear. 
// Inside the function, we check if the current year is less than the birth year 
// (which would be an invalid input). If it is, we return an error message.
// If the input is valid, we subtract the birthYear from the currentYear to calculate the age and return the 
// result. 
// Finally, we test the age calculator by providing sample values for birthYear and currentYear, and then we 
// log the calculated age to the console.

// defining our variables
const birthYear = parseInt(prompt("Enter your birth year"));;
const currentYear = parseInt(prompt("Enter current year"));;

function calculateAge(birthYear, currentYear) {
    if (currentYear < birthYear) {
      return "Invalid input: Current year cannot be before birth year.";
    }
  
    const age = currentYear - birthYear;
    return age;
  }
  
  
  const age = calculateAge(birthYear, currentYear);
  console.log("Your age is: " + age);




// EVEN NUMBERS
// Define an array called numbersArray, which contains numbers from 1 to 20. 
// We then create a function called isEven() that takes a number as input and returns true if it's even and false otherwise. 
// Inside the loop, we check each number in the array using the isEven() function and use console.log() to output only the even numbers 
// (2, 4, 6, 8, 10) to the console.

const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

// Function to check if a number is even
function isEven(number) {
  return number % 2 === 0;
}

// Loop through the array and output even numbers
console.log("Even numbers in the array:");
for (let i = 0; i < numbersArray.length; i++) {
  const currentNumber = numbersArray[i];
  if (isEven(currentNumber)) {
    console.log(currentNumber);
  }
}