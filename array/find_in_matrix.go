package array

//==================================================================
// 《剑指Offer——名企面试官精讲典型编程题》代码
// 作者：何海涛
//==================================================================

// 面试题4：二维数组中的查找
// 题目：在一个二维数组中，每一行都按照从左到右递增的顺序排序，每一列都按
// 照从上到下递增的顺序排序。请完成一个函数，输入这样的一个二维数组和一个
// 整数，判断数组中是否含有该整数。

func FindInMatrix(arr [][]int, target int) bool {
	if len(arr) == 0 {
		return false
	}

	if len(arr[0]) == 0 {
		return false
	}

	row, col := 0, len(arr[0])-1

	for row < len(arr) && col >= 0 {
		if arr[row][col] == target {
			return true
		} else if arr[row][col] > target {
			col--
		} else {
			row++
		}
	}

	return false
}
