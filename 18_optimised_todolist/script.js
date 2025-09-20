const inputBox = document.querySelector("#input-field");
const addTaskButton = document.querySelector("#input-button");
const card = document.querySelector(".card")
let tasks = [];
addTaskButton.addEventListener('click', ()=>{
    if(inputBox.value == " " || !isNaN(inputBox.value)){
        alert("Task Cant be Empty");
        return;
    }else{
    const newTask = {
        id : Date.now(), 
        task : inputBox.value,
        status : false,
    }
    // Do some work;
  
    tasks.push(newTask);
    console.log(tasks);
    displayTaskOnWeb();
    loadContent();
}
},false);

function displayTaskOnWeb(){
    const taskContainer = document.createElement("div");
    const list = document.createElement("li");
    const deleteButton = document.createElement('button')
    taskContainer.classList.add("task-container") 
    deleteButton.type = "button";
    deleteButton.textContent = "Delete"
    list.textContent = inputBox.value
    taskContainer.appendChild(list);
    taskContainer.appendChild(deleteButton);
    card.appendChild(taskContainer)
    console.log(taskContainer);
      inputBox.value = "";
      loadContent()



      list.querySelector('button').addEventListener('click', (e)=>{
        e.stopImmediatePropagation();
        tasks = tasks.filter(t=>t.id !== tasks.id);
        list.remove();
        loadContent();
})

function loadContent(){
    localStorage.setItem("task", JSON.stringify(tasks));

}

}
