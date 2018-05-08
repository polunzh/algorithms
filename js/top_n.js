/**
 * 问题：多个有序链表求top n
 * 思路：可以将多个链表的集合看做一个堆，每次从堆中取出一个最大的值；
 *      从堆中取出最大值得方法：取出每个有序链表的 header 节点，找到值最大的那个节点，
 *      然后将该节点所在的链表的 header 指向下一个节点，这样就能保证每次取出的是所有链表中最大的那个节点的值；
 * 简单起见，默认链表是降序
 */
const { generateNodeList, printList } = require('./util');

class ListsArray {
  constructor(lists) {
    this.lists = lists;
  }

  /**
   *
   * @param {number} n
   */
  findTop(n) {
    if (n < 0) {
      return 0;
    }

    let result = 0;
    let counter = 0;
    let maxValue = this.popFromLists();
    while (maxValue && counter++ < n) {
      result += maxValue;
      maxValue = this.popFromLists();
    }

    return result;
  }

  popFromLists() {
    let listIndex = -1;
    let maxValue;
    this.lists.forEach((list, index) => {
      if (list) {
        if (listIndex === -1 || maxValue < list.value) {
          maxValue = this.lists[index].value;
          listIndex = index;
        }
      }
    });

    if (listIndex === -1) {
      return;
    }

    const value = this.lists[listIndex].value;
    this.lists[listIndex] = this.lists[listIndex].next;

    return value;
  }
}

const lists = [
  generateNodeList([19, 18, 3]),
  generateNodeList([37, 10, 2, 1]),
  generateNodeList([30, 19, 12, 10, 8]),
];

const listsArray = new ListsArray(lists);

const res = listsArray.findTop(12);
console.log(res);
