package com.polun.testcode;

import edu.princeton.cs.algs4.StdOut;
import edu.princeton.cs.algs4.StdRandom;

public class Test1111 {
    public static void main(String[] args) {
        boolean[][] arr = new boolean[6][8];

        for (int i = 0; i < arr.length; i++ ) {
            for (int j = 0; j < arr[i].length ; j++ ) {
                int n = (int)(StdRandom.uniform() * 10);
                arr[i][j] = n % 2 == 0;
            }
        }

        outputStars(arr);
    }

    public static void outputStars(boolean[][] arr) {
        StdOut.print("  ");
        for (int i = 0; i < arr[0].length; i++ ) {
            StdOut.print((i + 1) + "  ");
        }
        StdOut.println();


        for (int i = 0; i < arr.length; i++ ) {
            StdOut.print((i + 1) + " ");
            for (int j = 0; j < arr[i].length ; j++ ) {
                String star = arr[i][j]? "*  " : "   ";
                StdOut.print(star);
            }
            StdOut.println();
        }
    }
}