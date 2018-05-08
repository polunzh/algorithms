class Node {
    constructor(element) {
        this.element = element;
        this.next = null;
    }
}

class LinkedList {
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

    findPrevious(item) {
        let current = this.head;
        while (current.next !== null &&
            current.next.element !== item) {
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
        while (current !== null) {
            console.log(current.element);
            current = current.next;
        }
    }

    remove(item) {
        const previous = this.findPrevious(item);
        if (previous !== null) {
            previous.next = previous.next.next;
        }
    }
}

const llist = new LinkedList();
llist.insert('zhang', 'header');
llist.insert('zhen', 'zhang');
llist.insert('qiang', 'zhen');
llist.display();
llist.remove('zhen');
llist.display();