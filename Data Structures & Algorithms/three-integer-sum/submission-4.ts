class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums: number[]): number[][] {
        nums.sort((a, b) => a - b);

        let result: number[][] = [];

        for (let i = 0; i < nums.length - 2; i++) {
            if (i > 0 && nums[i] === nums[i - 1]) {
                continue;
            }

            let left = i + 1;
            let right = nums.length - 1;

            while (left < right) {
                const total = nums[left] + nums[i] + nums[right];

                if (total > 0) {
                    right--;
                } else if (total < 0) {
                    left++;
                } else {
                    result.push([nums[left], nums[i], nums[right]]);

                    left++;
                    right--;

                    while (left < right && nums[left] === nums[left - 1]) {
                        left++;
                    }

                    while (left < right && nums[right] === nums[right + 1]) {
                        right++;
                    }
                }
            }
        }

        return result;
    }
}
