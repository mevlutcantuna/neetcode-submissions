class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        
        // sort by position
        const cars = position.map((p,i) => [p, speed[i]]);
        cars.sort((a,b) => a[0] - b[0]);

        let fleets = 0;
        let maxTime = 0;

        for (let i = cars.length - 1; i >= 0; i--) {
            const [pos, spd] = cars[i];
            const time = (target - pos) / spd;

            if(time > maxTime){
                fleets++
                maxTime = time;
            }
        }

        return fleets;
    }
}
