class MinStack {
    stack: { value: number; min: number }[];
    constructor() {
        this.stack = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val: number): void {
        const min = this.stack.length > 0 ? this.stack[0].min : undefined
        this.stack.unshift({value: val, min: (val > (min) ? min : val) })
    }

    /**
     * @return {void}
     */
    pop(): void {
        this.stack.shift()
    }

    /**
     * @return {number}
     */
    top(): number {
        return this.stack[0].value
    }

    /**
     * @return {number}
     */
    getMin(): number {
        return this.stack[0].min
    }
}
