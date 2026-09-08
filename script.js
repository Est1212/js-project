// Get the HTML elements
let taskInput = document.getElementById("taskInput");
let addButton = document.getElementById("addButton");
let taskList = document.getElementById("taskList");

// When the Add Task button is clicked
addButton.addEventListener("click", function () {

    // Get the text from the input box
    let taskText = taskInput.value;

    // Check if the input is empty
    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    // Create a new list item
    let newTask = document.createElement("li");

    // Create a checkbox
    let checkbox = document.createElement("input");

    // Make it a checkbox
    checkbox.type = "checkbox";

    // Put the task text after the checkbox
    newTask.appendChild(checkbox);
    newTask.appendChild(document.createTextNode(" " + taskText));

    // Add the task to the list
    taskList.appendChild(newTask);

    // Clear the input box
    taskInput.value = "";
});