class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const numSet = new Set(nums);
        let longestStreak = 0;


        for(const num of nums){
            
            // We find the start num of the streak, 
            // so if the num has a prev num, 
            // it is not the first num of streak
            if(!numSet.has(num - 1)){
                let curNum = num;
                let curStreak = 1;

                while(numSet.has(curNum + 1)){
                    curNum += 1;
                    curStreak += 1
                }

                longestStreak = Math.max(longestStreak, curStreak)
            }
        }

        return longestStreak
    }
}
