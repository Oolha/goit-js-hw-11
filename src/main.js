import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import { displayImage } from "./js/pixabay-api";
import { renderImage } from "./js/render-functions";

const formSearch = document.querySelector(".form-js");
const inputSearch = document.querySelector(".input-js");
const list = document.querySelector(".image-list");

formSearch.addEventListener('submit', e => {
    e.preventDefault();
    const inputValue = inputSearch.value.trim();
    if (inputValue === '') {
        list.innerHTML = ' ';
    }
    const array = displayImage(inputValue);
    if (array.length !== 0) {
        array.then(images => renderImage(images.hits));
    }
    array.catch(error => {
        iziToast.error({
            message: "Sorry, there are no images matching your search query. Please try again!"
        });
    });
    e.target.reset();
});
