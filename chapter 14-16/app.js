// // 1. Declare an empty array using JS literal notation to store
// // student names in future.

// var students = [];

// // 2. Declare an empty array using JS object notation to store
// // student names in future.

// var students = new Array();

// // 3. Declare and initialize a strings array.

// var students = ["Areeba", "Kinza", "Mariyam", "Ayesha"];

// // 4. Declare and initialize a numbers array.

// var numbers = [1, 2, 3, 4, 5];

// // 5. Declare and initialize a boolean array.

// var boolean = [true, false];

// // 6. Declare and initialize a mixed array.

// var mixed = [1, "Areeba", true, "Maheen"];

// // 7. Declare and Initialize an array and store available
// // education qualifications in Pakistan (e.g. SSC, HSC, BCS,
// // BS, BCOM, MS, M. Phil., PhD). Show the listed
// // qualifications in your browser like:

// var qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];

// document.write("<h1>Qualifications</h1>");

// var count = 0;

// var i = 0;

// document.write(++count + ") " + qualifications[i++] + "<br>");

// document.write(++count + ") " + qualifications[i++] + "<br>");

// document.write(++count + ") " + qualifications[i++] + "<br>");

// document.write(++count + ") " + qualifications[i++] + "<br>");

// document.write(++count + ") " + qualifications[i++] + "<br>");

// document.write(++count + ") " + qualifications[i++] + "<br>");

// document.write(++count + ") " + qualifications[i++] + "<br>");

// document.write(++count + ") " + qualifications[i++] + "<br>");



// // 8. Write a program to store 3 student names in an array.Take
// // another array to store score of these three students.
// // Assume that total marks are 500 for each student, display
// // the scores & percentages of students like:

// var students = ["Areeba", "Kinza", "Mariyam"];
// var scores = [320, 230, 480];
// var total = 500;

// var percentage1 = (scores/total)*100;

// var percentage2 = (scores[1]/total)*100;

// var percentage3 = (scores[2]/total)*100;

// document.write("Score of " + students[0] + " is " + scores[0] + ". Percentage: " + percentage1 + "%" + "<br>");

// document.write("Score of " + students[1] + " is " + scores[1] + ". Percentage: " + percentage2 + "%" + "<br>");

// document.write("Score of " + students[2] + " is " + scores[2] + ". Percentage: " + percentage3 + "%" + "<br>");





// // 9. Initialize an array with color names. Display the array
// // elements in your browser.
// // a. Ask the user what color he/she wants to add to the
// // beginning & add that color to the beginning of the array.
// // Display the updated array in your browser.
// // b. Ask the user what color he/she wants to add to the end
// // & add that color to the end of the array. Display the
// // updated array in your browser.
// // c. Add two more color to the beginning of the array.
// // Display the updated array in your browser.
// // d. Delete the first color in the array. Display the updated
// // array in your browser.
// // e. Delete the last color in the array. Display the updated
// // array in your browser.
// // f. Ask the user at which index he/she wants to add a color
// // & color name. Then add the color to desired
// // position/index. . Display the updated array in your
// // browser.
// // g. Ask the user at which index he/she wants to delete
// // color(s) & how many colors he/she wants to delete. Then
// // remove the same number of color(s) from user-defined
// // position/index. . Display the updated array in your
// // browser.


// var colors = ["Red", "Green", "Blue"];

// document.write(colors + "<br>");

// var color = prompt("What color do you want to add to the beginning?");

// colors.unshift(color);

// document.write(colors + "<br>");

// var color = prompt("What color do you want to add to the end?");

// colors.push(color);

// document.write(colors + "<br>");

// colors.unshift("Yellow", "Black");

// document.write(colors + "<br>");

// colors.shift();

// document.write(colors + "<br>");

// colors.pop();

// document.write(colors + "<br>");

// var index = +prompt("At which index do you want to add a color?");

// var color = prompt("What color do you want to add?");

// colors.splice(index, 0, color);

// document.write(colors + "<br>");

// var index = +prompt("At which index do you want to delete color(s)?");

// var number = +prompt("How many colors do you want to delete?");

// colors.splice(index, number);

// document.write(colors + "<br>");


// // 10. Write a program to store student scores in an array &
// // sort the array in ascending order using Array’s sort
// // method.

// var scores = [320, 230, 480, 120];

// document.write("Scores of Students: " + scores + "<br>");

// var studentScores= scores.sort((a,b) => (a-b));

// document.write("Ordered Scores of Students: " + studentScores + "<br>");

// // 11. Write a program to initialize an array with city names.
// // Copy 3 array elements from cities array to selectedCities
// // array.


// var cities = ["Karachi","Lahore","Islamabad","Quetta","Faisalabad"];

// var selectedCities = cities.slice(2, 5);

// document.write("Cities List: " + cities + "<br>");

// document.write("Selected Cities List: " + selectedCities + "<br>");


// // 12. Write a program to create a single string from the
// // below mentioned array:
// // var arr = [“This ”, “ is ”, “ my ”, “ cat”];
// // (Use array’s join method)

// var arr = ["This", "is", "my", "cat"];

// document.write("Array: " + arr + "<br>");

// var string = arr.join(" ");

// document.write("String: " + string + "<br>");

// // 13. Create a new array. Store values one by one in such a way
// // that you can access the values in the order in which they
// // were stored. (FIFO-First In First Out)

// var devices = ["Keyboard","Mouse","Printer","Monitor"];

// document.write("Devices: " + devices  + "<br>" );

// var a = devices.shift();

// document.write("Out: " + a + "<br>");

//  a = devices.shift();

// document.write("Out: " + a + "<br>");

// a = devices.shift();

// document.write("Out: " + a + "<br>");

// a = devices.shift();

// document.write("Out: " + a + "<br>");



// // 14. Create a new array. Store values one by one in such a way

// // that you can access the values in reverse order. (Last In-
// // First Out)


// var fruits = ["apple", "mango", "oranger", "kiwi"];

// document.write("Fruits: " + fruits + "<br>");

// fruits.reverse();

// document.write("Reverse Fruits: " + fruits + "<br>");

// // 15. Write a program to store phone manufacturers (Apple,
// //     Samsung, Motorola, Nokia, Sony & Haier) in an array.
// //     Display the following dropdown/select menu in your
// //     browser using document.write() method:


// var manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

// var i = 0;

// document.write("<select>");

// document.write("<option>" + manufacturers[i++] + "</option>");

// document.write("<option>" + manufacturers[i++] + "</option>");

// document.write("<option>" + manufacturers[i++] + "</option>");

// document.write("<option>" + manufacturers[i++] + "</option>");

// document.write("<option>" + manufacturers[i++] + "</option>");

// document.write("<option>" + manufacturers[i++] + "</option>");

// document.write("</select>");


