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
    }
    else if ((Math.sign(initialPrice) === -1) || (Math.sign(stocksQty) === -1) || (Math.sign(currentPrice) === -1)) {
      showMessageText("Inputs can't be negatives. Please enter positive numbers in all fields.");
    }
    else if ((Math.sign(initialPrice) === 0) || (Math.sign(stocksQty) === 0) || (Math.sign(currentPrice) === 0)) {
      showMessageText("Inputs can't be zeroes. Please enter positive numbers in all fields.");
    }
  }
  else if ((initialPriceInput.value === "") && (stocksQtyInput.value === "") && (currentPriceInput.value === "")) {
    showMessageText("Enter all the three inputs given above. None should be empty.");
  }
  else if ((initialPriceInput.value === "") || (stocksQtyInput.value === "") || (currentPriceInput.value === "")) {
    showMessageText("At least one out of three inputs is missing. Please enter all amounts.");
  }
}

function calculateProfitOrLoss(initialPrice, stocksQty, currentPrice) {
  if (currentPrice > initialPrice) {
    // profit logic
    var profit = currentPrice - initialPrice;
    var profitPercentage = (profit / initialPrice) * 100;
    console.log("Profit:", profit, "and Profit Percentage:", profitPercentage);

    outputText.style.display = "block";
    showProfit(profit, profitPercentage);
  }
  else if (currentPrice < initialPrice) {
    // loss logic
    var loss = initialPrice - currentPrice;
    var lossPercentage = (loss / initialPrice) * 100;
    console.log("Loss:", loss, "and Loss Percentage:", lossPercentage);

    outputText.style.display = "block";
    showLoss(loss, lossPercentage);
  }
  else if (currentPrice === initialPrice) {
    console.log("No profit or loss. The current price is the same as when you bought it.");

    outputText.style.display = "block";
    outputText.style.color = "black";
    outputText.innerHTML = "No profit or loss. The current price is the same as when you bought it.";
  }
}

// show profit to user
function showProfit(profit, profitPercentage) {
  outputText.style.color = "green";
  outputText.innerHTML = `The profit is Rs. ${profit} and profit percentage is ${profitPercentage}%.`;
}

// show loss to user
function showLoss(loss, lossPercentage) {
  outputText.style.color = "red";
  outputText.innerHTML = `The loss is Rs. ${loss} and loss percentage is ${lossPercentage}%.`;
}

function showMessageText(msg) {
  outputText.style.display = "block";
  outputText.innerText = msg;
}