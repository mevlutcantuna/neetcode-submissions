class TimeMap {
    // like ["foo", [[1, "bar"]]]
    data: Map<string, [number, string][]>;

    constructor() {
        this.data = new Map();
    }

    set(key: string, value: string, timestamp: number): void {
        const history = this.data.get(key)
        if (history) {
            history.push([timestamp, value])
        } else {
            this.data.set(key, [[timestamp, value]])
        }
    }

    get(key: string, timestamp: number): string {
        const history = this.data.get(key);

        if (!history) return "";

        let left = 0;
        let right = history.length - 1;
        let response = ""

        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            const [storedTimestamp, value] = history[mid]

            if (storedTimestamp <= timestamp) {
                response = value;
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        return response
    }
}
