/**
 * author: polun
 * date: 2016年5月5日 下午11:43:29
 * 背包的链表实现
 */
package com.polun.ch01;

import java.util.Iterator;

/**
 * @author polun
 *
 */
public class LinkedList4Bag<Item> implements Iterable<Item> {
	public int size() {
		return this.N;
	}

	public boolean isEmpty() {
		return first == null;
	}

	public void add(Item item) {
		Node oldFirst = first;
		first = new Node();
		first.item = item;
		first.next = oldFirst;
		this.N++;
	}

	private int N;
	private Node first;

	private class Node {
		Item item;
		Node next;
	}

	@Override
	public Iterator<Item> iterator() {
		return new ListIterator();
	}

	private class ListIterator implements Iterator<Item> {
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
