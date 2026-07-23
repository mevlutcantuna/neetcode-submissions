class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(height: number[]): number {
        let max = 0;
        let left = 0;
        let right = height.length - 1;

        while (left < right) {
            const width = right - left;
            const area = Math.min(height[left], height[right]) * width;
            max = Math.max(max, area);

            if (height[left] > height[right]) {
                right--;
            } else {
                left++;
            }
        }

        return max;
    }
}
