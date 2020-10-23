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

//Basic Linked List Operations

// isEmpty() The basic condition for our list to be empty is 
// that the head points to null

class LinkedList {
    constructor() {
        this.head = null;
    }
}

class Node {
    constructor(data) {
        this.data = data;
        this.nextElement = null;
    }
}

LinkedList.prototype.isEmpty = function() {
    return(this.head == null) //returns true if head is false
}

let list = new LinkedList();
console.log(list.isEmpty()); //will print true

// Single list insertion

// Insertion at head: insert as the first value of the list
// the head will point to the newly added node, whose nextElement will
// point to the node previously pointed by the head or null value

//Insertion at tail: insert a new element as the last element of the list
// the original tail element of the list has a nextElement that 
// points to null


// Insert at the nth node: specify a node, n, after which we want to 
// insert a new node. 1. Traverse the linked list to look for the nth
// node. 2. assign a new node's nextElement to the nth node's
// nextElement. 3. point the nth node's nextElement to the new node.


// Implementing insertAtHead

LinkedList.prototype.insertAtHead = function(newData) {
    let tempNode = new Node(newData);
    tempNode.nextElement = this.head;
    this.head = tempNode;
    return this;
}

let list = new LinkedList();
for (let i = 0; i < 10; i++) {
    list - list.insertAtHead(i)
}
list.printList(); //will print the list

// Challenge one: insertion at tail

LinkedList.prototype.insertAtTail = function(newData) {
    //Creating a new Node with value data
    let node = new Node(newData);
    //Write code here
    if(this.isEmpty()) {
      this.head = node
    } else {
      let check = this.head
      while(check.nextElement !== null) {
        check = check.nextElement
      }
      check.nextElement = node
    }
    return this;
}