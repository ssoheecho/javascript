let imgs = [];
const pngs = {
  1: ["andy.png", "andy dwyer"],
  2: ["april.png", "april ludgate"],
  3: ["ron.png", "ron swanson"],
  4: ["tom.png", "tom haverford"],
  5: ["donna.png", "donna meagle"],
  6: ["jerry.png", "jerry gergich"],
  7: ["ben.png", "ben wyatt"],
  8: ["leslie.png", "leslie knope"],
  9: ["ann.png", "ann perkins"],
  10: ["chris.png", "chris traeger"]
}

window.onload = () => {
  addPng();
};

addEvent = (imgs) => {
  for (let item of imgs) {
    item.addEventListener("click", () => loadGiphy(item.title), false);
    document.body.appendChild(item);
  }
}

addPng = () => {
  for (let png in pngs) {
    let img = document.createElement("img");
    img.src = "./assets/" + pngs[png][0];
    img.id = pngs[png][0].split(".")[0];
    if (png % 2) {
      img.className = "even";
    } else {
      img.className = "odd";
    }
    img.title = pngs[png][1];
    imgs.push(img);
  }
  addEvent(imgs);
}

loadGiphy = (name) =>  {
  let keyword = name;
  fetch("https://api.giphy.com/v1/gifs/search?api_key=MjkpGffmFXIqeqf8fCorCkMFqeyxhF5b&q=" + keyword + "&limit=100&offset=0&rating=G&lang=en")
  .then((response) => {
    return response.json();
  })
  .then((result) => {
    getImage(result);
  });
}

getImage = (result) => {
  let index = Math.floor(Math.random() * 101);
  let gif = result.data[index];
  let url = gif.images.fixed_height_downsampled.url;
  openImage(url);
}

openImage = (url) => {
  let top = Math.floor(Math.random() * 501);
  let left = Math.floor(Math.random() * 1001);
  window.open(url, 'gif', `top=${top}%, left=${left}%, height=300, width=500`);
}
