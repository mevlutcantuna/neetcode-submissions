class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const n = temperatures.length;
        const ans = new Array(n).fill(0)
        const stack = new Array();

        for(let i=0;i<n;i++){
            const temp = temperatures[i];
            while(stack.length>0 && temp>temperatures[stack[stack.length-1]]){
                const ind=stack.pop();
                ans[ind]=i-ind;
            }
            stack.push(i);
        }

        return ans;
    }
}
