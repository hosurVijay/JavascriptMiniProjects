const addButton = document.querySelector('button');
const inputBox = document.querySelector('input');
const wallet = document.querySelector(".wallet");
const totalDueAmt = document.querySelectorAll('.lists p');
let total = 0;

addButton.addEventListener('click', function(){
    addItem();
    inputBox.value = "";
}, false);

function addItem(){
    if(inputBox.value === '' ||  inputBox.value == 0){
        alert("Sum Cannot be Empty Or Zero!!");
    } else {
        const div = document.createElement('div');
        wallet.appendChild(div);
        div.classList.add('lists');

        const img = document.createElement('img');
        const rupee = document.createElement('p');
        const note = document.createElement('span');
        const deleteIcon = document.createElement("img");
        deleteIcon.id = "delete"
        deleteIcon.src = "square_14034319 (1).png"
        const value =  rupee.innerHTML = parseInt(inputBox.value);
        total = total+value

        div.appendChild(img);
        div.appendChild(rupee);
        div.appendChild(note);
        div.appendChild(deleteIcon)
        
        img.src = "shape_16001361.png";
        console.log(div)
        note.innerHTML = "Add Note";

        let isEditable = true;

        note.addEventListener("click", function(){
            if (isEditable) {
                note.setAttribute("contenteditable", "true");
                note.innerHTML = " ";
                isEditable = false;
            }
        });

        const editImg = document.createElement("img");
        note.addEventListener("keydown", function(e){
            if (e.key === "Enter") {
                e.preventDefault();
                note.contentEditable = "false";
                note.blur();
                note.style.border = "none";
                isEditable = false;
                note.appendChild(editImg);
                editImg.src = "file-edit.png";
                editImg.style.visibility = "visible";
                note.style.cursor = "disabled"

            }
        });
        

        img.addEventListener("click", function(e){
            if(img.src.includes("shape_16001361.png")){
                img.src = "check.png";
                div.classList.add("checked");
                isEditable = false;
            }else{
                img.src = "shape_16001361.png";
                div.classList.remove("checked")
            }
        })

        function displayDue(){
                const totalDue = document.querySelector(".display p");
                totalDue.textContent = total.toFixed(2);
                totalDue.style.color = "red";
                
    }           
    displayDue();

        editImg.addEventListener("click", function(){
            isEditable = true;
            note.style.border = "2px solid White";
        },false)

        deleteIcon.addEventListener("click", function(){
            div.remove()
            function updateDueAmount(){
                console.log(rupee.textContent)
                total = total - parseInt(rupee.textContent)
            }
            updateDueAmount();
            displayDue()
        },false) 
}
}
