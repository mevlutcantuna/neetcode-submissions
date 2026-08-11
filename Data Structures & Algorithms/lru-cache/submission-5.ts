class DoublyLinkedListNode {
    key: number;
    value: number;
    next: DoublyLinkedListNode | null = null;
    prev: DoublyLinkedListNode | null = null;

    constructor(key: number, value: number) {
        this.key = key;
        this.value = value;
    }
}

class LRUCache {
    private capacity: number;
    private cache = new Map<number, DoublyLinkedListNode>();
    private head: DoublyLinkedListNode | null = null; // LRU
    private tail: DoublyLinkedListNode | null = null; // MRU

    constructor(capacity: number) {
        this.capacity = capacity;
    }

    get(key: number): number {
        const node = this.cache.get(key);

        if (!node) return -1;

        this.remove(node);
        this.add(node);

        return node.value;
    }

    put(key: number, value: number): void {
        const node = this.cache.get(key);

        if (node) {
            node.value = value;
            this.remove(node);
            this.add(node);
            return;
        }

        const newNode = new DoublyLinkedListNode(key, value);

        this.cache.set(key, newNode);
        this.add(newNode);

        if (this.cache.size > this.capacity) {
            const lruNode = this.head!;

            this.remove(lruNode);
            this.cache.delete(lruNode.key);
        }
    }

    // Make node the most recently used.
    private add(node: DoublyLinkedListNode): void {
        node.next = null;

        if (this.tail === null) {
            node.prev = null;
            this.head = node;
            this.tail = node;
        } else {
            node.prev = this.tail;
            this.tail.next = node;
            this.tail = node; // essential
        }
    }

    private remove(node: DoublyLinkedListNode): void {
        if (node.prev) {
            node.prev.next = node.next;
        } else {
            this.head = node.next;
        }

        if (node.next) {
            node.next.prev = node.prev;
        } else {
            this.tail = node.prev;
        }

        node.prev = null;
        node.next = null;
    }
}