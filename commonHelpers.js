import{S as l,i as c}from"./assets/vendor-8c59ed88.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&t(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();document.querySelector(".form-js");document.querySelector(".input-js");document.querySelector(".image-list");function m(s){const o="https://pixabay.com",i="/api/",t=new URLSearchParams({key:"44419663-0e2c09df92781957132f7cc0f",q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}),e=`${o}${i}?${t}`;return console.log(e),fetch(e).then(r=>r.json())}document.querySelector(".form-js");document.querySelector(".input-js");const u=document.querySelector(".image-list");function d(s){const o=s.map(t=>`
    <li class="images-item">
    <a class="large-img-link" href="${t.largeImageURL}">
    <img class="small-img-link" src="${t.webformatURL}" alt="${t.tags}"></img>
    <div class="image-box">
    <p class="img-list-item-text">Likes: ${t.likes}</p>
    <p class="img-list-item-text">Views: ${t.views}</p>
    <p class="img-list-item-text">Comments: ${t.comments}</p>
    <p class="img-list-item-text">Downloads: ${t.downloads}</p>
    </div>
        </a>
    </li>`).join("");u.innerHTML=o,new l(".image-list a",{captions:!0,captionsData:"alt",captionPosition:"bottom",captionDelay:250}).refresh()}const f=document.querySelector(".form-js"),p=document.querySelector(".input-js"),g=document.querySelector(".image-list"),a=document.querySelector(".loader");f.addEventListener("submit",s=>{s.preventDefault();const o=p.value.trim();o===""&&(g.innerHTML=" "),h(),m(o).then(t=>{t.hits.length!==0?d(t.hits):c.error({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#fafafa",color:"#ef4040",position:"topRight"})}).catch(t=>{c.error({message:"An error occurred while fetching images. Please try again later."})}).finally(()=>{y(),s.target.reset()})});function h(){a.classList.remove("hidden")}function y(){a.classList.add("hidden")}
//# sourceMappingURL=commonHelpers.js.map
