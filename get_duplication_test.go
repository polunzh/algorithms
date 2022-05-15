package algorithms

import (
	"github.com/stretchr/testify/assert"
	"testing"
)

func TestGetDuplication1(t *testing.T) {
	assert.Equal(t, -1, GetDuplication(nil))
	assert.Equal(t, -1, GetDuplication([]int{}))
}

func TestGetDuplication2(t *testing.T) {
	assert.Equal(t, 1, GetDuplication([]int{1, 1}))
}

func TestGetDuplication3(t *testing.T) {
	assert.Equal(t, 2, GetDuplication([]int{1, 2, 3, 4, 2}))
}

