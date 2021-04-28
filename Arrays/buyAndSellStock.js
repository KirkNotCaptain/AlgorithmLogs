var maxProfit = function (prices) {
	if (prices.length === 0) return 0;

	let left = 0; //buy
	let right = 1; //sell
	let maxProf = 0;

	while (right < prices.length) {
		if (prices[left] < prices[right]) {
			let profit = prices[right] - prices[left];
			maxProf = Math.max(maxProf, profit);
		} else {
			left = right;
		}

		right++;
	}

	return maxProf;
};
