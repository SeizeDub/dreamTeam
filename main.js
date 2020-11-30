const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');


// functions

function createTask(taskContent) {
    // crer un li
    let task = document.createElement('li');
    // ajouter le texte dans le li
    task.textContent = taskContent;
    // creer un bouton
    let deleteButton = document.createElement('button');
    //ajouter la classe au bouton
    deleteButton.classList.add('delete-button')
    //ajouter le texte du bouton
    deleteButton.textContent = 'X';
    //ajouter le bouton dans le li
    task.appendChild(deleteButton);
    // mettre le li dans le ul
    taskList.appendChild(task);
    //vider le formulaire
    taskInput.value = null;
}

function deleteTask(task) {
    task.remove();
}

//event listeners
document.onclick = (event) => {
    if (event.target.classList.contains('delete-button')) deleteTask(event.target.parentNode);
}

document.onsubmit = (event) => {
    event.preventDefault();
    if (taskInput.value) createTask(taskInput.value);
    
}