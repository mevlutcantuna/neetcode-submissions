class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles: number[], h: number): number {
        let left = 1;
        let right = Math.max(...piles);

        while (left < right) {
            const speed = Math.floor((left + right) / 2);
            let hoursNeeded = 0;

            for (const pile of piles) {
                hoursNeeded += Math.ceil(pile / speed);
            }

            if (hoursNeeded <= h) {
                right = speed;
            } else {
                left = speed + 1;
            }
        }

        return left;
    }
}
