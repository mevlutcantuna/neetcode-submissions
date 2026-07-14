class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums: number[], val: number): number {
        let i = 0; // read
        let j = 0; // write

        while (i < nums.length && j < nums.length) {
            if (nums[i] !== val) {
                nums[j] = nums[i];
                j++;
            }

            i++
        }
        return j;
    }
}
