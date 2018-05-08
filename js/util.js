class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

/**
 *
 * @param {array} arr
 */
const generateNodeList = arr => {
  const header = new ListNode(arr[0]);
  let cur = header;
  for (let i = 1; i < arr.length; i++) {
    const node = new ListNode(arr[i]);
    cur.next = node;
    cur = node;
  }

  return header;
};

/**
 *
 * @param {Array} lists
 */
const printList = lists => {
  lists.forEach(list => {
    let cur = list;
    while (cur) {
      console.log(cur.value);
      cur = cur.next;
    }
    console.log('=>>>>>>>');
  });
};

module.exports = { generateNodeList, printList };
