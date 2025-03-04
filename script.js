document.addEventListener("DOMContentLoaded", loadTasks);

function addTask() {
  let taskInput = document.getElementById("taskInput");
  let taskText = taskInput.value.trim();
  if (taskText === "") return;

  let li = document.createElement("li");
  li.innerHTML = `${taskText} <button onclick="removeTask(this)">Delete</button>`;
  document.getElementById("taskList").appendChild(li);

  saveTasks();
  taskInput.value = "";
}

function removeTask(button) {
  button.parentElement.remove();
  saveTasks();
}

function saveTasks() {
  let tasks = [];
  document.querySelectorAll("#taskList li").forEach((li) => {
    tasks.push(li.textContent.replace("Delete", "").trim());
  });
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.forEach((task) => {
    let li = document.createElement("li");
    li.innerHTML = `${task} <button onclick="removeTask(this)">Delete</button>`;
    document.getElementById("taskList").appendChild(li);
  });
}
