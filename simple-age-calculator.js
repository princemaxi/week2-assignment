// Create variables to accept birthyear and currentyear.
let birthYear = parseInt(prompt("Enter your birth year"));;
let currentYear = parseInt(prompt("Enter current year"));;
// Create a Subtraction function called calculateAge() that takes two parameters, birthYear and currentYear. 
function calculateAge(birthYear, currentYear) {
    // Inside the function, Create an if statement to check if the current year is less than the birth year, If it is, we return an error message(which would be an invalid input).
    if (currentYear < birthYear) {
      return "Invalid input: Current year cannot be before birth year.";
    }
    // If the input is valid, we subtract the birthYear from the currentYear to calculate the age and return the result. 
    let age = currentYear - birthYear;
    return age;
  }
   // Define the age variable to be the function calaculate age.
  const age = calculateAge(birthYear, currentYear);
  // invoke the age constant which is our calculateAge function to run the calculator.
  console.log("Your age is: " + age);



// Create a variable called numbersArray, which is 100.
let numbersArray = 100;

    console.log("Even numbers in the array:");
    // Loop through the array and output even numbers
    for (let i =1; i <= numbersArray; i++) {
        // Inside the loop, check each number in the array if it is even and use console.log() to output only the even numbers(2, 4, 6, 8, 10) to the console.
        if (i % 2 === 0){
            console.log(i);
        }
    };



