// task 1 


var a = 10;

document.write("Result: <br>");

document.write("The value of a is: " + a + "<br>");

document.write(".................................................<br>");

document.write("The value of ++a is: " + ++a + "<br>");

document.write("Now the value of a is: " + a + "<br>");

document.write("The value of a++ is: " + a++ + "<br>");

document.write("Now the value of a is: " + a + "<br>");

document.write("The value of --a is: " + --a + "<br>");

document.write("Now the value of a is: " + a + "<br>");

document.write("The value of a-- is: " + a-- + "<br>");

document.write("Now the value of a is: " + a + "<br>");

// task 2

var a = 2, b = 1;

var result = --a - --b + ++b + b--;

document.write("a is: " + a + "<br>");

document.write("b is: " + b + "<br>");

document.write("result is: " + result + "<br>");

// task 3

var name = prompt("Enter your name: ");

alert("Hello " + name);

// task 5

var num = prompt("Enter a number: ");

if (num == "") {
    num = 5;
}

for (var i = 1; i <= 10; i++) {
    document.write(num + " x " + i + " = " + num * i + "<br>");
};

// task 6


var sub1 = prompt("Enter first subject name: ");

var sub2 = prompt("Enter second subject name: ");

var sub3 = prompt("Enter third subject name: ");

var totalMarks = 100;

var sub1Marks = prompt("Enter first subject marks: ");

var sub2Marks = prompt("Enter second subject marks: ");

var sub3Marks = prompt("Enter third subject marks: ");

var total = sub1Marks + sub2Marks + sub3Marks;

var percentage = (total / 300) * 100;

document.write("<h1>Subject Total Marks Obtained Marks Percentage</h1>");

document.write("<table>");

document.write("<tr>");

document.write("<th>Subject</th>");

document.write("<th>Total Marks</th>");

document.write("<th>Obtained Marks</th>");

document.write("<th>Percentage</th>");

document.write("</tr>");

document.write("<tr>");

document.write("<td>" + sub1 + "</td>");

document.write("<td>" + totalMarks + "</td>");

document.write("<td>" + sub1Marks + "</td>");

document.write("<td>" + percentage + "</td>");

document.write("</tr>");

document.write("<tr>");

document.write("<td>" + sub2 + "</td>");

document.write("<td>" + totalMarks + "</td>");

document.write("<td>" + sub2Marks + "</td>");

document.write("<td>" + percentage + "</td>");

document.write("</tr>");

document.write("<tr>");

document.write("<td>" + sub3 + "</td>");

document.write("<td>" + totalMarks + "</td>");

document.write("<td>" + sub3Marks + "</td>");

document.write("<td>" + percentage + "</td>");

document.write("</tr>");

document.write("<tr>");

document.write("<td>Total</td>");

document.write("<td>" + totalMarks + "</td>");

document.write("<td>" + total + "</td>");

document.write("<td>" + percentage + "</td>");

document.write("</tr>");

document.write("</table>");

