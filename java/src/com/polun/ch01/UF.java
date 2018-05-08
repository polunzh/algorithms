package com.polun.ch01;

import edu.princeton.cs.algs4.In;
import edu.princeton.cs.algs4.StdOut;

/**
 * Create by polun on 2016/5/12
 */
public class UF {
    private int[] id;
    private int count;

    public UF(int N) {
        count = N;
        id = new int[N];
        for (int i = 0; i < N; i++) {
            id[i] = i;
        }
    }

    public void union(int p, int q) {
        if (id[p] != id[q]) {
            for (int i = 0; i < id.length; i++) {
                if (id[i] == id[q]) {
                    id[i] = id[p];
                }
            }

            count--;
        }
    }

    public int find(int p) {
        return id[p];
    }

    public boolean connected(int p, int q) {
        return find(q) == find(p);
    }

    public int count() {
        return count;
    }

    public static void main(String[] args) {
        In in = new In("src/com/polun/ch01/tinyUF.txt");
        int N = Integer.valueOf(in.readLine());
        int[] id = in.readAllInts();

        UF uf = new UF(N);
        for (int i = 0; i < id.length - 2; i += 2) {
            if (!uf.connected(id[i], id[i + 1])) {
                uf.union(id[i], id[i + 1]);
            }

            StdOut.println(id[i] + " " + id[i + 1]);
        }

        StdOut.println(uf.count);
    }
}
