// console.log(buttonE1);
var formE1 = document.querySelector('#task-form');
var tasksToDoE1 = document.querySelector('#tasks-to-do');

var createTaskHandler = function (event) {

    event.preventDefault();
    var taskNameInput = document.querySelector("input[name = 'task-name']").value;
    // console.dir(taskNameInput);
    var taskTypeInput = document.querySelector("select[name='task-type']").value;

    // create list item
    var listItemE1 = document.createElement('li');
    listItemE1.className = 'task-item';

    // create div to hold task info and add to list item
    var taskInfoEl = document.createElement('div');
    // give it a class name
    taskInfoEl.className = 'task-info';

    // add HTML content to div
    taskInfoEl.innerHTML = "<h3 class='task-name'>" +
        taskNameInput + "</h3><spane class='task-type'>" +
        taskTypeInput + "</span>";
    listItemE1.appendChild(taskInfoEl);

    // add entire list item to list
    tasksToDoE1.appendChild(listItemE1);
    // console.log(event);
};

formE1.addEventListener('submit', createTaskHandler);