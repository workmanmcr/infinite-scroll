const imageContainer = document.getElementById('image-container');
const loader = document.getElementById('loader')

let photosArray = [];

// unsplash API 
const count = 10;
const apiKey = 'A9PGyt_01t7OB9UMaBVs9dVOo7j88ERdApNub9WMzcg';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

function displayPhotos() {
  // run function for each object 
  photosArray.forEach((photo) => {
// create <a> to link to unsplash
    const item = document.createElement('a')
    item.setAttribute('href', photo.links.html);
    item.setAttribute('target', '_blank');
    // creat <img> for photo
    const img = document.createElement('img');
    img.setAttribute('src', photo.url.regular);
    img.setAttribute('alt', photo.alt.description);
    img.setAttribute('title', photo.alt.description);
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

getPhotos();