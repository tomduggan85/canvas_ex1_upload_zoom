//dom elements and related
const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');
const fileInput = document.querySelector('input[type="file"]')
const zoomIn = document.querySelector('.zoom-in');
const zoomOut = document.querySelector('.zoom-out');

//state variables
let image;
let imageSize = 1;

const drawImage = () => {
  if (image) {
    context.clearRect(0, 0, canvas.width, canvas.height)
    context.drawImage(
      image, 
      0, 
      0, 
      image.naturalWidth * imageSize,
      image.naturalHeight * imageSize,
    )
  }
};

fileInput.addEventListener('change', (e) => {
  image = new Image();
  image.onload = drawImage;
  image.src = URL.createObjectURL(e.target.files[0]);
});

zoomIn.addEventListener('click', () => {
  imageSize += 0.05;
  drawImage();
});

zoomOut.addEventListener('click', () => {
  imageSize -= 0.05;
  drawImage();
});