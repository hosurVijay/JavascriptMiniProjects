const searchForm = document.getElementById("search-form");
const searchBox = document.getElementById("search-box");
const searchResult = document.getElementById("search-result");
const showMoreButton = document.getElementById("show-more-btn");
const searchPhoto = document.getElementById("search-photos");



let page = 1;
let keyWord = ""; 
const acessesKEY = "Lny-5HGz24p-o7Jq16-FxluFLZ0PlvC1GgLMhTANZG8";

async function searchImages(){
    if(searchBox.value.trim() === "") return 0;
    else{
        keyWord = searchBox.value.trim();
        const photoUrl = `https://api.unsplash.com/search/photos?page=${page}&query=${keyWord}&client_id=${acessesKEY}&per_page=12`;

        const response = await fetch(photoUrl);
        const data = await response.json();

        const result = data.results;

        result.map((result)=>{
            const image = document.createElement("img");
            image.src = result.urls.small;
            const imageLink = document.createElement("a");
            imageLink.href = result.links.html;
            imageLink.target = "_blank";

            imageLink.appendChild(image);
            searchResult.appendChild(imageLink)
        })
        showMoreButton.style.display= "block";
    }
}

searchPhoto.addEventListener("click", (evt)=>{
    searchResult.innerHTML = "";
    showMoreButton.style.display = "none";
    evt.preventDefault();
    page = 1;
    searchImages();
});

showMoreButton.addEventListener("click", ()=>{
    page++;
    searchImages();
})