
const formSearch = document.querySelector(".form-js");
const inputSearch = document.querySelector(".input-js");
const list = document.querySelector(".image-list");

export function displayImage(image) {
    const BASE_URL = 'https://pixabay.com';
    const END_POINT = '/api/';
    const params = new URLSearchParams({
        key: '44419663-0e2c09df92781957132f7cc0f',
        q: image,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,

    });
    const url = `${BASE_URL}${END_POINT}?${params}`;
    console.log(url);
    
    return fetch(url).then(res => res.json());
}
