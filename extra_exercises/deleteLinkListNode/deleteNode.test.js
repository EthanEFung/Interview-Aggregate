it("should delete a node", function() {
  function LinkedListNode(value) {
    this.value = value;
    this.next = null;
  }

  const one = new LinkedListNode(1);
  const two = new LinkedListNode(2);
  const three = new LinkedListNode(3);
  const four = new LinkedListNode(4);
  one.next = two;
  two.next = three;
  three.next = four;

  function deleteNode(node) {
    node.value = node.next.value;
    node.next = node.next.next;
  }

  deleteNode(three);
  const expected = {
    value: 1,
    next: { value: 2, next: { value: 4, next: null } }
  };

  expect(one).toEqual(expected);
});
