class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {boolean}
     */
    checkSubarraySum(nums: number[], k: number): boolean {
        if(nums.length < 2) return false;

        let total = 0;
        let r = new Map()
        r.set(0, -1);

        for(let i = 0; i < nums.length; i++){
            total += nums[i];
            const remainder = total % k;
            if(!r.has(remainder)){
                r.set(remainder, i);
            }else if(i - r.get(remainder) >= 2){
                return true
            }
        }

        return false
    }
}
