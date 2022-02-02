/**
 * @param {number[]} stockPrices
 * @param {number} k
 * @return {number} # of highly profitable Months
 *
 * Determine the # of highly protfitable months. We can consider highly profitable months to be a sequence of k months are
 * the stock price increases each month. For each sequence of k that is profit we can increment our highly profitable months
 *
 *
 * Ex. 1
 * stockPrices - [1,2,3,4,5] , k - 3
 * returns 3; (1,2,3)(2,3,4)(3,4,5)
 *
 * Ex. 2
 * stockPrices - [5,3,5,7,8], k - 3
 * return 2; (3,5,7)(5,7,8)
 *
 *
 * constraints:
 * k <= stockPrices.length
 * 1 <= stockPrices.length < 100
 */

function countHighlyProfitableMonths_brute(stockPrices, k) {
  //O(n2)
  //Iterate stock prices for the months. Each iteration iterate again for k, checking if that sequence of months are highly profitable
  //If so increment our counter
  //return counter at end of outter iteration

  let highlyProfit = 0;

  for (let i = 0; i < stockPrices.length - k + 1; i++) {
    let countingM = 1;
    for (let j = 1; j < k; j++) {
      if (stockPrices[i + j] > stockPrices[i + j - 1]) countingM++;
    }
    if (countingM == k) highlyProfit++;
  }
  return highlyProfit;
}

console.log(countHighlyProfitableMonths_brute([1, 2, 3, 1, 4], 2), 3);
console.log(countHighlyProfitableMonths_brute([5, 3, 5, 7, 8], 3), 2);
console.log(
  countHighlyProfitableMonths_brute([4, 2, 5, 7, 8, 6, 3, 5, 9, 10, 1], 3),
  4
);

function countHighlyProfitableMonths(stockPrices, k) {
  //O(n)
  //Sliding window implementation
  //1 iteration starting at stockPrices[1] - compare current i with i - 1 stock price, if so increment a rolling ctr
  //If rolling ctr == k, increment highlyProfit ctr, decrement rolling ctr and continue iteration.
  //If i < i - 1 stock price then seset rolling ctr to 1 and continue iteration
  //We reset and set rollign counter to 1 because we're comparing k months in k -1 comparions, start at 1 to get ctr init.

  if (stockPrices.length == 1) {
    return 1;
  }
  let highlyProfit = 0;
  let countingM = 1;
  for (let i = 1; i < stockPrices.length; i++) {
    if (stockPrices[i] > stockPrices[i - 1]) countingM++;
    else {
      countingM = 1;
    }
    if (countingM == k) {
      highlyProfit++;
      countingM--;
    }
  }
  return highlyProfit;
}

console.log(countHighlyProfitableMonths([1, 2, 3, 1, 4], 2), 3);
console.log(countHighlyProfitableMonths([5, 3, 5, 7, 8], 3), 2);
console.log(
  countHighlyProfitableMonths([4, 2, 5, 7, 8, 6, 3, 5, 9, 10, 1], 3),
  4
);
