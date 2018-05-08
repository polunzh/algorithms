package com.polun.testcode;

import edu.princeton.cs.algs4.StdOut;

public class Test1116 {
	public static void main(String[] args) {
		StdOut.print(exR1(6));
	}

	public static String exR1(int n) {
		if (n <= 0) {
			return "";
		}

		StdOut.println(n);
		return exR1(n - 3) + n + exR1(n - 2) + n;
	}
}