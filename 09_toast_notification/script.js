const allbuttons = document.querySelectorAll("button");
allbuttons.forEach(function(event){
    event.addEventListener("click", ()=>{
        showToast(event.innerHTML);
    });
});

let toastBox = document.querySelector(".toastbox");
let successMessage = '<i class="fa-solid fa-circle-check"></i> Successfully submitted'
let errorMessage = '<i class="fa-solid fa-xmark"></i> Error!!'
let invalidMessage = '<i class="fa-solid fa-exclamation"></i> Invalid Input!!, Check Again'


function showToast(msg){
    let toast = document.createElement("div");
    toast.classList.add("toast");
    if(msg == "Success"){
        toast.innerHTML = successMessage;
    }else if(msg == "Error"){
        toast.classList.add("error")
        toast.innerHTML = errorMessage;
    }else{
        toast.classList.add("invalid")
        toast.innerHTML = invalidMessage;
    }
    toastBox.appendChild(toast);
    
    setTimeout(()=>{
        toast.remove()
    },3000)
}




