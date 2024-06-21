import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import { displayImage } from "./js/pixabay-api";
import { renderImage } from "./js/render-functions";

const formSearch = document.querySelector(".form-js");
const inputSearch = document.querySelector(".input-js");
const list = document.querySelector(".image-list");
const loader = document.querySelector(".loader");



formSearch.addEventListener('submit', e => {
    e.preventDefault();
    const inputValue = inputSearch.value.trim();
    if (inputValue === '') {
        list.innerHTML = ' ';
    }
    showLoader();
    const arrayPromise = displayImage(inputValue);
    arrayPromise
        .then(images => {
        if (images.hits.length !== 0) {
            renderImage(images.hits);
        }
        else {
            iziToast.error({
                message: "Sorry, there are no images matching your search query. Please try again!",
                messageColor: '#fafafa',
                color: '#ef4040',
                position: 'topRight'

        });
            }
    })
        .catch(error => error)
        .finally(() => {
        hideLoader();
        e.target.reset();
    });
     
});

function showLoader() {
    loader.classList.remove('hidden');
}

function hideLoader() {
    loader.classList.add('hidden');
}