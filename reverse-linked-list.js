// Reverse a single linked list

// Node class definition
class Nodes {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

// Create a linked list
const list = [9,8,0,7,2,1].reduce((acc, val) => new Nodes(val, acc), null);

// Function to print a single linked list
var printList = (head) => {
    if (!head) {
        return;
    }

    console.log(head.value);
    printList(head.next);
}

var reverseList = function(head) {
    let wholeTail = null;
    let currentNode = head;

    while(currentNode) {
        let nextNode = currentNode.next;
        currentNode.next = wholeTail;
        wholeTail = currentNode;
        currentNode = nextNode;
    }

    return wholeTail;
};

console.log('Original list:');
printList(list);
console.log('Reversed list:');
printList(reverseList(list))