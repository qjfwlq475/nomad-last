const image = [
    "0.jpg",
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg"
]

const randImg = image[Math.floor(Math.random()*image.length)];

const bgImg = `url('img/${randImg}')`;

document.body.style.backgroundImage= bgImg;

// document.body.appendChild(bgImg);