class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    pivotIndex(nums: number[]): number {
        let totalSum = 0;
        for(let i = 0; i < nums.length; i++) totalSum+= nums[i];

        let leftSum = 0;
        for(let i = 0; i < nums.length; i++){
            const rightSum = totalSum - leftSum - nums[i];

            if(rightSum === leftSum) return i;

            leftSum += nums[i]
        }

        return -1;
    }
}
