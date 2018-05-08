package com.polun.testcode;

import edu.princeton.cs.algs4.StdOut;
import edu.princeton.cs.algs4.StdRandom;

public class Test1113 {
    public static void main(String[] args) {
        int[][] arr = new int[5][5];

        for (int row = 0; row < arr.length; row++) {
            for (int col = 0; col < arr[0].length; col++) {
                arr[row][col] = (int) (StdRandom.uniform() * 10);
                StdOut.print(arr[row][col] + "   ");
            }
            StdOut.println();
        }
        StdOut.println("--------------------");
        for (int col = 0; col < arr[0].length; col++) {
            for (int row = 0; row < arr.length; row++) {
                StdOut.print(arr[row][col] + "   ");
            }
            StdOut.println();
        }
    }
}