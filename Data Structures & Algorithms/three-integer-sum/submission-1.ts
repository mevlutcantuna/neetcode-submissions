class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums: number[]): number[][] {
        nums.sort((a, b) => a - b);
        let res = [];

        for (let i = 0; i < nums.length - 1; i++) {
            // skip duplicate first numbers
            if (i > 0 && nums[i] === nums[i - 1]) {
                continue;
            }

            let j = i + 1;
            let k = nums.length - 1;

            while (j < k) {
                const sum = nums[i] + nums[j] + nums[k];
                const item = [nums[i], nums[j], nums[k]];

                if (sum === 0) {
                    res.push(item);
                    j++;
                    k--;

                    // skip duplicate left values
                    while (j < k && nums[j] === nums[j - 1]) {
                        j++;
                    }

                    // skip duplicate right values
                    while (j < k && nums[k] === nums[k + 1]) {
                        k--;
                    }
                } else if (sum > 0) {
                    k--;
                } else {
                    j++;
                }
            }
        }

        return res;
    }
}
