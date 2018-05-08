/**
 * author: polun
 * date: 2016年5月6日 上午12:07:09
 * 队列的链表实现
 */
package com.polun.ch01;

import java.util.Iterator;

/**
 * @author polun
 *
 */
public class LinkedList4Queue<Item> implements Iterable<Item> {
	public int size() {
		return this.N;
	}

	public boolean isEmpty() {
		return this.first == null;
	}

	/**
	 * 队尾添加元素
	 * 
	 * @param item
	 */
	public void enqueue(Item item) {
		Node oldLast = last;
		last = new Node();
		last.item = item;
		last.next = null;
		this.N++;
		if (isEmpty()) {
			first = last;
		} else {
			oldLast.next = last;
		}
	}

	public Item dequeue() {
		Node oldFirst = first;
		Item item = oldFirst.item;
		first = first.next;
		oldFirst = null;
		this.N--;
		if (isEmpty()) {
			last = null;
		}
		return item;
	}

	@Override
	public Iterator<Item> iterator() {
		return new QueueIterator();
	}

	private int N;
	private Node first;
	private Node last;

	private class Node {
		Item item;
		Node next;
	}

	private class QueueIterator implements Iterator<Item> {
		private Node current = first;

		@Override
		public boolean hasNext() {
			return current != null;
		}

		@Override
		public Item next() {
			Item it = current.item;
			current = current.next;
			return it;
		}

	}
}