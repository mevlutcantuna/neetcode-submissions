class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let obj = new Set();
        for(const n of nums){
            if(obj.has(n)){
                return true
            }else {
                obj.add(n)
            }
        }

        return false
    }
}
