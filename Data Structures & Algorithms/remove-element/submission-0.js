class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums, val) {
        //WORST CASE
        for (let i = 0; i < nums.length - 1; i++) {
            if (nums[i] === val) {
                let j = i + 1
                while (j < nums.length) {
                    if (nums[j] !== val) {
                        [nums[i], nums[j]] = [nums[j], nums[i]];
                        break;
                    } else {
                        j++
                    }
                }
            }
        }

        for (let i = nums.length - 1; i >= 0; i--) {
            if (nums[i] === val) {
                nums.pop()
            } else {
                break;
            }
        }

        return nums.length
    }
}
