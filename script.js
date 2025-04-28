const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTask');
const taskList = document.getElementById('tasks');

function createTaskElement(taskText) {
  const li = document.createElement('li');
  li.className = 'task-item';

  const span = document.createElement('span');
  span.className = 'task-text';
  span.textContent = taskText;

  const actions = document.createElement('div');
  actions.className = 'task-actions';

  const doneBtn = document.createElement('button');
  doneBtn.innerHTML = '✔️';
  doneBtn.className = 'done-btn';
  doneBtn.title = 'Mark as done';
  doneBtn.onclick = () => span.classList.toggle('done');

  const deleteBtn = document.createElement('button');
  deleteBtn.innerHTML = '🗑️';
  deleteBtn.className = 'delete-btn';
  deleteBtn.title = 'Delete';
  deleteBtn.onclick = () => li.remove();

  actions.appendChild(doneBtn);
  actions.appendChild(deleteBtn);

  li.appendChild(span);
  li.appendChild(actions);

  return li;
}

function addTask() {
  const text = taskInput.value.trim();
  if (text !== '') {
    const task = createTaskElement(text);
    taskList.appendChild(task);
    taskInput.value = '';
    taskInput.focus();
  }
}

addTaskBtn.addEventListener('click', addTask);
taskInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') addTask();
});