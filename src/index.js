// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    if(currency<=0) return {};
    if(currency>10000) return {error: "You are rich, my friend! We don't have so much coins for exchange"};
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
    let change = 1;
    let exchange={};
    let coins = {
        1: "P",
        5: "N",
        10: "D",
        25: "Q",
        50: "H"
    };

    while(currency!=0){
        if(currency>=50) change=50;
        else if(currency>=25) change=25;
        else if(currency>=10) change=10;
        else if(currency>=5) change=5;
        else change=1;


        currency=currency-change;
        let coin = coins[change];
        exchange[coin] = exchange[coin] + 1 || 1;
    }
    
    return exchange;
}
