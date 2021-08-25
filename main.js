
// call function 
function calculateProfitAndLoss(initial, current, quantity) {
    if(initial > current) {
        var loss = (initial - current) * quantity;
        var lossPercentage = (loss / initial) * 100;
        showOutput.innerText = `Hey, the loss is ${loss} and the percent is ${lossPercentage}%`
        showOutput.style.color = "red";
    }
    else if (current > initial) {
        var profit = (current - initial) * quantity;
        var profitPercentage = (profit / initial) * 100;
        showOutput.innerText = `Hey, the profit is ${profit} and the percent is ${profitPercentage}%`;
        showOutput.style.color = "green";
    }
    else {
        showOutput.innerText = "No pain no gain and no gain no pain";
    }
}

// function run when button click
function clickHandler() {
    const ip = Number(initialPrice.value); //initial price
    const stockQ = Number(stocksQuantity.value);
    const curr = Number(curruntPrice.value); // currunt price
    if(ip > 0) {

        calculateProfitAndLoss(ip, curr, stockQ);
    }
    else {
        showOutput.innerText = "please put your data!";
        
    }
}

//main 

const initialPrice = document.querySelector("#initial");
const stocksQuantity = document.querySelector("#stocks");
const curruntPrice = document.querySelector("#currunt");
const button = document.querySelector("#output");
const showOutput = document.querySelector("#show-output");

button.addEventListener("click", clickHandler);