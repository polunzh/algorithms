/**
 * author: polun
 * date: 2016��4��28�� ����12:38:58
 */
package com.polun.ch01;

import java.util.Iterator;

/**
 * �ɱ�����ջʵ��
 * 
 * @author polun
 *
 */
public class ResizingArrayStack<Item> implements Iterable<Item> {
	private Item[] items = (Item[]) new Object[1];

	private int N = 0;

	public int size() {
		return this.N;
	}

	public boolean isEmpty() {
		return N == 0;
	}

	public void push(Item item) {
		items[N++] = item;
		if (N == items.length) {
			resize(2 * items.length);
		}
	}

	private void resize(int max) {
		Item[] tempItemArray = (Item[]) new Object[max];
		for (int i = 0; i < N; i++) {
			tempItemArray[i] = this.items[i];
		}
		this.items = tempItemArray;
	}

	public Item pop() {
		Item m = items[--N];
		items[N] = null; // �����������
		if (N > 0 && N == items.length / 4) {
			this.resize(items.length / 2);
		}
		return m;
	}

	@Override
	public Iterator<Item> iterator() {
		return new ReverseArrayIterator();
	}

	private class ReverseArrayIterator implements Iterator<Item> {
		// ����ȳ��ĵ���
		private int index = N;

		@Override
		public boolean hasNext() {
			return index > 0;
		}

		@Override
		public Item next() {
			return items[--index];
		}

	}

}
