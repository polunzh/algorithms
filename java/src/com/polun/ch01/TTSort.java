/**
 * author: polun	
 * date: 2016年5月7日 上午11:55:52
 *
 */
package com.polun.ch01;

import java.util.Random;

import edu.princeton.cs.algs4.StdOut;

/**
 * 各种排序算法
 * 
 * @author polun
 */
public class TTSort {
	public static void main(String[] args) {
		int countNumber = 100000000;
		int[] array = new int[countNumber];
		Random random = new Random();
		System.out.println("开始");
		for (int i = 0; i < countNumber; i++) {
			array[i] = random.nextInt(80);
		}
		StdOut.println();
		long startTime = System.currentTimeMillis();
		int[] bucketArray = new int[81];
		for (int i = 0; i < array.length; i++) {
			bucketArray[array[i]]++;
		}

//		for (int i = 0; i < bucketArray.length; i++) {
//			for (int j = 0; j < bucketArray[i]; j++) {
//				StdOut.println(i);
//			}
//		}

		long endTime = System.currentTimeMillis();
		System.out.println("桶排序用了:" + (endTime - startTime) + "ms");

		bubbleSort(array);

	}

	public static void bubbleSort(int[] array) {
		System.out.println("开始排序");
		long startTime = System.currentTimeMillis();
		for (int i = 0; i < array.length - 1; i++) {
			for (int j = 0; j < array.length - i - 1; j++) {
				if (array[j] < array[j + 1]) {
					int temp = array[j];
					array[j] = array[j + 1];
					array[j + 1] = temp;
				}
			}
		}
		long endTime = System.currentTimeMillis();
		System.out.println("冒泡结束排序,用了:" + (endTime - startTime) + "ms");

		// for (int i = 0; i < array.length; i++) {
		// StdOut.println(array[i]);
		// }
	}
}
