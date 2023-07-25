const addButton = document.querySelector(".add__button");

let array = [];

addButton.addEventListener("click", addTaskToLS);
const task = document.querySelector("#task");
function addTaskToLS() {
  array.push({ label: task.value, isChecked: false });
  const div = document.createElement("div");
  const tasks = document.querySelector(".tasks");
  div.classList.add("item");

  const addTask = `
  <label class='label' for="${array.length}">${task.value}</label>
  <input class='input' type="checkbox" id="${array.length}">
  `;
  tasks.appendChild(div);
  div.innerHTML = addTask;
  const taskString = JSON.stringify(array);
  window.localStorage.setItem("array", taskString);

  task.value = "";
}
function getInfo() {
  const arrayString = window.localStorage.getItem("array");
  const arrayParsed = JSON.parse(arrayString);

  arrayParsed.forEach((el, index) => {
    const div = document.createElement("div");
    div.classList.add("item");
    const tasks = document.querySelector(".tasks");
    const addTask = `
      <label class='label' for="${index + 1}">${el.label}</label>
      <input class='input' type="checkbox" id="${index + 1}">
        `;
    tasks.appendChild(div);
    div.innerHTML = addTask;
    array.push(el);
  });
}
getInfo();

let checkboxes = document.querySelectorAll(".input");

// checkboxes.forEach(function (checkbox) {
//   checkboxes.addEventListener("change", function () {
//     if (checkbox.checked) {
//         array[]
//     }
//   });
// });
