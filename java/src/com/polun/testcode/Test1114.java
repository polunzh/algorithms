package com.polun.testcode;

import edu.princeton.cs.algs4.StdOut;

public class Test1114 {
	public static void main(String[] args) {
		StdOut.println(lg(2, 30000));
	}

	private static int lg(int m, int n) {
		int index = 1;
		while (pow(m, index) <= n) {
			index++;
		}

		return index - 1;
	}

	private static int pow(int m, int n) {
		int res = 1;
		while (n > 0) {
			res *= m;
			n--;
		}

		return res;
	}
}