// 1. Create a signup form and display form data in your web
// page on submission.
// function detail(){
//     // Get form data
//     var name = document.getElementById("name").value;
//     var fName = document.getElementById("fName").value;
//     var email = document.getElementById("email").value;
//     var password = document.getElementById("password").value;
//     document.write("Name:" + name + "<br/>");
//     document.write("Father's Name:" + fName + "<br/>");
//     document.write("Email:" + email + "<br/>");
//     document.write("Password:" + password + "<br/>");
// }
// 2. Suppose in your webpage there is content area in which
// you have entered your item details, but user can only see
// some details on first look. When user clicks on “Read
// more” button, full detail of that particular item will be
// displayed.
// var longPara =Human behavior is a complex and multifaceted phenomenon that is influenced by a range of factors, including motivation, emotions, social influences, and cognitive processes. Our behavior is shaped by a combination of biological, psychological, and environmental factors, and can be driven by a desire for self-actualization, a need for social connection, or a response to external stimuli. Understanding human behavior is crucial for achieving success and fulfillment, as it allows us to identify patterns and habits that hold us back, and to develop strategies for overcoming obstacles and achieving our goals. By recognizing the factors that influence our behavior, we can take steps to modify our behavior, develop more positive habits, and cultivate a mindset that is conducive to success and happiness.
// function moreDetail() {
//     var content = document.getElementById("content");
//     var btn = document.getElementById("btn");
//     if (btn.innerText === "Show More") {
//         content.innerHTML += longPara;
//         btn.innerText = "Show Less";
//     } else {
//         content.innerHTML = content.innerHTML.replace(longPara, '');
//         btn.innerText = "Show More";
//     }
// }
// 3. In previous assignment you have created a tabular data
// using javascript. Let’s modify that. Create a form which
// takes student’s details and show each student detail in
// table. Each row of table must contain a delete button and
// an edit button. On click on delete button entire row should
// be deleted. On click on edit button, a hidden form will
// appear with the values of that row.
// function addStudent() {
//     var studentName = document.getElementById('stdName').value;
//     var studentAge = document.getElementById('stdAge').value;
//     var studentGrade = document.getElementById('stdGrade').value;
//     if (studentName === "" || studentAge === "" || studentGrade === "") {
//         alert("Please fill in all fields");
//         return;
//     }
//     var table = document.getElementById('studentTable').getElementsByTagName('tbody')[0];
//     var row = document.createElement('tr');
//     var nameCell = document.createElement('td');
//     var ageCell = document.createElement('td');
//     var gradeCell = document.createElement('td');
//     var deleteCell = document.createElement('td');
//     var editCell = document.createElement('td');
//     nameCell.innerText = studentName;
//     ageCell.innerText = studentAge;
//     gradeCell.innerText = studentGrade;
//     var deleteButton = document.createElement('button');
//     deleteButton.innerText = "Delete";
//     deleteButton.setAttribute('onclick', 'deleteRow(this)');
    
//     var editButton = document.createElement('button');
//     editButton.innerText = "Edit";
//     editButton.setAttribute('onclick', 'editRow(this)');
//     deleteCell.appendChild(deleteButton);
//     editCell.appendChild(editButton);
//     row.appendChild(nameCell);
//     row.appendChild(ageCell);
//     row.appendChild(gradeCell);
//     row.appendChild(deleteCell);
//     row.appendChild(editCell);
//     table.appendChild(row);
//     document.getElementById('stdName').value = "";
//     document.getElementById('stdAge').value = "";
//     document.getElementById('stdGrade').value = "";
//     alert("Student added successfully");
// }
// function deleteRow(btn) {
//     var row = btn.parentNode.parentNode;
//     row.parentNode.removeChild(row);
// }
// function editRow(btn) {
//     var row = btn.parentNode.parentNode;
//     var nameCell = row.children[0];
//     var ageCell = row.children[1];
//     var gradeCell = row.children[2];
//     var newName = prompt("Edit Name:", nameCell.innerText);
//     var newAge = prompt("Edit Age:", ageCell.innerText);
//     var newGrade = prompt("Edit Grade:", gradeCell.innerText);
//     if (newName !== null && newName !== "") {
//         nameCell.innerText = newName;
//     }
//     if (newAge !== null && newAge !== "") {
//         ageCell.innerText = newAge;
//     }
//     if (newGrade !== null && newGrade !== "") {
//         gradeCell.innerText = newGrade;
//     }
// }