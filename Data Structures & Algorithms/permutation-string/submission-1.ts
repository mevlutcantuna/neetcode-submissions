class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1: string, s2: string): boolean {
        if (s1.length > s2.length) return false;

        let s1Count = new Array(26).fill(0);
        let s2Count = new Array(26).fill(0);

        for (let i = 0; i < s1.length; i++) {
            s1Count[s1.charCodeAt(i) - 97]++;
            s2Count[s2.charCodeAt(i) - 97]++;
        }

        if (this.countsAreEqual(s1Count, s2Count)) return true;

        for (let i = s1.length; i < s2.length; i++) {
            s2Count[s2.charCodeAt(i) - 97]++;
            s2Count[s2.charCodeAt(i - s1.length) - 97]--;

            if (this.countsAreEqual(s1Count, s2Count)) {
                return true;
            }
        }

        return false;
    }

    countsAreEqual(a: number[], b: number[]): boolean {
        for (let i = 0; i < 26; i++) {
            if (a[i] !== b[i]) return false;
        }
        return true;
    }
}
