var mapLink = document.querySelector(".mini-map");
var mapPopup = document.querySelector(".big-map-form");
var mapClose = document.querySelector(".close-map-button");

mapLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.add("big-map-form-show");
});

mapClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.remove("big-map-form-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27)  {
    if (mapPopup.classList.contains("big-map-form-show")) {
      evt.preventDefault();
      mapPopup.classList.remove("big-map-form-show");
    }
  }
});
