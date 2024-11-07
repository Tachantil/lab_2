var images = ['1.png', '2.png', '3.png'];
var currentIndex = 0;

function updateImage() {
    var imgElement = document.getElementById('image');
    imgElement.src = images[currentIndex];
}

document.getElementById('nextBtn').addEventListener('click', function () {
    currentIndex = (currentIndex + 1) % images.length; 
    updateImage();
});

document.getElementById('prevBtn').addEventListener('click', function () {
    currentIndex = (currentIndex - 1 + images.length) % images.length; 
    updateImage();
});

updateImage();