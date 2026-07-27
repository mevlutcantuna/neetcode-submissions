class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target: number, position: number[], speed: number[]): number {
        const cars = position
            .map((pos, i) => ({
                position: pos,
                time: (target - pos) / speed[i],
            }))
            .sort((a, b) => b.position - a.position);

        let fleet = 0;
        let currentFleetTime = 0;

        for (const car of cars) {
            if (car.time > currentFleetTime) {
                fleet++;
                currentFleetTime = car.time;
            }
        }
        return fleet;
    }
}
