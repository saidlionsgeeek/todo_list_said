let input = document.querySelector("#input_todo_two");
let addButton = document.querySelector("#button_todo_two");
let todoList = document.querySelector("#todoList");
let doingList = document.querySelector("#doingList");
let doneList = document.querySelector("#doneList");

// tab stock 
let todoTasks = [];
let doingTasks = [];
let doneTasks = [];


function addTask() {
    let task = input.value;
    if (task !== "") {
      todoTasks.push(task);
      displayTasks();
      input.value = "";
    }
  }
  
  function displayTasks() {
    todoList.innerHTML = "";
    doingList.innerHTML = "";
    doneList.innerHTML = "";
  
    for (let i = 0; i < todoTasks.length; i++) {
      let task = todoTasks[i];
      let li = document.createElement("li");
      li.innerText = task;
      let deleteIcon = document.createElement("i");
      deleteIcon.classList.add("fa-solid", "fa-trash-can");
      deleteIcon.addEventListener("click", () => {
        todoTasks.splice(i, 1);
        displayTasks();
      });
      let editIcon = document.createElement("i");
      editIcon.classList.add("fa-solid", "fa-pen-to-square");
      editIcon.addEventListener("click", () => {
        let newTask = prompt("Modifier la tâche :", task);
        if (newTask !== null && newTask !== "") {
          todoTasks[i] = newTask;
          displayTasks();
        }
      });
      let select = createSelect(["Doing", "Done"], (value) => {
        if (value === "Doing") {
          doingTasks.push(todoTasks[i]);
        } else if (value === "Done") {
          doneTasks.push(todoTasks[i]);
        }
        todoTasks.splice(i, 1);
        displayTasks();
      });
      li.appendChild(deleteIcon);
      li.appendChild(editIcon);
      li.appendChild(select);
      todoList.appendChild(li);
    }
  
    for (let i = 0; i < doingTasks.length; i++) {
      let task = doingTasks[i];
      let li = document.createElement("li");
      li.innerText = task;
      let deleteIcon = document.createElement("i");
      deleteIcon.classList.add("fa-solid", "fa-trash-can");
      deleteIcon.addEventListener("click", () => {
        doingTasks.splice(i, 1);
        displayTasks();
      });
      let editIcon = document.createElement("i");
      editIcon.classList.add("fa-solid", "fa-pen-to-square");
      editIcon.addEventListener("click", () => {
        let newTask = prompt("Modifier la tâche :", task);
        if (newTask !== null && newTask !== "") {
          doingTasks[i] = newTask;
          displayTasks();
        }
      });
      let select = createSelect(["Todo", "Done"], (value) => {
        if (value === "Todo") {
          todoTasks.push(doingTasks[i]);
        } else if (value === "Done") {
          doneTasks.push(doingTasks[i]);
        }
        doingTasks.splice(i, 1);
        displayTasks();
      });
      li.appendChild(deleteIcon);
      li.appendChild(editIcon);
      li.appendChild(select);
      doingList.appendChild(li);
    }
  
    for (let i = 0; i < doneTasks.length; i++) {
      let task = doneTasks[i];
      let li = document.createElement("li");
      li.innerText = task;
      let deleteIcon = document.createElement("i");
      deleteIcon.classList.add("fa-solid", "fa-trash-can");
      deleteIcon.addEventListener("click", () => {
        doneTasks.splice(i, 1);
        displayTasks();
      });
      let editIcon = document.createElement("i");
      editIcon.classList.add("fa-solid", "fa-pen-to-square");
      editIcon.addEventListener("click", () => {
        let newTask = prompt("Modifier la tâche :", task);
        if (newTask !== null && newTask !== "") {
          doneTasks[i] = newTask;
          displayTasks();
        }
      });
      let select = createSelect(["Todo", "Doing"], (value) => {
        if (value === "Todo") {
          todoTasks.push(doneTasks[i]);
        } else if (value === "Doing") {
          doingTasks.push(doneTasks[i]);
        }
        doneTasks.splice(i, 1);
        displayTasks();
      });
      li.appendChild(deleteIcon);
      li.appendChild(editIcon);
      li.appendChild(select);
      doneList.appendChild(li);
    }
  }
  
 
  function createSelect(options, onChange) {
    let select = document.createElement("select");
    let defaultOption = document.createElement("option");
    defaultOption.setAttribute("value", "");
    defaultOption.innerText = "Move To...";
    select.appendChild(defaultOption);
    for (let i = 0; i < options.length; i++) {
      let option = document.createElement("option");
      option.setAttribute("value", options[i]);
      option.innerText = options[i];
      select.appendChild(option);
    }
    select.addEventListener("change", () => {
      onChange(select.value);
    });
    return select;
  }
  
  addButton.addEventListener("click", addTask);
  

  
  

displayTasks();

let add_new_column = document.querySelector("#add_column");
let container = document.querySelector("#container")
add_new_column.addEventListener("click",()=>{
    let div = document.createElement("div")
    div.classList.add("column")
    container.appendChild(div)
    let h2 = document.createElement("h2");
    h2.textContent = prompt("Name your column");
    div.appendChild(h2);
})

