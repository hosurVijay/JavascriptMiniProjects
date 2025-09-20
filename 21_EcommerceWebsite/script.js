document.addEventListener("DOMContentLoaded", ()=>{
    const productsContainer = document.querySelector(".product");
    const cartContainer = document.querySelector(".cart");
    const totalDisplay = document.querySelector('.total-sum');
    const checkOutButton = document.querySelector(".checkout-btn")
    
    products = [
        {id: 1, productName:"product:1", price: 12.99},
        {id: 2, productName:"product:2", price: 19.99},
        {id: 3, productName:"product:3", price: 99.99},
        {id: 4, productName:"product:4", price: 89.99},
    ]

    cart = JSON.parse(localStorage.getItem('cartItems'))||[];

    products.forEach(product =>{
        const div = document.createElement("div")
        div.classList.add('product-list');
        div.innerHTML = `
            <P>${product.productName}-$${product.price} </p> 
            <button data-id = ${product.id}>Add Item</button>
        `
        productsContainer.appendChild(div);
    });

   productsContainer.addEventListener('click', (evt)=>{

    if(evt.target.tagName === "BUTTON"){
        const productId =parseInt(evt.target.getAttribute("data-id"));
        const product = products.find(p => p.id === productId);
        addToCart(product);
        showCartItems(product);
    }
   })

   function addToCart(product){
    cart.push(product);
    }

    function showCartItems(product){
            const divCart = document.createElement("div");
            divCart.classList.add("cart-list");
            divCart.setAttribute("data-id", product.id)
    
            divCart.innerHTML = `
                <p> ${product.productName}- $${product.price}</p>
                <button data-id="${product.id}">Delete</button>  
            `

            totalDisplay.textContent = itemPrice().toFixed(2) ;

            cartContainer.appendChild(divCart);
            loadContent();

    }
    
    cartContainer.addEventListener("click", (e)=>{
        if(e.target.tagName === "BUTTON"){

                const deleteId = parseInt(e.target.getAttribute("data-id"));
                removeElement(cart, deleteId);
                
                const itemToRemove = cartContainer.querySelector(`.cart-list[data-id ="${deleteId}"]`);
                
                if(itemToRemove){
                    itemToRemove.remove()
                }

                totalDisplay.innerHTML = `$`+itemPrice().toFixed(2);
                loadContent();
            
        }
    })
cart.forEach(cartItem=>showCartItems(cartItem))

    function removeElement(arr, id){
        const index = arr.findIndex(obj => obj.id === id);

        if(index !== -1){
            arr.splice(index, 1);
        }
    }

    function itemPrice(){
        let productPrice = 0

        if(cart.length == 0){
             productPrice = 0;
        }else{
             productPrice = cart.reduce((sum, item)=>{
                return sum + item.price
            },0)
        }
        return productPrice
    }

    checkOutButton.addEventListener(('click'), ()=>{
        alert("Your order placed Successfully ")
    })

    function loadContent(){
        localStorage.setItem("cartItems", JSON.stringify(cart))
    }
})