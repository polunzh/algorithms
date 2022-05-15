//==================================================================
// 《剑指Offer——名企面试官精讲典型编程题》代码
// 作者：何海涛
//==================================================================

// 面试题3（一）：找出数组中重复的数字
// 题目：在一个长度为n的数组里的所有数字都在0到n-1的范围内。数组中某些数字是重复的，但不知道有几个数字重复了，
// 也不知道每个数字重复了几次。请找出数组中任意一个重复的数字。例如，如果输入长度为7的数组{2, 3, 1, 0, 2, 5, 3}，
// 那么对应的输出是重复的数字2或者3。

// 时间复杂度 O(nlogn), 空间复杂度 O(1), 时间换空间

package algorithms

func GetDuplication(arr []int) int {
	start, end := 1, len(arr) - 1

	for start <= end {
		mid := ((end - start) >> 1) + start

		count := countRange(arr, start, mid)
		
		if start == end {
			if count > 1 {
				return start
			}

			return -1 // 理论上这种情况不会出现
		}

		if count > mid - start + 1{
			end = mid
		} else {
			start = mid + 1
		}
	}

	return -1
}

func countRange(arr []int, start int, end int) int {
	count := 0
	for i := 0; i < len(arr); i++ {
		if arr[i] >= start && arr[i] <= end {
			count++
		}
	}

	return count
}
