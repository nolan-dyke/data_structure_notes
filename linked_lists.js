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

// Solution almost identical to my function

LinkedList.prototype.insertAtTail = function(newData) {
  //Creating a new Node with data as newData
  let node = new Node(newData);

  //check for case when list is empty
  if (this.isEmpty()) {
    //Needs to Insert the new node at Head
    this.head = node;
    return this;
  }

  //Start from head
  let currentNode = this.head;

  //Iterate to the last element
  while (currentNode.nextElement != null) {
    currentNode = currentNode.nextElement;
  }

  //Make new node the nextElement of last node of list
  currentNode.nextElement = node;
  return this;
}

// Search

LinkedList.prototype.search = function(value) {
  let currentNode = this.head;

  while(currentNode.nextElement !== null) {
    if(currentNode.data == value) {
      return true;
    } else {
      currentNode = currentNode.nextElement;
    }
  }

  return false;
}

// Deletions
// Deletion at head

LinkedList.prototype.deleteAtHead = function() {
    //if list is empty, do nothing
    if (this.isEmpty()) {
      return this;
    }
    //Get the head and first element of the list
    let firstElement = this.head;
  
    //If list is not empty, link head to the nextElement of firstElement
    this.head = firstElement.nextElement;
  
    return this;
  }

// Deletion by value

LinkedList.prototype.deleteVal = function(value) {
    let deleted = false; //True or False
    let currentNode = this.head;
  
    while(currentNode.nextElement !== null){
      let nextNode = currentNode.nextElement
      if(nextNode.data == value) {
        currentNode.nextElement = nextNode.nextElement
        deleted = true;
      } else {
        currentNode = currentNode.nextElement
      }
    }
  
    return deleted;
  }

// Solution

LinkedList.prototype.deleteVal = function(value) {
  
    //if list is empty return false
    if (this.isEmpty()) {
      return false;
    }
  
    //else get pointer to head
    let currentNode = this.head;
    // if first node's is the node to be deleted, delete it and return true
    if (currentNode.data == value) {
      this.head = currentNode.nextElement;
      return true;
    }
  
    // else traverse the list
    while (currentNode.nextElement != null) {
      // if a node whose next node has the value as data, is found, delete it from the list and return true
      if (currentNode.nextElement.data == value) {
        currentNode.nextElement = currentNode.nextElement.nextElement;
        return true;
      }
      currentNode = currentNode.nextElement;
    }
    //else node was not found, return false
    return false;
  }

