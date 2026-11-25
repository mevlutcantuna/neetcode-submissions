class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights: number[]): number {
        let max = -Infinity;
        let left = 0;
        let right = heights.length - 1;

        while (left < right) {
            const area = Math.min(heights[left], heights[right]) * (right - left);

            if (heights[left] < heights[right]) left++;
            else if (heights[left] > heights[right]) right--;
            else {
                left++;
                right--;
            }

            max = Math.max(area, max);
        }

        return max;
    }
}
