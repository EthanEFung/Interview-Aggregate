const LinkedListNode = value => {
  this.value = value;
  this.next = null;
};

const three = new LinkedListNode(3);
three.next = new LinkedListNode(4);

const test = {
  value: 1,
  next: { value: 2, next: three }
};

function deleteNode(node) {
  node = node.next;
}

deleteNode(three);
