package com.polun.testcode;

import edu.princeton.cs.algs4.StdOut;
import edu.princeton.cs.algs4.StdRandom;

public class Test1115 {
    public static void main(String[] args) {
        int[] arr = new int[6];
        boolean isInRange = true;
        int m = 5;
        for (int i = 0; i < arr.length; i++ ) {
            int n = (int)(StdRandom.uniform() * 10);
            arr[i] = n;
            if (n > m - 1) {
                n = m - 1;
            }
            if (n < 0 || n > m - 1) {
                isInRange = false;
            }

            StdOut.print(n + "  ");
        }

        StdOut.println();

        int[] res = histogram(arr, m);

        for (int i = 0; i < res.length; i++ ) {
            StdOut.print(res[i] + "  ");
        }

        StdOut.println();
        if (isInRange) {
            StdOut.println(sum(res) + "||" + arr.length);
        }
    }

    public static int[] histogram(int[] arr, int m) {
        int[] res = new int[m];

        for (int i = 0; i < m; i++ ) {
            res[i] = count(arr, i + 1);
        }

        return res;
    }

    public static int count(int[] arr, int key) {
        int c = 0;
        for (int i = 0; i < arr.length; i++ ) {
            if (arr[i] == key) {
                c++;
            }
        }

        return c;
    }

    public static int sum(int[] arr) {
        int sum = 0;

        for (int i = 0; i < arr.length; i++ ) {
            sum += arr[i];
        }

        return sum;
    }
}