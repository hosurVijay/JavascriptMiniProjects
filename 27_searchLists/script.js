const searchInput = document.querySelector("#searchbox");
const searchButton = document.querySelector(".searchBtn");
const ulBox = document.querySelector(".suggestion")


const items = [
    // Food Items
    "Bread", "Milk", "Eggs", "Butter", "Cheese", "Yogurt", "Rice", "Pasta",
    "Cereal", "Coffee", "Tea", "Sugar", "Salt", "Pepper", "Olive Oil", "Chicken",
    "Beef", "Pork", "Fish", "Tofu", "Potatoes", "Tomatoes", "Onions", "Garlic",
    "Carrots", "Lettuce", "Apples", "Bananas", "Oranges", "Grapes", "Strawberries",
    "Blueberries", "Oats", "Honey", "Jam", "Peanut Butter", "Chocolate", "Ice Cream",
    "Juice", "Soda",

    // Clothing Items
    "T-shirt", "Jeans", "Sweater", "Jacket", "Coat", "Hoodie", "Shorts", "Dress",
    "Skirt", "Blouse", "Shirt", "Socks", "Underwear", "Scarf", "Hat", "Gloves",
    "Sneakers", "Boots", "Sandals", "Flip-flops", "Pajamas", "Belt", "Suit", "Tie",
    "Swimsuit", "Sweatpants", "Leggings", "Jumpsuit", "Cardigan", "Raincoat",

    // Accessories
    "Watch", "Sunglasses", "Backpack", "Handbag", "Wallet", "Umbrella", "Keychain",
    "Bracelet", "Necklace", "Ring", "Earrings", "Scarf", "Cap", "Hairband", "Lip Balm",
    "Perfume", "Sunscreen", "Makeup", "Hairbrush", "Toothbrush", "Toothpaste", "Deodorant",
    "Shampoo", "Conditioner", "Body Lotion", "Hand Sanitizer", "Nail Clippers", "Razor",
    "Face Wash", "Mirror",

    // Miscellaneous Daily Essentials
    "Pen", "Notebook", "Water Bottle", "Coffee Mug", "Towel", "Pillow", "Blanket",
    "Phone Charger", "Headphones", "Laptop", "Desk Lamp", "Laundry Detergent", "Dish Soap",
    "Toilet Paper", "Trash Bags", "Paper Towels", "Broom", "Mop", "Vacuum Cleaner"
];


function searchSuggestion(suggest){
    ulBox.innerHTML = "";

    if(!suggest) return;

    const suggestionsToUser = items.filter(item=>
        item.toLocaleLowerCase().includes(suggest.toLocaleLowerCase())
    );

    
    suggestionsToUser.forEach(product=>{
        const liBox = document.createElement("li");
        liBox.textContent = product;
        ulBox.appendChild(liBox);
    })
        
   

}


searchInput.addEventListener("input", (e)=>{
    const suggest = e.target.value;
    searchSuggestion(suggest)
})