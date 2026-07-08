class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const pairs = {
            "}": "{",
            ")": "(",
            "]": "["
        }

        let stack = [];

        for (const char of s) {
            if (char === "{" || char === "[" || char === "(") {
                stack.push(char)
            } else {
                if (stack.pop() !== pairs[char]) return false
            }
        }

        return stack.length === 0

    }
}
