package com.polun.testcode;

import edu.princeton.cs.algs4.StdOut;

public class Test113 {
    public static void main(String[] args) {
        if (args.length < 3) {
            StdOut.println("must be three args");
        } else {
            int a = Integer.parseInt(args[0]);
            int b = Integer.parseInt(args[1]);
            int c = Integer.parseInt(args[2]);
            if (a==b&&b==c) {
                StdOut.println("equal");
            } else{
                StdOut.println("not equal");
            }
        }
    }
}