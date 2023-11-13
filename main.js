const searchInput = document.querySelector("#searchInput");
const searchButton = document.querySelector("#searchButton");
const clearButton = document.querySelector("#clearButton");
const imagesWrapper = document.querySelector(".images-wrapper");

const api = new Api();

runEvenetListeners();

function runEvenetListeners(){
    searchButton.addEventListener("click", search);
    clearButton.addEventListener("click", clear);
}

function clear(){
    imagesWrapper.innerHTML = "";
}

function search(){
    let inputValue = searchInput.value.trim();

    if(inputValue == "" || inputValue == null){
        alert("Lütfen bir değer giriniz");
    }else{
        addPhotosToUI(api.getPhotos(inputValue));
    }
}

function addPhotosToUI(images){
    imagesWrapper.innerHTML = "";
    
    images
    .then(values => {
        values.results.forEach(result => {
            const div = document.createElement("div");
            const img = document.createElement("img");

            img.height = 400;
            img.width = 400;
            img.src = result.urls.regular;

            div.appendChild(img);
            imagesWrapper.appendChild(div);
        });
    });
}