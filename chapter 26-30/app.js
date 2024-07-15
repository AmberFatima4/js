// 1. Write a program that takes a positive integer from user &
// display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number

// var userNumber = prompt("Enter positive integers in decimal.");

// var numbers = Number(userNumber);

// document.write("number: " + numbers);

// var roundOffValue = Math.round(numbers);

// document.write("<br>Round off value: " + roundOffValue);

// var floorValue = Math.floor(numbers);

// document.write("<br>Floor value: " + floorValue);

// var ceilValue = Math.ceil(numbers);

// document.write("<br>Ceil value: " + ceilValue);


// 2. Write a program that takes a negative floating point
// number from user & display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number

// var userNumber = prompt("Enter negative floating point numbers.");

// var numbers = Number(userNumber);

// document.write("number: " + numbers);

// var roundOffValue = Math.round(numbers);

// document.write("<br>Round off value: " + roundOffValue);

// var floorValue = Math.floor(numbers);

// document.write("<br>Floor value: " + floorValue);

// var ceilValue = Math.ceil(numbers);

// document.write("<br>Ceil value: " + ceilValue);


// 3. Write a program that displays the absolute value of a
// number.
// E.g. absolute value of -4 is 4 & absolute value of 5 is 5


// var userNumber = prompt("Enter a number.");

// var numbers = Number(userNumber);

// var absoluteValue = Math.abs(numbers);

// document.write("The Absolute value of: " + userNumber + " is " + absoluteValue);


// 4. Write a program that simulates a dice using random()
// method of JS Math class. Display the value of dice in your
// browser.:

// var diceNumber = Math.floor(Math.random() * 6) + 1;

// document.write("The random value of dice is: " + diceNumber);


// 5. Write a program that simulates a coin toss using random()
// method of JS Math class. Display the value of coin in your
// browser

// var coinValue = Math.floor(Math.random() * 2) + 1;

// if (coinValue === 2) {

//     document.write(coinValue + "<br>" + "The random value of coin is: Heads");

// } else {

//     document.write(coinValue + "<br>" + "The random value of coin is: Tails");

// }

// 6. Write a program that shows a random number between 1
// and 100 in your browser.


// var randomNumber = Math.floor(Math.random() * 100) + 1;

// document.write("The random number between 1 and 100 is: " + randomNumber);


// 7. Write a program that asks the user about his weight. Parse
// the user input and display his weight in your browser.
// Possible user inputs can be:
// a. 50
// b. 50kgs
// c. 50.2kgs
// d. 50.2kilograms

// var weight=prompt("Enter your weights in Kilograms.");

// var parsevalue = parseFloat(weight);

// var fixedParse = parsevalue.toFixed(1)

// document.write("The weight of user is " + fixedParse + " kilograms")


// 8. Write a program that stores a random secret number from
// 1 to 10 in a variable. Ask the user to input a number
// between 1 and 10. If the user input equals the secret
// number, congratulate the user.

// var secretNumber = Math.floor(Math.random() * 10) + 1;

// var userNumber = prompt("Enter a number between 1 and 10.");

// var userInput = Number(userNumber);

// if (userInput === secretNumber) {

//     document.write("Congratulations! You guessed the correct number.");

//     } else {

//         document.write("Sorry, you guessed wrong. The correct number was: " + secretNumber);

//     }