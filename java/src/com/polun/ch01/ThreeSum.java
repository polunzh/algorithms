package com.polun.ch01;

import com.sun.javafx.binding.StringFormatter;
import edu.princeton.cs.algs4.StdOut;

/**
 * @author: 张振强/polun
 * @datetime: 2016/5/10 22:38
 */
public class ThreeSum {
    public static int count(int[] arr) {
        int cnt = 0;
        for (int i = 0; i < arr.length; i++) {
            for (int j = i + 1; j < arr.length - 1; j++) {
                for (int k = j + 1; k < arr.length - 2; k++) {
                    if (arr[i] + arr[j] + arr[k] == 0) {
                        cnt++;
                    }
                }
            }
        }
        return cnt;
    }

    public static void main(String[] args) {
        int[] arr = {1, 2, 33, 43, -3, 0, 1, -2, -45,-35};
        StdOut.println(count(arr));
    }
}
