package q53

import (
	"github.com/stretchr/testify/assert"
	"testing"
)

func Test(t *testing.T) {
	assert.Equal(t, 0, getNumberOfK([]int{1, 2, 4}, 2, 5, 3))
	assert.Equal(t, 1, getNumberOfK([]int{1, 2, 4}, 2, 0, 3))
	assert.Equal(t, 2, getNumberOfK([]int{1, 2, 2}, 2, 0, 3))
	assert.Equal(t, 2, getNumberOfK([]int{2, 2, 1}, 2, 0, 3))
	assert.Equal(t, 3, getNumberOfK([]int{2, 2, 2}, 2, 0, 3))
}
