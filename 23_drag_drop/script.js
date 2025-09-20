let lists = document.querySelectorAll(".list");
// console.log(lists)

const rightBox = document.getElementById("right");
const leftBox = document.getElementById("left");

lists.forEach((list)=>{
    list.addEventListener('dragstart', (evt)=>{
        let selected = evt.target;
        
        rightBox.addEventListener("dragover", (event)=>{
            event.preventDefault();
        })

        rightBox.addEventListener("drop", (e)=>{
            rightBox.appendChild(selected);
            selected = null;
        });
        leftBox.addEventListener("dragover", (event)=>{
            event.preventDefault();
        })

        leftBox.addEventListener("drop", (e)=>{
            leftBox.appendChild(selected);
            selected = null;
        });
    })
})