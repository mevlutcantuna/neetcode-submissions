class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const seen = new Set();

        for(let c = 0; c < 9; c++){
            for(let r = 0; r < 9; r++){
                const val = board[r][c];

                // skip empty boxes
                if(val === ".") continue;

                const rowKey = `row-${r}-${val}`;
                const colKey = `col-${c}-${val}`;
                const boxKey = `box-${Math.floor(r / 3)}-${Math.floor(c / 3)}-${val}`;


                if(seen.has(rowKey) || seen.has(colKey) || seen.has(boxKey)){
                    return false
                };

                seen.add(rowKey)
                seen.add(colKey)
                seen.add(boxKey)
            }
        }

        return true
    }
}
