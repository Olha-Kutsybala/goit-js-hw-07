import { galleryItems } from './gallery-items.js';
// // Change code below this line

const galleryContainer = document.querySelector(".gallery");
const itemGallery = createGalleryItem(galleryItems);

galleryContainer.insertAdjacentHTML("beforeend", itemGallery);

function createGalleryItem(items) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>`;
    })
    .join("");
}

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 250,
});

