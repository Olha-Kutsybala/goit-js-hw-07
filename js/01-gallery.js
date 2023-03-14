import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector(".gallery");
const itemGallery = createGalleryItem(galleryItems);

galleryContainer.insertAdjacentHTML("beforeend", itemGallery);

galleryContainer.addEventListener('click', onGalleryContainerClick)

function createGalleryItem(items) {
    return galleryItems.map(({ preview, original, description }) => {
      return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
    }).join("");
}

function onGalleryContainerClick(e) {
    if (!e.target.classlist.contains('gallery__link')) {
        return
    }
    return galleryItems.original;
}
  