let defaulTheme = document.querySelector(".default-theme");

let body = document.body;
let title = document.querySelector(".task-title");
let inputAdd = document.querySelector(".task-input");
let buttonAdd = document.querySelector(".task-button");
let taskList = document.querySelector(".task-list");

defaulTheme.addEventListener("click", function(){
   body.style.background = "linear-gradient(100deg, #575656, #062e3f)";
   title.style.color = "#ffdfdb";
   buttonAdd.style.backgroundColor = "#ffdfdb";
   buttonAdd.style.color = "#062e3f";
});

let lightTheme = document.querySelector(".light-theme");

lightTheme.addEventListener("click", function(){
    body.style.background = "linear-gradient(100deg, #FAFAFA, #ffffff)";
    title.style.color = "#1f1e1e";
    buttonAdd.style.backgroundColor = "#1f1e1e";
    buttonAdd.style.color = " #FAFAFA";
})

let darkTheme = document.querySelector(".dark-theme");

darkTheme.addEventListener("click", function(){
    body.style.background = "linear-gradient(100deg, #001214,#1d1d1d)";
    title.style.color = "#F8F8FF";
    buttonAdd.style.backgroundColor = "#1C1C1C";
    buttonAdd.style.color = "#F8F8FF";
    buttonAdd.style.border = "1px solid #F8F8FF";
});

function createTaskItem(taskText){
  let itemList = document.createElement("li");
  itemList.textContent = taskText;

  //criaçao botao de check in
  let buttonCheck = document.createElement("button");
  buttonCheck.textContent = "✔";
  buttonCheck.style.marginLeft = "10px";
  buttonCheck.addEventListener("click", function(){
    itemList.classList.toggle("checked");
  })

  let deleteButton = document.createElement("button");
  deleteButton.textContent = "Remover";
  deleteButton.style.marginLeft = "10px";
  deleteButton.addEventListener("click", function(){
    itemList.remove();
    removeTaskStorage(taskText);
  })
  itemList.appendChild(buttonCheck);
  itemList.appendChild(deleteButton);
  return itemList
}

buttonAdd.addEventListener("click", function(){
   let taskText = inputAdd.value.trim();
  
   if(taskText !== " "){
   //chamar a funçao aqui
   let itemList = createTaskItem(taskText);
    taskList.appendChild(itemList);

    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push(taskText)
    localStorage.setItem("tasks", JSON.stringify(tasks));
    inputAdd.value = " ";
   }
})


window.addEventListener('load', function(){
    let savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];

    savedTasks.forEach((task)=>{
        let li = document.createElement("li");
        li.textContent = task;
        taskList.appendChild(li);

        })
})



//funçao para remover o item do localStorage
function removeTaskStorage(taskText){
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks = tasks.filter(task => task !== taskText);
    localStorage.setItem("tasks", JSON.stringify(tasks));
}