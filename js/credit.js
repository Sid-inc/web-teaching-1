var creditButton = document.querySelector(".credit-button");
var creditPopup = document.querySelector(".credit-block");
var creditClose = document.querySelector(".warranty-button");

creditButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  creditPopup.classList.add("credit-block-show"); /*показывает блок Кредит*/
  deliveryPopup.classList.remove("delivery-block-show"); /*убирает блок Доставка*/
  warrantyPopup.classList.remove("warranty-block-show");  /*убирает блок Гарантия*/
});

creditClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  creditPopup.classList.remove("credit-block-show"); /*убирает блок Кредит*/
});
