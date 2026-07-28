class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums: number[]): number {
        let left = 0;
        let right = nums.length - 1;
        let min = Infinity;

        while (left <= right) {
            let mid = Math.floor((left + right) / 2);

            min = Math.min(nums[mid], min);

            if (nums[left] > nums[mid]) right = mid - 1;
            else {
                if (nums[mid] > nums[right]) left = mid + 1;
                else right = mid - 1;
            }
        }

        return min;
    }
}
