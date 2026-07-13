class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        const cars = position.map((p, i) => [p, speed[i]]);
        cars.sort((a, b) => a[0] - b[0]);

        const stack = [];

        for (let i = cars.length - 1; i >= 0; i--) {
            const [pos, spd] = cars[i];
            const time = (target - pos) / spd;

            stack.push(time);

            if (
                stack.length >= 2 &&
                stack[stack.length - 1] <= stack[stack.length - 2]
            ) {
                stack.pop();
            }
        }

        return stack.length;
    }
}