
package array

import (
	"github.com/stretchr/testify/assert"
	"testing"
)

func TestFindInMatrix1(t *testing.T) {
	assert.Equal(t, false, FindInMatrix(nil, 1))
}


func TestFindInMatrix2(t *testing.T) {
	assert.Equal(t, false, FindInMatrix([][]int{{}}, 1))
}

func TestFindInMatrix3(t *testing.T) {
	assert.Equal(t, true, FindInMatrix([][]int{{1}, {2}}, 1))
}

func TestFindInMatrix4(t *testing.T) {
	matrix := [][]int{{1,2,8,9}, {2,4, 9, 12}, {4, 7, 10, 13}, {6, 8, 11, 15}}
	assert.Equal(t, true, FindInMatrix(matrix, 1))
}
