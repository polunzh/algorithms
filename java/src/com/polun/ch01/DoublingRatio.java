package com.polun.ch01;

import edu.princeton.cs.algs4.StdOut;

/**
 * @author: 张振强/polun
 * @datetime: 2016/5/11 8:53
 */
public class DoublingRatio {
    public static void main(String[] args) {
        double prev = DoublingTest.timeTial(125);
        for (int N = 250; N < 8000; N += N) {
            double time = DoublingTest.timeTial(N);
            StdOut.printf("%6d %7.1f", N, time);
            StdOut.printf("%5.1f\n", time / prev);
            prev = time;
        }
    }
}
