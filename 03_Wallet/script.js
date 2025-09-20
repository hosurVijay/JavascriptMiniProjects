const list = document.querySelectorAll('.lists p');
// console.log(list);
const addButton = document.querySelector('button');
// console.log(addButton);
const inputBox = document.querySelector('input');
// console.log(inputBox)
const wallet = document.querySelector(".wallet");

const noteBox = document.querySelectorAll(".lists span");
// console.log(note)

addButton.addEventListener('click', function(){
    addItem()
}, false)

function addItem(){
    if(inputBox.value === ''){
        alert("Sum Cannot be Empty!!");
    }else{
        const  div = document.createElement('div');
        wallet.appendChild(div);
        div.classList.add('lists')
        const img = document.createElement('img');
        const rupee = document.createElement('p');
        const note = document.createElement('span');
        
        img.src = "shape_16001361.png"
        rupee.innerHTML = inputBox.value
        div.appendChild(img);
        div.appendChild(rupee);
        div.appendChild(note);
        note.innerHTML = "&#x002B";
        let isNotClicked = true; 
        // console.log(noteBox);
        if(isNotClicked){
            note.addEventListener("click", (clearText)=>{
                // clearText.innerHTML =" "
            note.setAttribute("contenteditable", "true");
            note.innerHTML = " "
            isNotClicked = "false";
            console.log(isNotClicked);
            });
        }
            note.addEventListener("keydown", (disable)=>{
                if(disable.key == "Enter"){
                    disable.preventDefault();
                    note.contentEditable = "false";
                    note.blur();
                    note.style.border = "none";
                    isNotClicked = false
                    console.log(isNotClicked)
                }
            });
        
        
    }
}





































