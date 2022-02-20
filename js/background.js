//const img = document.getElementsByClassName("backgroundImg");
const images = ["0.jpeg", "1.jpeg", "2.jpeg"];
const chosenImg = images[Math.floor(Math.random() * images.length)];

//img.src = `img/${chosenImg}`;

//document.body.style.background = `url(img/${chosenImg})`;
//document.body.style.backgroundSize = "cover";
//document.body.style.background = "center";
//document.body.style.background = 'red';
const bgImage = document.createElement("img");
bgImage.src = `img/${chosenImg}`;

document.body.appendChild(bgImage);