window.onload = start;
serviceWorker();
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
  setTimeout(() => {
    window.scrollTo(0, document.body.scrollHeight);
  }, 100);
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

function serviceWorker() {
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", function () {
      navigator.serviceWorker.register("/sw.js").then(
        function (registration) {
          // Registration was successful
          console.log(
            "ServiceWorker registration successful with scope: ",
            registration.scope
          );
        },
        function (err) {
          // registration failed :(
          console.log("ServiceWorker registration failed: ", err);
        }
      );
    });
  }
}
