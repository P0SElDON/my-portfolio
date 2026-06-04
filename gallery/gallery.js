let images = ["img1.png", "img2.png", "img3.png", "img4.png"];
let currentImageIndex = 0;
let imgElement;

function setup() {
  noCanvas();
  imgElement = select("#gallery-image");
  let button = select("#gallery-button");
  button.mousePressed(changeImage);
}

function changeImage() {
  currentImageIndex = currentImageIndex + 1;
  if (currentImageIndex >= images.length) {
    currentImageIndex = 0;
  }
  imgElement.attribute("src", images[currentImageIndex]);
}