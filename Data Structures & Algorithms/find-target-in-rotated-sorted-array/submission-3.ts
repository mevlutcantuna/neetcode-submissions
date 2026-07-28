class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums: number[], target: number): number {
        let left = 0;
        let right = nums.length - 1;

        while (left <= right) {
            const mid = Math.floor((left + right) / 2);

            if (nums[mid] === target) return mid;

            // check left side
            if (nums[left] <= nums[mid]) {
                // target should be between left and mid
                if (nums[left] <= target && target < nums[mid]) {
                    right = mid - 1;
                } else {
                    left = mid + 1;
                }
            } else {
                // target should be between mid and right
                if (nums[mid] < target && nums[right] >= target) {
                    left = mid + 1;
                } else right = mid - 1;
            }
        }

        return -1;
    }
}
