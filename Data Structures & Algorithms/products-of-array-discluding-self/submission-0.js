class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let count = nums.length;
        let result = new Array(count)

        result[0] = 1;
        for(let i = 1; i < count; i++){
            result[i] = result[i - 1] * nums[i - 1]
        }

        let suffixProduct = 1;
        for(let i = count - 1; i >= 0; i--){
            result[i] *= suffixProduct;
            suffixProduct *= nums[i];
        }

        return result
    }
}
