package com.polun.ch01;

public class Triangle extends Shape {
	public Triangle() {
		super("Èý½ÇÐÎ");
	}

	public static void main(String[] args) {
		Triangle shape = new Triangle();
		System.out.println(shape.getName());
	}

}
