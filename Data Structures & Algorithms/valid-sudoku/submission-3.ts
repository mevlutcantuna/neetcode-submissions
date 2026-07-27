class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board: string[][]): boolean {
        let seen = new Set();

        for (let row = 0; row < 9; row++) {
            for (let col = 0; col < 9; col++) {
                const cell = board[row][col];
                if (cell === ".") continue;

                const rowKey = `row: ${row}, cell: ${cell}`;
                const colKey = `col: ${col}, cell: ${cell}`;
                const boxNum = 3 * Math.floor(col / 3) + Math.floor(row / 3);
                const boxKey = `box: ${boxNum}, cell: ${cell}`;

                if (seen.has(rowKey) || seen.has(colKey) || seen.has(boxKey)) return false;
                seen.add(rowKey);
                seen.add(colKey);
                seen.add(boxKey);
            }
        }

        return true;
    }
}
