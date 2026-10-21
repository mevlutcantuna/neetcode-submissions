class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        const leftProducts = [];
        const rightProducts = [];
        const result = []

        let left = 1;
        for(let i = 0; i < nums.length; i++){
            leftProducts.push(left)
            left *= nums[i]
        }

        let right = 1;
        for(let i = nums.length - 1; i >= 0; i--){
            rightProducts.unshift(right)
            right *= nums[i]
        }

        for(let i = 0; i < leftProducts.length; i++){
            result.push(leftProducts[i] * rightProducts[i])
        }

        return result
    }
}
