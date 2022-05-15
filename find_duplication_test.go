package algorithms

import (
	"github.com/stretchr/testify/assert"
	"testing"
)

func TestFindDuplication1(t *testing.T) {
	assert.Equal(t, false, Duplicate(nil))
}

func TestFindDuplication2(t *testing.T) {
	assert.Equal(t, false, Duplicate([]int{1}))
}

func TestFindDuplication3(t *testing.T) {
	assert.Equal(t, true, Duplicate([]int{1, 1}))
}

func TestFindDuplication4(t *testing.T) {
	assert.Equal(t, false, Duplicate([]int{1, 2, 3}))
}

func TestFindDuplication5(t *testing.T) {
	assert.Equal(t, true, Duplicate([]int{1, 2, 3, 2}))
}
