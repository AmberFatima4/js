// task 1

var character = "A";

var asciiCode = character.charCodeAt(0);

if (asciiCode >= 65 && asciiCode <= 90) {
    console.log(character + " is an uppercase letter");
} else if (asciiCode >= 97 && asciiCode <= 122) {
    console.log(character + " is a lowercase letter");
} else if (asciiCode >= 48 && asciiCode <= 57) {
    console.log(character + " is a number");
} else {
    console.log(character + " is a special character");
}

// task 2

var num1 = 20;

var num2 = 25;

if (num1 > num2) {

    console.log(num1 + " is greater than " + num2);
} else if (num1 < num2) {

    console.log(num2 + " is greater than " + num1);
} else {

    console.log(num1 + " is equal to " + num2);
}
// task 3

var num = +prompt("Enter a number");

if (num > 0) {
    console.log(num + " is a positive number");
} else if (num < 0) {
    console.log(num + " is a negative number");
} else {
    console.log(num + " is zero");
}

// task 4


var vowel = prompt("Enter a vowel character (string of length 1):");

if (vowel == "a" || vowel == "e" || vowel == "i" || vowel == "o" || vowel == "u") {
    console.log(vowel + " is a vowel");
} else {
    console.log(vowel + " is not a vowel");
};

// task 5


var password = "123";

var userPassword = prompt("Enter your password");

if (userPassword === "") {
    console.log("Please enter your password");
} else if (userPassword === password) {
    console.log("Correct! The password you entered matches the original password");
} else {
    console.log("Incorrect password");
}

// task 6

var greeting;
var hour = 13;
if (hour < 18) {
    greeting = "Good day";
} else {
    greeting = "Good evening";
};

console.log(greeting);

// task 7


var time = +prompt("Enter time in 24 hours clock format (i.e 1900 = 7pm");

if (time >= 0 && time < 1200) {

    console.log("Good Morning");

} else if (time >= 1200 && time < 1700) {

    console.log("Good Afternoon");

} else if (time >= 1700 && time < 2100) {

    console.log("Good Evening");

} else if (time >= 2100 && time <= 2359) {

    console.log("Good Night");

} else {

    console.log("Invalid time");
};
