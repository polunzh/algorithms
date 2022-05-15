//==================================================================
// 《剑指Offer——名企面试官精讲典型编程题》代码
// 作者：何海涛
//==================================================================

// 面试题3（一）：找出数组中重复的数字
// 题目：在一个长度为n的数组里的所有数字都在0到n-1的范围内。数组中某些数字是重复的，但不知道有几个数字重复了，
// 也不知道每个数字重复了几次。请找出数组中任意一个重复的数字。例如，如果输入长度为7的数组{2, 3, 1, 0, 2, 5, 3}，
// 那么对应的输出是重复的数字2或者3。

package algorithms

func Duplicate(arr []int) bool {
	length := len(arr)

	for i := 0; i < length; i++ {
		if arr[i] < 0 || arr[i] >= length {
			return false
		}
	}

	for i := 0; i < length; i++ {
		for arr[i] != i {
			if arr[arr[i]] == arr[i] {
				return true
			}

			t := arr[i]
			arr[i] = arr[t]
			arr[t] = t
		}
	}

	return false
}
