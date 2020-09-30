// Linked lists are formed by nodes that are linked together like a 
// chain. Each node holds data and a forward pointer so it is 
// unidirectional (single linked lists)

// Node class
// two components: data & pointer

class Node {
    constructor(data) {
        this.data = data;
        this.nextElement = null;
    }
}

// LinkedList class
// a collection of Node objects, need a pointer to the first Node (head
// node)

class LinkedList {
    constructor() {
        //head will be at the top of the list
        this.head = null;
    }
}

