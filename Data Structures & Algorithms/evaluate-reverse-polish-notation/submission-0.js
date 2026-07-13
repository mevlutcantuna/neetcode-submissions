class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const stack = [];

        for (const token of tokens) {
            switch (token) {
                case "+": {
                    stack.push(stack.pop() + stack.pop());
                    break;
                }
                case "-": {
                    const a = stack.pop();
                    const b = stack.pop();
                    stack.push(b - a);
                    break;
                }
                case "*": {
                    stack.push(stack.pop() * stack.pop());
                    break;
                }
                case "/": {
                    const a = stack.pop();
                    const b = stack.pop();
                    stack.push(Math.trunc(b / a));
                    break;
                }
                default:
                    stack.push(Number(token));
            }
        }

        return stack[0];
    }
}