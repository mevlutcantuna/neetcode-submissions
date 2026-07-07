class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let map1 = new Map()
        let map2 = new Map()

        if(s.length !== t.length) return false

        for(let i = 0; i < s.length; i++){
            map1.set(s[i], (map1.get(s[i]) ?? 0) + 1)
            map2.set(t[i], (map2.get(t[i]) ?? 0) + 1)
        }

        for(const c of s){
            if(map1.get(c) !== map2.get(c)) return false
        }

        return true

    }
}
