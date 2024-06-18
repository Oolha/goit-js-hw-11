const form = document.querySelector(".form-js");
const input = document.querySelector(".input-js");
const button = document.querySelector(".btn-js");
const list = document.querySelector(".image-list")

export function renderImage(images) {
    const markup = images.hits.map((image) => {
        return `
    <li class="images-item">
        <img href=${image.largeImageURL} class="large-img-link" onclick="event.preventDefault()"><img class="small-img-link" src=${image.webformatURL} alt=${image.tags}></img></a>
        <ul class="img-list">
            <li class="img-list-item">
                <p class="img-list-item-text">Likes</p>
                <p class="img-list-item-amount">${image.likes}</p>
            </li>
            <li class="img-list-item">
                <p class="img-list-item-text">Views</p>
                <p class="img-list-item-amount">${image.views}</p>
            </li>
            <li class="img-list-item">
                <p class="img-list-item-text">Comments</p>
                <p class="img-list-item-amount">${image.comments}</p>
            </li>
            <li class="img-list-item">
                <p class="img-list-item-text">Downloads</p>
                <p class="img-list-item-amount">${image.downloads}</p>
            </li>
        </ul>
    </li>`;
    }).json('\n');
    list.innerHTML = markup;
}
