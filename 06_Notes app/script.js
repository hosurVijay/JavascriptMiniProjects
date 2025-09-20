const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");

let notes = document.querySelectorAll('.input-box');


createBtn.addEventListener('click', ()=>{
    let inputBox = document.createElement('p');
    let img = document.createElement("img");
    inputBox.className = "input-box";
    inputBox.setAttribute('contenteditable', "true");
    img.src = "delete_6861362.png";
    notesContainer.appendChild(inputBox).appendChild(img);

} );
notesContainer.addEventListener('click', function(event){
    if(event.target.tagName === "IMG"){
        event.target.parentElement.remove();
        updateStorage()
    }else if(event.target.tagName==="P"){
        notes = document.querySelectorAll(".input-box");
        notes.forEach(nt =>{
            nt.onkeyUp = function(){
                updateStorage();
            }
        })
    }
})

function updateStorage(){
    localStorage.setItem("notes", notesContainer.innerHTML);
}

function showNotes(){
    notesContainer.innerHTML = localStorage.getItem("notes");
}
showNotes()
