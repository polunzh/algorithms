/**
 * author: polun
 * date: 2016年5月4日 下午11:11:17
 * 下压堆栈，可变数组实现
 */
package com.polun.testcode;

import com.polun.ch01.LinkedList4Bag;
import com.polun.ch01.LinkedList4Queue;
import com.polun.ch01.LinkedList4Stack;
import com.polun.ch01.ResizingArrayStack;

import edu.princeton.cs.algs4.StdOut;

/**
 * @author polun
 *
 */
public class TestResizingArrayStack {
	public static void main(String[] args) {
		LinkedList4Stack<String> stack = new LinkedList4Stack<String>();
		LinkedList4Bag<String> bag = new LinkedList4Bag<String>();
		LinkedList4Queue<String> queue = new LinkedList4Queue<String>();

		for (int index = 0; index < 100; index++) {
			String str = "zhang" + (index + 1);
			bag.add(str);
			stack.push(str);
			queue.enqueue(str);
		}

		// for (String item : stack) {
		// StdOut.println(item);
		// }

		// for (String item : bag) {
		// StdOut.println(item);
		// }
		for (String item : queue) {
			StdOut.println(item);
		}

		StdOut.println(queue.size());
	}
}
