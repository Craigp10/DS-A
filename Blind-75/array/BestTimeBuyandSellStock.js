/**

 * @param {number[]} prices
 * @return {number}
 * 
 * 
 * Given an array prices where prices[i] is the price of a given stock on the ith day.
 Maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
 return max profit
 */

const maxProfit_brute = function (prices) {
  //O(n2) time - space O(1)
  let max = 0;
  //nested loop prices...compare each price[i] with price[j] and calculate profit. If it is > current max replace max
  for (let i = 0; i < prices.length; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      if (prices[j] - prices[i] > max) max = prices[j] - prices[i];
    }
  }

  return max;
};

console.log(maxProfit_brute([7, 1, 5, 3, 6, 4]), 5);
console.log(maxProfit_brute([7, 3, 5, 3, 6, 4]), 3);
console.log(maxProfit_brute([7, 1, 5, 3]), 4);

const maxProfit = function (prices) {
  //Init min at 0 index, loop prices and compare if new val is lower than min. Calc a max at each step and if its greater than current max/
  //O(n) time - O(1) space
  if (prices.length < 2) {
    return 0;
  }
  let min = prices[0];
  let maxProfit = 0;
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < min) min = prices[i];
    let currentProfit = prices[i] - min;
    if (maxProfit < currentProfit) maxProfit = currentProfit;
  }

  return maxProfit;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]), 5);
console.log(maxProfit([7, 3, 5, 3, 6, 4]), 3);
console.log(maxProfit([7, 1, 5, 3]), 4);
