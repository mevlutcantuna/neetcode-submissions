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
     * @param {ListNode} head
     * @return {void}
     */
    reorderList(head: ListNode | null): void {
        // split half
        let slow = head;
        let fast = head;
        while(fast.next && fast.next.next){
            slow = slow.next // one step
            fast = fast.next.next // two step
        }

        // reverse the second half
        let second = slow.next;
        slow.next = null
        let dummy = null
        while(second){
            let next = second.next;
            second.next = dummy;
            dummy = second;
            second = next;
        }

        second = dummy;

        // merge
        let first = head;
        while(second){
            let tmp1 = first.next;
            let tmp2 = second.next;
            first.next = second;
            second.next = tmp1;
            first = tmp1;
            second = tmp2;
        }
    }
}
