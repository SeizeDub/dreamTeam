const taskButton = document.getElementById('task-button');
const taskList = document.getElementById('task-list');

// functions

function createTask(taskContent) {
    // crer un li
    let task = document.createElement('li');
    // mettre les données dans le li
    task.textContent = taskContent;
    // mettre le li dans le ul
    taskList.appendChild(task);
}

//event listeners
taskButton.onclick = () => {
    let taskContent = prompt('Nouvelle tache');
    createTask(taskContent);
}