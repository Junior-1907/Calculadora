const tasks = [];
const taskList = document.getElementById("tasks");
var taskId;
var divs;
function addTask(){
    const taskValue = document.getElementById("list-input").value;
    tasks.push(taskValue);
    taskId = taskValue;
    taskList.innerHTML += `
        <div id="${taskId}">
        <input type="checkbox" id="${taskId}1" class="task-input">
        <label for="${taskId}">${taskValue}</label>
        <button class="task-btn" onclick="removeTask(${taskId})"> x </button>
        </div>
    `
    divs = document.getElementById(taskId);
}



function removeTask(taskId){
    tasks.shift(taskId);
    divs.innerHTML = "";
    divs = "";
}