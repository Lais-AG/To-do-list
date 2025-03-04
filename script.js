let defaulTheme = document.querySelector(".default-theme");

let body = document.body;
let title = document.querySelector(".task-title");
let backgroundButton = document.querySelector(".task-button");

defaulTheme.addEventListener("click", function(){
   body.style.background = "linear-gradient(100deg, #575656, #062e3f)";
   title.style.color = "#ffdfdb";
   backgroundButton.style.backgroundColor = "#ffdfdb";
   backgroundButton.style.color = "#062e3f";
});

let lightTheme = document.querySelector(".light-theme");

lightTheme.addEventListener("click", function(){
    body.style.background = "linear-gradient(100deg, #FAFAFA, #ffffff)";
    title.style.color = "#1f1e1e";
    backgroundButton.style.backgroundColor = "#1f1e1e";
    backgroundButton.style.color = " #FAFAFA";
})

let darkTheme = document.querySelector(".dark-theme");

darkTheme.addEventListener("click", function(){
    body.style.background = "linear-gradient(100deg, #001214,#1d1d1d)";
    title.style.color = "#F8F8FF";
    backgroundButton.style.backgroundColor = "#1C1C1C";
    backgroundButton.style.color = "#F8F8FF";
    backgroundButton.style.border = "1px solid #F8F8FF";
});


//sempre que estiver usando caixa de texto, uso o .VALUE
backgroundButton.addEventListener("click", function(){
    let taskInput = document.querySelector(".task-input").value;
    document.querySelector(".task-list").innerHTML = taskInput;
})



