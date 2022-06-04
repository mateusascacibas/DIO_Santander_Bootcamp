
var task = [];

function addTask(){
    var taskText = document.querySelector("#taskText");
   if(taskText.value != ""){
    task.push(taskText.value);
    showTasks();
   }
}

function showTasks(){
    var i = 1;
    var texto = "";
    while(i <= task.length){
        var taskText = task[i];
        texto += `<input type=checkbox name = "test">` + "Task: " + i + " - " + task[i-1] + "<br>";
        i = i + 1;
    }
    document.getElementById("task").innerHTML = texto;
    document.getElementById("taskText").value = "";
}