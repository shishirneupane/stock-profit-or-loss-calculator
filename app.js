var initialPriceInput = document.querySelector("#initial-price-input");
var stocksQtyInput = document.querySelector("#stocks-qty-input");
var currentPriceInput = document.querySelector("#current-price-input");
var checkBtn = document.querySelector("#check-button");
var outputText = document.querySelector("#output-text");

checkBtn.addEventListener("click", checkBtnHandler);

function checkBtnHandler() {
  var initialPrice = parseFloat(initialPriceInput.value);
  var stocksQty = parseInt(stocksQtyInput.value);
  var currentPrice = parseFloat(currentPriceInput.value);

  // user input validations for "empty inputs or not" and "positive input numbers or not"
  if ((initialPriceInput.value !== "") && (stocksQtyInput.value !== "") && (currentPriceInput.value !== "")) {
    if ((Math.sign(initialPrice) === 1) && (Math.sign(stocksQty) === 1) && (Math.sign(currentPrice) === 1)) {
      calculateProfitOrLoss(initialPrice, stocksQty, currentPrice);
    } else if ((Math.sign(initialPrice) === -1) || (Math.sign(stocksQty) === -1) || (Math.sign(currentPrice) === -1)) {
      showMessageText("Inputs can't be negatives. Please enter positive numbers in all fields.");
    } else if ((Math.sign(initialPrice) === 0) || (Math.sign(stocksQty) === 0) || (Math.sign(currentPrice) === 0)) {
      showMessageText("Inputs can't be zeroes. Please enter positive numbers in all fields.");
    }
  } else if ((initialPriceInput.value === "") && (stocksQtyInput.value === "") && (currentPriceInput.value === "")) {
    showMessageText("Enter all the three inputs given above. None should be empty.");
  } else if ((initialPriceInput.value === "") || (stocksQtyInput.value === "") || (currentPriceInput.value === "")) {
    showMessageText("At least one out of three inputs is missing. Please enter all amounts.");
  }
}

function showMessageText(msg) {
  outputText.style.display = "block";
  outputText.innerText = msg;
}