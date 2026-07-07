class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let res = ""
        for(let s of strs){
            res += `${s.length}#${s}`
        }
        return res
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let res = [];
        let i = 0;

        while(i < str.length){
            let j = i;
            while(str[j] !== '#'){
                j++
            }

            let length = parseInt(str.substring(i,j)); // find length of the word
            i = j + 1; // set i as first char of word
            j = i + length; // set j last char of word
            res.push(str.substring(i, j)); // get word
            i = j; // j and i get same point and continue
        }

        return res;
    }
}
