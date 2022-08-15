const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const images = ["./images/pic1.jpg","./images/pic2.jpg","./images/pic3.jpg","./images/pic4.jpg","./images/pic5.jpg"]

/* Declaring the alternative text for each image file */
const altText = ['eye', 'beachfoam', 'flowers', 'egypt-art', 'moth'];
var altTexts = {};
images.forEach((image, i) => altTexts[image] = altText[i]);

/* Looping through images */
for (image of images){
    const newImage = document.createElement('img');
    newImage.setAttribute('src', image);
    newImage.setAttribute('alt', altTexts[image]);
    thumbBar.appendChild(newImage);
};

thumbBar.addEventListener("click", (e) => displayedImage.setAttribute('src', e.target.getAttribute('src')));

/* Wiring up the Darken/Lighten button */
btn.addEventListener('click', () => {
    if (btn.getAttribute('class') === 'dark') {
    btn.setAttribute('class', 'lighten');
    btn.textContent = "Lighten";
    overlay.style.backgroundColor = "rgba(0,0,0,0.5)";
} else {
    btn.setAttribute('class', 'dark');
    btn.textContent = "Darken";
    overlay.style.backgroundColor = "rgba(0,0,0,0)";
}
});