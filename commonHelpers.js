import{S as a,i as l}from"./assets/vendor-8c59ed88.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&t(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function t(e){if(e.ep)return;e.ep=!0;const o=i(e);fetch(e.href,o)}})();document.querySelector(".form-js");document.querySelector(".input-js");document.querySelector(".image-list");function u(s){const r="https://pixabay.com",i="/api/",t=new URLSearchParams({key:"44419663-0e2c09df92781957132f7cc0f",q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}),e=`${r}${i}?${t}`;return console.log(e),fetch(e).then(o=>o.json())}document.querySelector(".form-js");document.querySelector(".input-js");const m=document.querySelector(".image-list");function d(s){const r=s.map(t=>`
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
    </li>`).join("");m.innerHTML=r,new a(".image-list a",{captions:!0,captionsData:"alt",captionPosition:"bottom",captionDelay:250}).refresh()}const f=document.querySelector(".form-js"),p=document.querySelector(".input-js"),g=document.querySelector(".image-list"),c=document.querySelector(".loader");f.addEventListener("submit",s=>{s.preventDefault();const r=p.value.trim();r===""&&(g.innerHTML=" "),h(),u(r).then(t=>{t.hits.length!==0?d(t.hits):l.error({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#fafafa",color:"#ef4040",position:"topRight"})}).catch(t=>t).finally(()=>{y(),s.target.reset()})});function h(){c.classList.remove("hidden")}function y(){c.classList.add("hidden")}
//# sourceMappingURL=commonHelpers.js.map
