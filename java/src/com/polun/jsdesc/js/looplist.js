class Node {
    constructor(element) {
        this.element = element;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = new Node('head');
        this.head.next = this.head;
    }

    find(item) {
        let current = this.head;
        while (current.element !== item &&
            current.element !== 'head') {
            current = current.next;
        }

        return current;
    }

    findPrevious(item) {
        let current = this.head;
        while (current.next.element !== item &&
            current.next.element !== 'head') {
            current = current.next;
        }

        return current;
    }

    insert(element, item) {
        const current = this.find(item);
        if (current === null) {
            throw new Error('did\'t find item');
        }
        const newNode = new Node(element);
        newNode.next = current.next;
        current.next = newNode;
    }

    display() {
        let current = this.head;
        do {
            console.log(current.element);
            current = current.next;
        } while (current.element !== 'head');
    }

    remove(item) {
        const previous = this.findPrevious(item);
        if (previous !== null) {
            previous.next = previous.next.next;
        }
    }
}

const llist = new LinkedList();
llist.insert('zhang', 'head');
llist.insert('zhen', 'zhang');
llist.insert('qiang', 'zhen');
llist.display();
llist.remove('zhen');
llist.display();