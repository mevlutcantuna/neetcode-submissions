class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let left = 0;
        let right = heights.length -1;
        let maxima = 0;

        while(left < right){
            let width = right - left;

            let maxArea = Math.min(heights[left], heights[right]) * width;

            maxima = Math.max(maxArea, maxima);

            if(heights[left] <= heights[right]){
                left++
            }else {
                right--
            }
        }

        return maxima

    }
}
