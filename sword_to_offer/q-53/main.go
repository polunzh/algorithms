package q53

func getNumberOfK(data []int, k int, start int, end int) int {
	startIndex := getFirstK(data, k, start, end)
	endIndex := getLastK(data, k, start, end)

	if startIndex > -1 && endIndex > -1 {
		return endIndex - startIndex + 1
	}

	return 0
}

func getFirstK(data []int, k int, start int, end int) int {
	if start > end {
		return -1
	}

	midIndex := (start + end) / 2
	midData := data[midIndex]

	if midData == k {
		if midIndex == 0 || data[midIndex-1] != k {
			return midIndex
		} else {
			end = midIndex - 1
		}
	} else if midData < k {
		start = midIndex + 1
	} else {
		end = midIndex - 1
	}

	return getFirstK(data, k, start, end)
}

func getLastK(data []int, k int, start int, end int) int {
	if start > end {
		return -1
	}

	length := len(data)
	midIndex := (start + end) / 2
	midData := data[midIndex]

	if midData == k {
		if midIndex == length-1 || k != data[midIndex+1] {
			return midIndex
		} else {
			start = midIndex + 1
		}
	} else if midData < k {
		start = midIndex + 1
	} else {
		end = midIndex - 1
	}

	return getLastK(data, k, start, end)
}
