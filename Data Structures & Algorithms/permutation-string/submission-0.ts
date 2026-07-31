class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1: string, s2: string): boolean {
        let left = 0;
        let right = s1.length - 1;

        while(left <= right && right < s2.length && left < s2.length){
            if(this.check(s1, s2.slice(left, right + 1))){
                return true
            }else {
                left++
                right++
            }
        }

        return false
    }

    check(s1: string, s2:string): boolean{
        if(s1.length !== s2.length) return false

        let map1 = new Map();
        let map2 = new Map();

        for(const char of s1){
            map1.set(char, (map1.get(char) ?? 0) + 1);
        }

        for(const char of s2){
            map2.set(char, (map2.get(char) ?? 0) + 1);
        }

        for(const char of s1){
            if(map1.get(char) !== map2.get(char)){
                return false
            }
        }

        return true;
    }
}
