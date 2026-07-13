class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        let stack = []
        for(let token of tokens){
            if(token === '+'){
                let a = stack.pop()
                let b = stack.pop()
                let sum = a + b
                stack.push(sum)
            }else if(token === '-'){
                let a = stack.pop()
                let b = stack.pop()
                let sum = b - a
                stack.push(sum)
            }else if(token === '*'){
                let a = stack.pop()
                let b = stack.pop()
                let sum = a * b
                stack.push(sum)
            }else if(token === '/'){
                let a = stack.pop()
                let b = stack.pop()
                let sum = Math.trunc(b / a)
                stack.push(sum)
            }else{
                stack.push(Number(token))
            }
        }
        return stack[0]
    }
}
