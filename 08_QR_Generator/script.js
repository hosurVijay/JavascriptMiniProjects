const url = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example";

const generateButton = document.querySelector("button");
let imgBox = document.querySelector(".img-box");
let qrImage = document.getElementById("qrImage");
let qrText = document.getElementById("qrText");


generateButton.addEventListener("click", ()=>{
    generateQR();
    qrText.value = ""
})

function generateQR(){
    if(qrText.value.length > 0){
        qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+ qrText.value;
    
        imgBox.classList.add("show-img");

    }else{
        qrText.classList.add("error");
        setTimeout(()=>{
            qrText.classList.remove('error')
        },1000)
    }
}
