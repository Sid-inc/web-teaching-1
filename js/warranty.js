
var warrantyButton = document.querySelector(".warranty-button");
var warrantyPopup = document.querySelector(".warranty-block");
var warrantyClose = document.querySelector(".delivery-block");
var deliveryButton2 = document.querySelector(".delivery-block-show");

warrantyButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  warrantyPopup.classList.add("warranty-block-show"); /*показывает блок Гарантия*/
  deliveryPopup.classList.remove("delivery-block-show"); /*убирает блок Доставка*/
  creditPopup.classList.remove("credit-block-show"); /*убирает блок Кредит*/
});

warrantyClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  warrantyPopup.classList.remove("warranty-block-show"); /*убирает блок Гарантия*/
});
