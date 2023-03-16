import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector(".gallery");
const itemGallery = createGalleryItem(galleryItems);

galleryContainer.insertAdjacentHTML("beforeend", itemGallery);


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
  e.preventDefault();
  if (!e.target.classList.contains("gallery__image")) {
    return;
  };
  const instance = basicLightbox.create(`
    <img src="${e.target.dataset.source}" width="800" height="600">
`, {
    onShow: (instance) => {
      window.addEventListener("keydown", onEscKeyDown)
    },

    onClose: (instance) => {
      window.removeEventListener("keydown", onEscKeyDown)
    }
  })
  
  function onEscKeyDown (e) {
    if (e.code === "Escape") {
  instance.close()
}
  }
  instance.show();
}


