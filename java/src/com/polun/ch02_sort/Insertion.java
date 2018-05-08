package com.polun.ch02_sort;

import edu.princeton.cs.algs4.In;
import edu.princeton.cs.algs4.StdOut;

/**
 * Created by 张镇强 on 2017/2/4 22:48.
 */
public class Insertion {
    public static void sort(Comparable[] arr) {
        Comparable val;
        int index;

        for (int i = 1; i < arr.length; i++) {
            val = arr[i];
            index = i;
            while (index > 0 && less(val, arr[index - 1])) {
                arr[index] = arr[index - 1];
                index--;
            }

            arr[index] = val;
        }
    }

    private static void exch(Comparable[] arr, int i, int j) {
        Comparable temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }

    private static boolean less(Comparable v, Comparable w) {
        return v.compareTo(w) < 0;
    }

    private static void show(Comparable[] arr) {
        for (int i = 0; i < arr.length; i++) {
            StdOut.print(arr[i] + " ");
        }

        StdOut.println();
    }

    private static boolean isSort(Comparable[] arr) {
        for (int i = 0; i < arr.length - 2; i++) {
            if (less(arr[i + 1], arr[i])) {
                return false;
            }
        }

        return true;
    }

    public static void main(String[] args) {
        In input = new In(args[0]);
        String[] arr = input.readAllStrings();
        sort(arr);
        StdOut.println("Is Sort:" + isSort(arr));
        show(arr);
    }
}
