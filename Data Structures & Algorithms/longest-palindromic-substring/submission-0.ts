class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    longestPalindrome(s: string): string {
        let bestStart = 0;
        let bestLength = 1;

        for (let i = 0; i < s.length; i++) {
            let odd = this.expand(i, i, s);

            if (odd.length > bestLength) {
                bestStart = odd.start;
                bestLength = odd.length;
            }

            let even = this.expand(i, i + 1, s);

            if (even.length > bestLength) {
                bestStart = even.start;
                bestLength = even.length;
            }
        }

        return s.slice(bestStart, bestStart + bestLength);
    }

    expand(left: number, right: number, s: string): { start: number; length: number } {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            left--;
            right++;
        }

        return {
            start: left + 1,
            length: right - left - 1,
        };
    }
}
