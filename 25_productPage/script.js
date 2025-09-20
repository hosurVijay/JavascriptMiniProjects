document.addEventListener("DOMContentLoaded", ()=>{
    const productImage = document.querySelector("#productimage");
    const btn = document.querySelectorAll(".btn");
    console.log(btn)
    
    btn[0].onclick = function(){
        productImage.src = "productImage1.jpg";

        for(bt of btn){
            bt.classList.remove("active")
        }
        this.classList.add("active")
    }
    btn[1].onclick = function(){
        productImage.src = "productImage2.jpg";

        for(bt of btn){
            bt.classList.remove("active")
        }
        this.classList.add("active")
    }
    btn[2].onclick = function(){
        productImage.src = "productImage3.jpg";

        for(bt of btn){
            bt.classList.remove("active")
        }
        this.classList.add("active")
    }
})