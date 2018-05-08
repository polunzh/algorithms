/**
 * author: polun
 * date: 2016年5月4日 下午11:52:23
 * 下压堆栈，链表实现
 */
package com.polun.ch01;

import java.util.Iterator;

import edu.princeton.cs.algs4.StdOut;

/**
 * @author polun
 *
 */
public class LinkedList4Stack<Item> implements Iterable<Item> {
	private int N;
	private Node first;

	private class Node {
		Item item;
		Node next;
	}

	public boolean isEmpty() {
		return first == null;
	}

	public int size() {
		return this.N;
	}

	public void push(Item item) {
		Node oldFirstNode = first;
		first = new Node();
		first.item = item;
		first.next = oldFirstNode;
		N++;
	}

	public Item pop() {
		Item firstItem = first.item;
		first = first.next;
		N--;
		return firstItem;
	}

	@Override
	public Iterator<Item> iterator() {
		return new ReverseArrayIterator();
	}

	private class ReverseArrayIterator implements Iterator<Item> {
		private Node node = first;

		@Override
		public boolean hasNext() {
			return node != null;
		}

		@Override
		public Item next() {
			Node n = node;
			node = n.next;
			return n.item;
		}
	}
}
