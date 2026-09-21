/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    let maxWealth = 0;

for (let customer of accounts) {
    let wealth = 0;

    for (let money of customer) {
        wealth += money;
    }

    maxWealth = Math.max(maxWealth, wealth);
}

return maxWealth; 
};