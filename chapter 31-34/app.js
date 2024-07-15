// 1. Write a program that displays current date and time in
// your browser.


// var currentDate = new Date();

// document.write(currentDate);

// 2. Write a program that alerts the current month in words.
// For example December.

// var currentDate = new Date();

// var currentMonth = currentDate.getMonth();

// const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

// alert("Current Month: " + months[currentMonth]);


// 3. Write a program that alerts the first 3 letters of the current
// day, for example if today is Sunday then alert will show
// Sun.

// var currentDate = new Date();

// var currentDay = currentDate.getDay();

// var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

// alert("Today is " + days[currentDay].slice(0, 3));


// 4. Write a program that displays a message “It’s Fun day” if
// its Saturday or Sunday today.

// var currentDate = new Date();

// var currentDay = currentDate.getDay();

// if (currentDay === 6 || currentDay === 0) {

//     alert("It's Fun day!");

//     } else {

//         alert("It's not Fun day.");

//     }


// 5. Write a program that shows the message “First fifteen
// days of the month” if the date is less than 16th of the month
// else shows “Last days of the month”.

// var currentDate = new Date();

// var currentDay = currentDate.getDate();

// if (currentDay < 16) {

//     alert("First fifteen days of the month.");

// } else {

//     alert("Last days of the month.");

// }


// 6. Write a program that determines the minutes since
// midnight, Jan. 1, 1970 and assigns it to a variable that
// hasn't been declared beforehand. Use any variable you like
// to represent the Date object.

// var currentDate = new Date();

// // Display the current date
// document.write("Current Date: " + currentDate + "<br>");

// // Get the elapsed milliseconds since Jan. 1, 1970
// var milliSecond = currentDate.getTime();

// // Display the elapsed milliseconds since Jan. 1, 1970
// document.write("Elapsed milliseconds Since Jan. 1, 1970: " + milliSecond + "<br>");

// // Convert milliseconds to minutes
// var minutes = milliSecond / (1000 * 60);

// // Display the elapsed minutes since Jan. 1, 1970
// document.write("Elapsed minutes Since Jan. 1, 1970: " + minutes);


// 7. Write a program that tests whether it's before noon and
// alert “Its AM” else “its PM”.

// var currentDate = new Date();

// var hours = currentDate.getHours();

// if (hours < 12) {

//     alert("Its AM");

// } else {

//     alert("Its PM");

// }

// 8. Write a program that creates a Date object for the last day
// of the last month of 2020 and assigns it to variable named
// laterDate.

// var laterDate = new Date(2020, 11, 31);

// // Display the later date

// document.write("Later Date: " + laterDate);


// 9. Create a date object of the starting date of this Ramadan
// and alert the number of days past since 1st Ramadan?
// Note: 1st Ramadan was on June 18, 2015


// var startingDate = new Date(2015,5,18);

// var currentDate = new Date();

// var daysPast = Math.floor((currentDate - startingDate) / (1000 * 60 * 60 * 24));

// alert( daysPast + " have past since 1st Ramadan,2015");


// 10. Write a program that displays in your browser the
// seconds that elapsed between the reference date and the
// beginning of 2015.

// var beginningDate = new Date(2015, 0, 1);

// var referenceDate = new Date();

// var secondsElapsed = Math.floor((referenceDate - beginningDate) / 1000);

// document.write("On reference date " + referenceDate + " " + secondsElapsed + " seconds had past since beginning of 2015.");

// 11. Create a Date object for the current date and time.
// Extract the hours, reset the date object an hour ahead and
// finally display the date object in your browser.


// var currentDate = new Date();

// var hours = currentDate.getHours();

// previousDate = new Date(currentDate)

//  currentDate.setHours(hours - 1);

// document.write("Current Date and Time: " + previousDate + "<br>" + " 1 hour ago it was " + currentDate );

// 12. Write a program that creates a date object and show the
// date in an alert box that is reset to 100 years back?

// var currentDate = new Date();

// var yearsBack = 100;

// var date100YearsBack = new Date(currentDate.getFullYear() - yearsBack, currentDate.getMonth(), currentDate.getDate());

// alert("Current Date: " + currentDate + "<br>"  + "100 years back, it was: " + date100YearsBack);


// 13. Write a program to ask the user about his age. Calculate
// and show his birth year in your browser.

// var age = parseInt(prompt("Please enter your age:"));

// var currentDate = new Date();

// var birthYear = currentDate.getFullYear() - age;

// document.write("Your Age is: " + age + "<br>");

// document.write("Your birth year is: " + birthYear);


// 14. Write a program to generate your K-Electric bill in your
// browser. All the amounts should be rounded off to 2
// decimal places. Display the following fields:
// a. Customer Name
// b. Current Month
// c. Number of units
// d. Charges per unit
// e. Net Amount Payable (within Due Date)
// f. Late Payment Surcharge
// g. Gross Amount Payable (after Due Date)
// Where,

// Net Amount Payable (within Due Date) = Number of units * Charges per unit
// & Gross Amount Payable (after Due Date) = Net Amount + Late Payment Surcharge

// document.write("<h1> K-Electric Bill </h1>");

// var customerName = "ABC Customer";

// var currentMonth = "July";

// var numberOfUnits = 250;

// var chargesPerUnit = 12.50;

// var netAmountPayable = numberOfUnits * chargesPerUnit;

// var latePaymentSurcharge = 250;

// var grossAmountPayable = netAmountPayable + latePaymentSurcharge;

// document.write("<table>");

// document.write("<tr><td>Customer Name:</td><td>" + customerName + "</td></tr>");

// document.write("<tr><td>Current Month:</td><td>" + currentMonth + "</td></tr>");

// document.write("<tr><td>Number of Units:</td><td>" + numberOfUnits + "</td></tr>");

// document.write("<tr><td>Charges per Unit:</td><td>" + chargesPerUnit.toFixed(2) + "</td></tr>");

// document.write("<tr><td>Net Amount Payable (within Due Date):</td><td>" + netAmountPayable.toFixed(2) + "</td></tr>");

// document.write("<tr><td>Late Payment Surcharge:</td><td>" + latePaymentSurcharge + "</td></tr>");

// document.write("<tr><td>Gross Amount Payable (after Due Date):</td><td>" + grossAmountPayable.toFixed(2) + "</td></tr>");
