package com.polun.ch01;

/**
 * @author: 张振强/polun
 * @datetime: 2016/5/10 22:49
 */
public class StopWatcher {
    private final long start;

    public StopWatcher() {
        start = System.currentTimeMillis();
    }

    /**
     * 计算该类从实例化到当前时刻的消耗时间
     * @return 消耗时间，单位：秒(s)
     */
    public double elapseTime() {
        return (System.currentTimeMillis() - start) / 1000.0;
    }

}
