class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    subarraySum(nums: number[], k: number): number {
        let result = 0;
        let currentSum = 0;
        const prefixSumCount = new Map<number, number>();
        prefixSumCount.set(0, 1);

        for (const num of nums) {
            currentSum += num;

            const needed = currentSum - k;
            result += prefixSumCount.get(needed) ?? 0;

            prefixSumCount.set(currentSum, (prefixSumCount.get(currentSum) ?? 0) + 1);
        }

        return result;
    }
}
