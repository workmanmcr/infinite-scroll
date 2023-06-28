const imageContainer = document.getElementById('image-container');
const loader = document.getElementById('loader')

let photosArray = [];

// unsplash API 
// const count = 10;
// const apiKey = 'A9PGyt_01t7OB9UMaBVs9dVOo7j88ERdApNub9WMzcg';
// const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

// helper function 
function setAttributes(element, attributes) {
  for (const key in attributes) {
    element.setAttribute(key, attributes[key]);
  }
}

function displayPhotos() {
  // run function for each object 
  photosArray.forEach((photo) => {
// create <a> to link to unsplash
    const item = document.createElement('a')
   
    setAttributes(item, {
        href: photo.links.html,
        target: '_blank'
    });
    // creat <img> for photo
    const img = document.createElement('img');
 
    setAttributes(img, {
      src: photo.urls.regular,
      alt: photo.alt_description,
      title: photo.alt_description
    });
  // put img inside anchor element then put both inside image-container 
    item.appendChild(img);
    imageContainer.appendChild(item);
  });
}

// get pics from unsplash api 
async function getPhotos() {
  try {
    const response = await fetch(apiUrl);
    photosArray = await response.json();
    displayPhotos();
  } catch (error) {
  }
}
// check to see if scrolling near bottom of page, load more pics
window.addEventListener('scroll', () => {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000) {
    
  }
})
getPhotos();