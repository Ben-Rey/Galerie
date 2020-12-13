window.onload = start;

function start() {
  const mainContainer = document.getElementById("main-container");
  addPicturesToDiv(pictures, mainContainer);
}

function addPicturesToDiv(pictures, div) {
  pictures.forEach((picture) => {
    div.innerHTML += `<img class="fit-picture" src="${picture.url}" alt="">`;
  });
}

let pictures = [
  {
    url:
      "https://cdn.pixabay.com/photo/2020/12/03/12/35/sunset-5800386_1280.jpg",
  },
  {
    url: "https://cdn.pixabay.com/photo/2020/12/04/16/08/moss-5803607_1280.jpg",
  },

  {
    url:
      "https://cdn.pixabay.com/photo/2020/11/22/08/06/forest-5765878_1280.jpg",
  },

  {
    url:
      "https://cdn.pixabay.com/photo/2020/08/30/09/22/people-5528959_1280.jpg",
  },
  {
    url: "https://cdn.pixabay.com/photo/2020/12/04/16/08/moss-5803607_1280.jpg",
  },

  {
    url:
      "https://cdn.pixabay.com/photo/2020/11/22/08/06/forest-5765878_1280.jpg",
  },

  {
    url:
      "https://cdn.pixabay.com/photo/2020/08/30/09/22/people-5528959_1280.jpg",
  },
  {
    url: "https://cdn.pixabay.com/photo/2020/12/04/16/08/moss-5803607_1280.jpg",
  },

  {
    url:
      "https://cdn.pixabay.com/photo/2020/11/22/08/06/forest-5765878_1280.jpg",
  },

  {
    url:
      "https://cdn.pixabay.com/photo/2020/08/30/09/22/people-5528959_1280.jpg",
  },
];
