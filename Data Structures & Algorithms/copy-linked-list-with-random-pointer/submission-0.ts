// class Node {
//   constructor(val, next = null, random = null) {
//       this.val = val;
//       this.next = next;
//       this.random = random;
//   }
// }

class Solution {
    /**
     * @param {Node} head
     * @return {Node}
     */
    copyRandomList(head: Node | null): Node {
        if (!head) return null;

        const copies = new Map<Node, Node>();

        let cur: Node | null = head;
        while (cur) {
            copies.set(cur, new Node(cur.val));
            cur = cur.next;
        }


        cur = head;
        while(cur){
            const copy = copies.get(cur);
            copy.next = cur.next ? copies.get(cur.next) : null;
            copy.random = cur.random ? copies.get(cur.random) : null;
            cur = cur.next;
        }

        return copies.get(head);
    }
}
