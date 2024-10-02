// Описаний у документації
import simpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";

export function imageRender(images){
    images.forEach(image => {
        const divItem = document.createElement('div');
        divItem.classList.add('gallery-item');
        const a = document.createElement('a');
        a.classList.add('gallery-link');
        a.href = image.largeImageURL;
        const img = document.createElement('img');
        img.src = image.webformatURL;
        img.alt = image.tags;
        img.classList.add('gallery-image');
        const divInfo = document.createElement('div');
        divInfo.classList.add('gallery-info');
        const pLikes = document.createElement('p');
        const pViews = document.createElement('p');
        const pComments = document.createElement('p');
        const pDownloads = document.createElement('p');
        pLikes.classList.add('gallery-info-item');
        pLikes.textContent = `Likes: ${image.likes}`;
        pViews.classList.add('gallery-info-item');
        pViews.textContent = `Views: ${image.views}`;
        pComments.classList.add('gallery-info-item');
        pComments.textContent = `Comments: ${image.comments}`;
        pDownloads.classList.add('gallery-info-item');
        pDownloads.textContent = `Downloads: ${image.downloads}`;
        divInfo.appendChild(pLikes)
        divInfo.appendChild(pViews)
        divInfo.appendChild(pComments)
        divInfo.appendChild(pDownloads)
        divItem.appendChild(a);
        a.appendChild(img);
        divItem.appendChild(divInfo);
        const referenceElement = document.querySelector('.gallery');
        referenceElement.appendChild(divItem);
    })
    
}

export function imageClear(){
    try{
        const parent = document.querySelector('.gallery')
        parent.innerHTML = '';
    }
    catch{

    }
}


export const lightbox = new simpleLightbox('.gallery .gallery-item a', {
    captionsData: 'alt',
    captionDelay: 250,
    scrollZoom: false,
  });