/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode {
        let dummy = new ListNode();
        let tail = dummy;

        let first = l1;
        let second = l2;
        let carry = 0;

        while (first || second || carry) {
            const firstNumber = first ? first.val : 0;
            const secondNumber = second ? second.val : 0;

            const sum = firstNumber + secondNumber + carry;
            carry = Math.floor(sum / 10);

            tail.next = new ListNode(sum % 10);
            tail = tail.next;

            first = first ? first.next : null;
            second = second ? second.next : null;
        }

        return dummy.next;
    }
}
