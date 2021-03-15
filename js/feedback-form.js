var button = document.querySelector(".feedback-button");
var popup = document.querySelector(".feedback-form");
var close = document.querySelector(".close-button");

button.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("feedback-form-show");
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("feedback-form-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27)  {
    if (popup.classList.contains("feedback-form-show")) {
      evt.preventDefault();
      popup.classList.remove("feedback-form-show");
    }
  }
});
