// // 1. Write a program that takes two user inputs for first and
// // last name using prompt and merge them in a new variable
// // titled fullName. Greet the user using his full name.

// var userFirstName = prompt("Enter your first name?");

// var userLastName = prompt("Enter your last name?");

// var fullName = userFirstName + userLastName;

// document.write("Hello, " + fullName);

// // 2. Write a program to take a user input about his favorite
// // mobile phone model. Find and display the length of user
// // input in your browser


// var userInputAboutFavouriteMobile = prompt("Which is your favourite mobile phone model?");

// document.write("My Favourite mobile is : " + userInputAboutFavouriteMobile)

// let displayLength = userInputAboutFavouriteMobile.length;

// document.write("Length Of String: " +  displayLength);

// // 3. Write a program to find the index of letter “n” in the word
// // “Pakistani” and display the result in your browser .

// var countryName = "Pakistani";

// var indexOfN = countryName.indexOf("n");

// document.write("String: " + countryName)

// document.write("Index of 'n' is: " + indexOfN);


// // 4. Write a program to find the last index of letter “l” in the
// // word “Hello World” and display the result in your browser.


// var greet = "Hello World";

// var indexOfL = greet.lastIndexOf("l");

// document.write("String: " + greet)

// document.write("Last Index of 'l' is: " + indexOfL);


// // 6. Repeat Q1 using string concat() method.

// var userFirstName = prompt("Enter your first name?");

// var userLastName = prompt("Enter your last name?");

// var fullName = userFirstName.concat(" ", userLastName);

// document.write("Hello, " + fullName);


// 7. Write a program to replace the “Hyder” to “Islam” in the
// word “Hyderabad” and display the result in your browser.


// var cityName = "Hyderabad";

// document.write ("City: " + cityName + "<br>")
// var replace ;
// for(var i =0 ; i< cityName.length ; i++){
//     if (cityName.slice(i,i+5) == "Hyder"){
//         replace = cityName.slice(0,i) + "Islam" + cityName.slice(i+5);
//     }
// }

// document.write("After Replacement: " + replace)


// 8. Write a program to replace all occurrences of “and” in the
// string with “&” and display the result in your browser.
// var message = “Ali and Sami are best friends. They play cricket and
// football together.”;


// var message = "Ali and Sami are best friends. They play cricket and football together.";

// document.write("Message: " + message + "<br>")

// var replaceAnd = message.replace(/and/g , "&")

// document.write("Replace Message: " + replaceAnd)

// 9. Write a program that converts a string “472” to a number
// 472. Display the values & types in your browser.


// var stringNumber = "472";

// document.write("String: " + stringNumber + "<br>")

// document.write("Type of String: " + typeof stringNumber + "<br>")

// var number = Number(stringNumber);

// document.write("Number: " + number + "<br>")

// document.write("Type of Number: " + typeof number);


// 10. Write a program that takes user input. Convert and
// show the input in capital letters.

// var userInput = prompt("Enter the text");

// document.write("User Input: " + userInput + "<br>")

// var capitalLetters = userInput.toUpperCase();

// document.write("Capital Letters: " + capitalLetters);


// 11. Write a program that takes user input. Convert and
// show the input in title case.


// var userInputProgrammingLanguage = prompt("Enter any programming language name.");

// document.write("User Input: " + userInputProgrammingLanguage + "<br>");

// var changeArray = userInputProgrammingLanguage.split(" ");

// var titleCase = [];

// for (var i = 0; i < changeArray.length; i++) {
//     var titleCaseWord = changeArray[i].charAt(0).toUpperCase() + changeArray[i].slice(1).toLowerCase();
//     titleCase.push(titleCaseWord);
// }

// var joinArray = titleCase.join(" ");

// document.write("Title Case: " + joinArray);


// 12. Write a program that converts the variable num to
// string.
// var num = 35.36 ;
// Remove the dot to display “3536” display in your browser.


// var num = 35.36;

// document.write("Number: " + num + "<br>");

// var stringNum = num.toString().replace(".", "");

// document.write("Result: " + stringNum);


// 13. Write a program to take user input and store username
// in a variable. If the username contains any special symbol
// among [@ . , !], prompt the user to enter a valid username.
// For character codes of [@ .

// Note:
// ASCII code of ! is 33
// ASCII code of , is 44
// ASCII code of . is 46
// ASCII code of @ is 64


// var userName = prompt("Enter your name");

// var charCode;
// for (let i = 0; i < userName.length; i++) {
// charCode = userName.charCodeAt(i)


// if (charCode === 33 | charCode === 44 | charCode === 46 | charCode === 64) {
//     alert("Invalid username. The username cannot contain any of the following characters: @ . , !. Please enter a valid username.");
// }
// else{


// document.write("Valid Username: " + userName);
// }
// }


// 14. You have an array
// A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array. After searching, prompt the user whether the given
// item is found in the list or not.
// Note: Perform case insensitive search. Whether the user
// enters cookie, Cookie, COOKIE or coOkIE, program
// should inform about its availability. Example:

// var A = ["cake", "apple pie", "cookie", "chips", "patties"];
// var userInput = prompt("Welcome to ABC Bakery. What do you want to order, sir/ma'am?");
// var changeCase = userInput.toLowerCase();
// var found = false;

// for (var i = 0; i < A.length; i++) {
//     if (changeCase === A[i]) {
//         document.write(changeCase + " is available at index " + i + " in our bakery.");
//         found = true;
//         break;
//     }
// }

// if (!found) {
//     document.write("We are sorry. " + changeCase + " is not available in our bakery.");
// }

// 15. Write a program to take password as an input from
// user. The password must qualify these requirements:
// a. It should contain alphabets and numbers
// b. It should not start with a number
// c. It must at least 6 characters long
// If the password does not meet above requirements,
// prompt the user to enter a valid password.
// For character codes of a-z, A-Z & 0-9, refer to ASCII
// table at the end of this document.





// ASCII table for reference:

// A-Z: 65-90

// a-z: 97-122

// 0-9: 48-57


// 16. Write a program to convert the following string to an
// array using string split method.
// var university = “University of Karachi”;
// Display the elements of array in your browser.


// var university = "University of Karachi";

// var splitMethod  = university.split("");

// for(var i=0 ; i<splitMethod.length ; i++){
//     document.write(splitMethod[i] + "<br>");

// }


// 17. Write a program to display the last character of a user
// input.


// var userInput = prompt("Enter a string");

// var lastCharacter = userInput[userInput.length - 1];

// document.write("User Input: " + userInput + "<br>" + "Last character: " + lastCharacter);

// 18. You have a string “The quick brown fox jumps over the
// lazy dog”. Write a program to count number of
// occurrences of word “the” in given string.


// var string = "The quick brown fox jumps over the lazy dog";

// var changeInLowerCase = string.toLowerCase();

// var changeInSplit = changeInLowerCase.split(" ");

// var count = 0;

// for(var i=0 ; i<changeInSplit.length ; i++){
//     if(changeInSplit[i] === "the"){
//         count++;
//     }
// }
// document.write("Text " + string + "<br>" + "There are " + count + " occurrence(s) of word 'the'");