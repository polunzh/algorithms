package com.polun.testcode;

import edu.princeton.cs.algs4.StdOut;

public class Test119 {
    public static void main(String[] args) {
        StdOut.println(toBirnaryString(10));
    }

    private static String toBirnaryString(int n) {
        String str = "";
        for (int i = n; i > 0; i /= 2) {
            str = i % 2 + str;
        }

        return str;
    }
}