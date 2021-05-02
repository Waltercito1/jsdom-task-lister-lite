document.addEventListener("DOMContentLoaded", () => {

const taskForm = document.getElementById("create-task-form");
const taskInputField = document.getElementById("new-task-description");
const tasksList = document.getElementById("tasks");
const dropdown = document.getElementById('importance-dropdown');

const setStyle = importanceValue => {
  let color;
  if (importanceValue === "High") {
    color = "red";
  } else if (importanceValue === "Medium") {
    color = "orange";
  } else if (importanceValue === "Low") {
    color = "green";
  }
  return color;
}

const addToList = (inputValue, importanceValue) => {
  let li = document.createElement("li");
  li.innerHTML = inputValue;
  const color = setStyle(importanceValue);
  let deleteBtn = document.createElement("button");
  deleteBtn.innerHTML = "X";
  deleteBtn.className = "delete-btn";
  
  li.appendChild(deleteBtn);
  tasksList.appendChild(li);
  li.style.color = color;
  taskForm.reset();
}


document.addEventListener('submit', (e) => {
  e.preventDefault();
  let userInput = taskInputField.value;
  let importanceValue = dropdown.value;
  addToList(userInput, importanceValue);
})

});

document.addEventListener("click", (e) => {
  if (e.target.className === "delete-btn") {
    let parentNode = e.target.parentElement;
    parentNode.remove();
  }
})