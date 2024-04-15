document.addEventListener("DOMContentLoaded", () => {
function addDog() {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
    fetch(imgUrl)
      .then(res=> res.json())
      .then(results => {
        results.message.forEach(image => addImage(image))
      });
  }
  
  function addImage(dogPic) {
    let imageContainer = document.querySelector('#dog-image-container');
    let image = document.createElement('img');
    image.src = dogPic;
    imageContainer.appendChild(image);
  }
  

function init(){
addDog()
}
init()
})