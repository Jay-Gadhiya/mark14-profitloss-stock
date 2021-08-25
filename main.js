
// calculate percentage for profit and loss
function calculatePercnt(num1, num2) {
    const percentage = (num1 / num2) * 100;
    return percentage;
}


function clickHandler() {
    const ip = initialPrice.value; //initial price
    const stockQuantity = stocksQuantity.value;
    const cp = curruntPrice.value; // currunt price

    const totalStock = ip * stockQuantity;

    if (Number(cp) > Number(ip)) {                  // for profit calculation
        const profitCalculation = cp - ip;
        const profit = stockQuantity * profitCalculation;
        const percent = calculatePercnt(profit, Number(ip));
        showOutput.innerText = `Hey, the profit is ${profit} and the percent is ${percent}%`;

    }

    if (Number(cp) < Number(ip)) {                // for loss calculation
        const lossCalculation = ip - cp;
        const loss = stockQuantity * lossCalculation;
        const percent = calculatePercnt(loss, Number(ip));
        showOutput.innerText = `Hey, the loss is ${loss} and the percent is ${percent}%`
    }

    if (cp === ip) {                            
        showOutput.innerText = "No pain no gain and no gain no pain";
    }
}

//main 

const initialPrice = document.querySelector("#initial");
const stocksQuantity = document.querySelector("#stocks");
const curruntPrice = document.querySelector("#currunt");
const button = document.querySelector("#output");
const showOutput = document.querySelector("#show-output");

button.addEventListener("click", clickHandler);