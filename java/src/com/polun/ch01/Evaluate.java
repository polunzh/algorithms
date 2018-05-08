/**
 * author: polun
 * date: 2016年4月27日 下午11:16:11
 */
package com.polun.ch01;

import edu.princeton.cs.algs4.Stack;
import edu.princeton.cs.algs4.StdIn;
import edu.princeton.cs.algs4.StdOut;

/**
 * Dirjkstra双栈算术表达式求职算法
 * 
 * @author polun
 *
 */
public class Evaluate {
	public static void main(String[] args) {
		Stack<String> ops = new Stack<String>();
		Stack<Double> vals = new Stack<Double>();
		while (!StdIn.isEmpty()) {
			String str = StdIn.readString();
			if (str.equals("(")) {
			} else if (str.equals("+")) {
				ops.push("+");
			} else if (str.equals("-")) {
				ops.push("-");
			} else if (str.equals("*")) {
				ops.push("/");
			} else if (str.equals(")")) {
				String op = ops.pop();
				double val = vals.pop();
				switch (op) {
				case "+":
					val += vals.pop();
					break;
				case "-":
					val -= vals.pop();
					break;
				case "*":
					val *= vals.pop();
				case "/":
					val /= vals.pop();
					break;
				}

				vals.push(val);
			} else {
				vals.push(Double.parseDouble(str));
			}
		}

		StdOut.println(vals.pop());
	}
}
