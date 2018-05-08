class Node {
    constructor(element) {
        this.element = element;
        this.previous = null;
        this.next = null;
    }
}

class DuLinkedList {
    constructor() {
        this.head = new Node('header');
    }

    find(item) {
        let current = this.head;
        while (current !== null &&
            current.element !== item) {
            current = current.next;
        }

        return current;
    }

    insert(element, item) {
        const newNode = new Node(element);
        const current = this.find(item);
        if (current !== null) {
            newNode.next = current.next;
            newNode.previous = current;
            current.next = newNode;
        }
    }

    display() {
        let current = this.head;
        while (current !== null) {
            console.log(current.element);
            current = current.next;
        }
    }

    dispalyReverse() {
        let last = this.findLast();
        while (last !== null) {
            console.log(last.element);
            last = last.previous;
        }
    }

    findLast() {
        let current = this.head;
        while (current.next !== null) {
            current = current.next;
        }

        return current;
    }

    remove(item) {
        const node = this.find(item);
        if (node !== null) {
            node.previous.next = node.next;
            node.next.previous = node.previous;
            node.next = null;
            node.previous = null;
        }
    }
}

const llist = new DuLinkedList();
llist.insert('zhang', 'header');
llist.insert('zhen', 'zhang');
llist.insert('qiang', 'zhen');
console.log('display...');
llist.display();
console.log('reverse display...');
llist.dispalyReverse();
console.log('remove...');
llist.remove('zhen');
llist.display();