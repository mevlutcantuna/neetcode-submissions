class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        let minPrice = Infinity;
        let max = 0;

        for(let i = 0; i < prices.length; i++){
            if(prices[i] < minPrice){
                minPrice = prices[i];
            }else {
                max = Math.max(max, prices[i] - minPrice);
            }
        }

        return max;
    }
}
