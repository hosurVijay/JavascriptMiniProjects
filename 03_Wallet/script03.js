const addButton = document.querySelector('button');
const inputBox = document.querySelector('input');
const wallet = document.querySelector(".wallet");
let total = 0;

// Load existing data from localStorage when the page loads
document.addEventListener('DOMContentLoaded', function() {
    loadStoredItems();
}, false);

// Add new item when button is clicked
addButton.addEventListener('click', function(){
    addItem();
    inputBox.value = "";
}, false);

// Function to add item
function addItem(){
    if(inputBox.value === '' || inputBox.value == 0){
        alert("Sum Cannot be Empty Or Zero!!");
    } else {
        const value = parseInt(inputBox.value);
        total += value;
        
        const newItem = {
            value: value,
            note: "Add Note",
            isChecked: false
        };

        // Save item to localStorage
        saveItemToStorage(newItem);
        
        createItemElement(newItem);
        updateDisplayDue();
    }
}

// Function to create and append item to the wallet
function createItemElement(item) {
    const div = document.createElement('div');
    wallet.appendChild(div);
    div.classList.add('lists');

    const img = document.createElement('img');
    const rupee = document.createElement('p');
    const note = document.createElement('span');
    const deleteIcon = document.createElement("img");
    
    // Set rupee value and append elements
    rupee.innerHTML = item.value;
    div.appendChild(img);
    div.appendChild(rupee);
    div.appendChild(note);
    div.appendChild(deleteIcon);

    // Set image and delete icon
    img.src = item.isChecked ? "check.png" : "shape_16001361.png";
    deleteIcon.id = "delete";
    deleteIcon.src = "square_14034319 (1).png";
    note.innerHTML = item.note;

    let isEditable = true;

    // Edit note functionality
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
            note.style.cursor = "disabled";
            
            updateStorage();
        }
    });

    // Toggle item checked status
    img.addEventListener("click", function(e){
        if(img.src.includes("shape_16001361.png")){
            img.src = "check.png";
            div.classList.add("checked");
        } else {
            img.src = "shape_16001361.png";
            div.classList.remove("checked");
        }
        updateStorage();
    });

    // Delete functionality
    deleteIcon.addEventListener("click", function(){
        div.remove();
        total -= item.value;
        updateStorage();
        updateDisplayDue();
    }, false);
}

// Function to display the total due amount
function updateDisplayDue() {
    const totalDue = document.querySelector(".display p");
    totalDue.textContent = total.toFixed(2);
    totalDue.style.color = "red";
}

// Function to save the item to localStorage
function saveItemToStorage(item) {
    let items = JSON.parse(localStorage.getItem('walletItems')) || [];
    items.push(item);
    localStorage.setItem('walletItems', JSON.stringify(items));
}

// Function to update localStorage when changes are made
function updateStorage() {
    let items = [];
    document.querySelectorAll('.lists').forEach(div => {
        const rupee = div.querySelector('p').innerHTML;
        const note = div.querySelector('span').innerHTML;
        const isChecked = div.querySelector('img').src.includes("check.png");

        items.push({
            value: parseInt(rupee),
            note: note,
            isChecked: isChecked
        });
    });
    localStorage.setItem('walletItems', JSON.stringify(items));
}

// Function to load items from localStorage on page load
function loadStoredItems() {
    const storedItems = JSON.parse(localStorage.getItem('walletItems')) || [];
    storedItems.forEach(item => {
        total += item.value;
        createItemElement(item);
    });
    updateDisplayDue();
}
