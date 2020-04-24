let piggyBank = {
    pennies: 0,
    nickels: 0,
    dimes: 0,
    quarters: 0
}


function countCoins(coinObject) {
    let dollarAmount = 0;
    if(coinObject.pennies) {
        dollarAmount += coinObject.pennies * .01;
    }
    if(coinObject.nickels) {
        dollarAmount += coinObject.nickels * .05;
    }
    if(coinObject.dimes) {
        dollarAmount += coinObject.dimes * .1;
    }
    if(coinObject.quarters) {
        dollarAmount += coinObject.quarters * .25;
    }
    return dollarAmount;
}

console.log(countCoins(piggyBank))