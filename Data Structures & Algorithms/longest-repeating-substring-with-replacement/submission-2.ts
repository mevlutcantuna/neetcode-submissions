class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s: string, k: number): number {
        let freq = new Map<string, number>();
        let left = 0;
        let maxFreq = 0;
        let best = 0;

        for (let right = 0; right < s.length; right++) {
            let char = s[right];
            freq.set(char, (freq.get(char) ?? 0) + 1);
            maxFreq = Math.max(maxFreq, freq.get(char));

            while (right - left + 1 - maxFreq > k) {
                freq.set(s[left], freq.get(s[left])! - 1);
                left++;
            }

            best = Math.max(best, right - left + 1);
        }

        return best;
    }
}
