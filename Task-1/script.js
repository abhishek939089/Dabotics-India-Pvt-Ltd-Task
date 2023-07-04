const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTaskButton');
const taskList = document.getElementById('taskList');

addTaskButton.addEventListener('click', addTask);
taskList.addEventListener('click', handleTaskActions);

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === '') {
    return;
  }

  const taskItem = document.createElement('li');
  taskItem.textContent = taskText;

  const actionsContainer = document.createElement('div');
  actionsContainer.classList.add('task-actions');

  const completeButton = document.createElement('button');
  completeButton.textContent = 'Complete';
  completeButton.classList.add('complete-button');
  actionsContainer.appendChild(completeButton);

  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.classList.add('delete-button');
  actionsContainer.appendChild(deleteButton);

  taskItem.appendChild(actionsContainer);
  taskList.appendChild(taskItem);

  taskInput.value = '';
}

function handleTaskActions(event) {
  const targetElement = event.target;

  if (targetElement.classList.contains('complete-button')) {
    const taskItem = targetElement.closest('li');
    taskItem.classList.toggle('completed');
  }

  if (targetElement.classList.contains('delete-button')) {
    const taskItem = targetElement.closest('li');
    taskList.removeChild(taskItem);
  }
}
