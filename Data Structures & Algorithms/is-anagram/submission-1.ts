class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if (s.length !== t.length) return false;

        let obj1 = new Map();
        let obj2 = new Map();

        for (const char of s) {
            obj1.set(char, (obj1.get(char) ?? 0) + 1);
        }

        for (const char of t) {
            obj2.set(char, (obj2.get(char) ?? 0) + 1);
        }

        for (const key of obj1.keys()) {
            if (obj1.get(key) !== obj2.get(key)) {
                return false;
            }
        }

        return true;
    }
}
