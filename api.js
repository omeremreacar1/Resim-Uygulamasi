class Api {
    constructor() {
        this.accessKey="0edGTgQ1E33isdK0abKxu_7C7GOoGig6UWiuHr6_EyE";
    }

    async getPhotos(value){
        const images = await (await fetch(`https://api.unsplash.com/search/photos?client_id=${this.accessKey}&query=${value}`)).json();

        return images;
    }
}