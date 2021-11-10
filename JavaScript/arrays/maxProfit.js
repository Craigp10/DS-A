//Easy
//Given array of ints return the max profit that can be made by deciding a buy and sell day. The buy day must come before the sell day

function maxProfit(prices) {
  //O(n) time complexity
  //Init min at first index of array, init max profit at 0.
  let min = prices[0];
  let maxProfit = 0;
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < min) {
      min = prices[i];
    } else if (maxProfit < prices[i] - min) {
      maxProfit = prices[i] - min;
    }
  }

  return maxProfit;
}
