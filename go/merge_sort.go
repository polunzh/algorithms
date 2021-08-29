package main

import "fmt"

func sort() {

}

func mergeSort(array []int) []int {
	if len(array) <= 1 {
		return array
	}

	middle := len(array) / 2
	left := mergeSort(array[0:middle])
	right := mergeSort(array[middle:])

	return merge(left, right)
}

func merge(left []int, right []int) []int {
	leftLen := len(left)
	rightLen := len(right)
	res := make([]int, 0)

	leftIndex, rightIndex := 0, 0
	for leftIndex < leftLen && rightIndex < rightLen {
		if left[leftIndex] < right[rightIndex] {
			res = append(res, left[leftIndex])
			leftIndex++
		} else {
			res = append(res, right[rightIndex])
			rightIndex++
		}
	}

	if leftIndex < leftLen {
		res = append(res, left[leftIndex:]...)
	}

	if rightIndex < rightLen {
		res = append(res, right[rightIndex:]...)
	}

	return res
}

func main() {
	var array = []int{5, 1, 1, 20, 20, 21}

	fmt.Printf("%v => %v\n", array, mergeSort(array))
}
