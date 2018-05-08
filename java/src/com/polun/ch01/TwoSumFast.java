
/**
 * author: polun
 * date: 2016年5月8日 下午10:39:24
 */
package com.polun.ch01;

import java.util.Arrays;

import edu.princeton.cs.algs4.In;
import edu.princeton.cs.algs4.StdOut;

/**
 * @author polun
 *
 */
public class TwoSumFast {
	public static void main(String[] args) {
		In in = new In(args[0]);
		int[] allData = in.readAllInts();
		int cnt = count(allData);
		StdOut.println(cnt);
	}

	public static int count(int[] arr) {
		int result = 0;
		int N = arr.length;
		Arrays.sort(arr);
		for (int i = 0; i < N; i++) {
			if (BinarySearch.rank(-arr[i], arr) > i) {
				result++;
			}
		}

		return result;
	}
}
