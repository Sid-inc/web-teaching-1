var deliveryButton = document.querySelector(".delivery-button");
var deliveryPopup = document.querySelector(".delivery-block");
var deliveryClose = document.querySelector(".warranty-button");

deliveryButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  deliveryPopup.classList.add("delivery-block-show"); /*показывает блок Доставка*/
  warrantyPopup.classList.remove("warranty-block-show"); /*убирает блок Гарантия*/
  creditPopup.classList.remove("credit-block-show"); /*убирает блок Кредит*/
});

deliveryClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  deliveryPopup.classList.remove("delivery-block-show"); /*убирает блок Доставка*/
});
