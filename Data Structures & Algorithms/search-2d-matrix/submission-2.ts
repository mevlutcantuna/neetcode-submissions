class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix: number[][], target: number): boolean {
        const m = matrix.length;
        const n = matrix[0].length;

        // Find the first row whose last item is >= target.
        let top = 0;
        let bottom = m - 1;

        while (top <= bottom) {
            const mid = Math.floor((top + bottom) / 2);

            if (matrix[mid][n - 1] < target) {
                top = mid + 1;
            } else {
                bottom = mid - 1;
            }
        }

        if (top === m) return false;

        // Binary-search inside that row.
        let left = 0;
        let right = n - 1;

        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            const value = matrix[top][mid];

            if (value < target) {
                left = mid + 1;
            } else if (value > target) {
                right = mid - 1;
            } else {
                return true;
            }
        }

        return false;
    }
}
