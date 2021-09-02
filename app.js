var initialPriceInput = document.querySelector("#initial-price-input");
var stocksQtyInput = document.querySelector("#stocks-qty-input");
var currentPriceInput = document.querySelector("#current-price-input");
var checkBtn = document.querySelector("#check-button");
var outputText = document.querySelector("#output-text");
var spinner = document.querySelector("#spinner");

checkBtn.addEventListener("click", checkBtnHandler);

function checkBtnHandler() {

  var initialPrice = Number.parseFloat(initialPriceInput.value);
  var stocksQty = Number.parseInt(stocksQtyInput.value);
  var currentPrice = Number.parseFloat(currentPriceInput.value);

  // user input validations for "empty inputs or not" and "positive input numbers or not"
  if ((initialPriceInput.value !== "") && (stocksQtyInput.value !== "") && (currentPriceInput.value !== "")) {

    if ((Math.sign(initialPrice) === 1) && (Math.sign(stocksQty) === 1) && (Math.sign(currentPrice) === 1)) {
      calculateProfitOrLoss(initialPrice, stocksQty, currentPrice);
    }
    
    else if ((Math.sign(initialPrice) === -1) || (Math.sign(stocksQty) === -1) || (Math.sign(currentPrice) === -1)) {
      // hides whatever output is being displayed and shows spinner
      hideOutputTextAndShowSpinner();
      
      // hides spinner after few seconds of interval and displays the message sent to the function
      hideSpinnerAndShowOutputText("Inputs can't be negatives. Please enter positive numbers in all fields.");
    }
    
    else if ((Math.sign(initialPrice) === 0) || (Math.sign(stocksQty) === 0) || (Math.sign(currentPrice) === 0)) {
      hideOutputTextAndShowSpinner();
      hideSpinnerAndShowOutputText("Inputs can't be zeroes. Please enter positive numbers in all fields.");
    }
  
  }

  else if ((initialPriceInput.value === "") && (stocksQtyInput.value === "") && (currentPriceInput.value === "")) {
    hideOutputTextAndShowSpinner();
    hideSpinnerAndShowOutputText("Enter all the three inputs given above. None should be empty.");
  }

  else if ((initialPriceInput.value === "") || (stocksQtyInput.value === "") || (currentPriceInput.value === "")) {
    hideOutputTextAndShowSpinner();
    hideSpinnerAndShowOutputText("At least one out of three inputs is missing. Please enter all amounts.");
  }

}

function calculateProfitOrLoss(initialPrice, stocksQty, currentPrice) {

  if (currentPrice > initialPrice) {

    // profit logic
    var profit = (currentPrice - initialPrice) * stocksQty;
    var profitPercentage = ((currentPrice - initialPrice) / initialPrice) * 100;
    console.log("Profit:", profit, "and Profit Percentage:", profitPercentage);

    hideOutputTextAndShowSpinner();
    
    setTimeout(() => {
      showProfit(profit, profitPercentage);
    }, 1250);
  }

  else if (currentPrice < initialPrice) {
  
    // loss logic
    var loss = (initialPrice - currentPrice) * stocksQty;
    var lossPercentage = ((initialPrice - currentPrice) / initialPrice) * 100;
    console.log("Loss:", loss, "and Loss Percentage:", lossPercentage);

    hideOutputTextAndShowSpinner();
  
    setTimeout(() => {
      showLoss(loss, lossPercentage);
    }, 1250);
  
  }
  
  else if (currentPrice === initialPrice) {
  
    console.log("No profit or loss. The current price is the same as when you bought it.");

    hideOutputTextAndShowSpinner();
    hideSpinnerAndShowOutputText("No profit or loss. The current price is the same as when you bought it.");
  
  }

}

function showProfit(profit, profitPercentage) {
  
  spinner.style.display = "none";
  outputText.style.display = "block";
  outputText.style.color = "#f1f2f3";
  outputText.style.border = "2px solid rgb(0 149 0)";
  outputText.style.backgroundColor = "rgb(0 149 0)";
  outputText.innerHTML = `<span>😄</span> The profit is Rs. ${profit.toFixed(2)} and the profit percentage is ${profitPercentage.toFixed(2)} %. <span>😄</span>`;

}

function showLoss(loss, lossPercentage) {
  
  spinner.style.display = "none";
  outputText.style.display = "block";
  outputText.style.color = "#f1f2f3";
  outputText.style.border = "2px solid red";
  outputText.style.backgroundColor = "red";
  outputText.innerHTML = `<span>😭</span> The loss is Rs. ${loss.toFixed(2)} and the loss percentage is ${lossPercentage.toFixed(2)} %. <span>😭</span>`;

}

function hideOutputTextAndShowSpinner() {

  outputText.style.display = "none";
  spinner.style.display = "block";

}

function hideSpinnerAndShowOutputText(msg) {

  setTimeout(() => {
    spinner.style.display = "none";
    outputText.style.display = "block";
    outputText.style.color = "black";
    outputText.style.backgroundColor = "#f1f2f3";
    outputText.style.border = "2px solid black";
    outputText.innerText = msg;
  }, 1250);

}