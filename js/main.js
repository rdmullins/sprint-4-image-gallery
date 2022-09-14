const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const photos = [
    "/img/pic1.jpg",
    "/img/pic2.jpg",
    "/img/pic3.jpg",
    "/img/pic4.jpg",
    "/img/pic5.jpg"    
];

/* Declaring the alternative text for each image file */

/* Looping through images */

for (let i=0; i<photos.length; i++) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', photos[i]);
    // newImage.setAttribute('alt', xxx);
    thumbBar.appendChild(newImage);
    newImage.addEventListener("click", e => displayedImage.src = e.target.src);
};
/* Wiring up the Darken/Lighten button */

btn.addEventListener("click", () => {
    const currentStatus = btn.getAttribute("class");
    if (currentStatus === "dark") {
        btn.setAttribute("class", "light");
        btn.textContent = "Lighten";
        overlay.style.backgroundColor = "rgba(o,0,0,0.5)";
    } else {
        btn.setAttribute("class", "dark");
        btn.textContent = "Darken";
        overlay.style.backgroundColor = "rgba(o,0,0,0)";
    }
});
