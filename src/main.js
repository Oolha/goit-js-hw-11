import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import { displayImage } from "./js/pixabay-api";
import { renderImage } from "./js/render-functions";

const form = document.querySelector(".form-js");
const input = document.querySelector(".input-js");
const button = document.querySelector(".btn-js");

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const inputValue = input.value.trim();
    if (inputValue === ' ') return;
});
displayImage(inputValue)
if (images.hits.length === 0) {
    return iziToast.error({
        message: "Sorry, there are no images matching your search query. Please try again!"
    });
    

} else {
    renderImage(images);
}

