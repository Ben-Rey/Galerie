window.onload = start;
let mainPicturesContainer;
function start() {
  mainContainer = document.getElementById("main-container");
  buttonAddPicture = document.getElementById("add-picture");
  buttonAddPicture.addEventListener("click", addRandomPicture);
  pictures.forEach((picture) => {
    addPicturesToDiv(mainContainer, picture);
  });
  // loadWebcam();
}

function addPicturesToDiv(div, picture) {
  div.innerHTML += `<img class="fit-picture" src="${picture.url}" alt="">`;
}

function addRandomPicture() {
  if (window.fetch) {
    fetch("https://picsum.photos/1280/720").then(function (response) {
      addPicturesToDiv(mainContainer, response);
    });
  } else {
    console.error("Pas de fetch");
  }
}

function loadWebcam() {
  setTimeout(() => {
    Webcam.set({
      width: 1000,
      height: 240,
      image_format: "jpeg",
      jpeg_quality: 90,
    });
    Webcam.attach("#my_camera");
  }, 2000);
}
