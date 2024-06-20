import{d as l}from"./assets/pixabay-api-a75a1163.js";import{i as m}from"./assets/vendor-8e8cd629.js";document.querySelector(".form-js");document.querySelector(".input-js");const r=document.querySelector(".image-list");function a(s){const e=s.hits.map(t=>`
    <li class="images-item">
        <img href=${t.largeImageURL} class="large-img-link" onclick="event.preventDefault()"><img class="small-img-link" src=${t.webformatURL} alt=${t.tags}></img></a>
        <ul class="img-list">
            <li class="img-list-item">
                <p class="img-list-item-text">Likes</p>
                <p class="img-list-item-amount">${t.likes}</p>
            </li>
            <li class="img-list-item">
                <p class="img-list-item-text">Views</p>
                <p class="img-list-item-amount">${t.views}</p>
            </li>
            <li class="img-list-item">
                <p class="img-list-item-text">Comments</p>
                <p class="img-list-item-amount">${t.comments}</p>
            </li>
            <li class="img-list-item">
                <p class="img-list-item-text">Downloads</p>
                <p class="img-list-item-amount">${t.downloads}</p>
            </li>
        </ul>
    </li>`).join("");r.innerHTML=e}const n=document.querySelector(".form-js"),c=document.querySelector(".input-js"),o=document.querySelector(".image-list");n.addEventListener("submit",s=>{s.preventDefault();const e=c.value.trim();e===""&&(o.innerHTML=" ");const t=l(e);t.length!==0&&t.then(i=>a(i.hits)),t.catch(i=>{m.error({message:"Sorry, there are no images matching your search query. Please try again!"})}),s.target.reset()});
//# sourceMappingURL=commonHelpers.js.map
