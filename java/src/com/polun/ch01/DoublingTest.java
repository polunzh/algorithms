package com.polun.ch01;

import edu.princeton.cs.algs4.StdOut;
import edu.princeton.cs.algs4.StdRandom;

/**
 * @author: 张振强/polun
 * @datetime: 2016/5/10 22:56
 */
public class DoublingTest {
    public static double timeTial(int N) {
        int MAX = 1000000;
        int[] arr = new int[N];
        for (int i = 0; i < N; i++) {
            arr[i] = StdRandom.uniform(-MAX, MAX);
        }

        StopWatcher timer = new StopWatcher();
        int cnt = ThreeSum.count(arr);
//        StdOut.printf("共%d个", cnt);

        return timer.elapseTime();
    }

    public static void main(String[] args) {
        for (int N = 250; N < 10000; N += N ) {
            double time = timeTial(N);
            StdOut.printf("%7d %5.1f\n", N, time);
        }
    }
}