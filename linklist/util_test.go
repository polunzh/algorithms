package linklist

import (
	"testing"

	"github.com/stretchr/testify/assert"
)

func TestMakeLinkList(t *testing.T) {
	list := MakeLinkList([]int{1, 3, 2})

	assert.Equal(t, 1, list.Value)
	assert.Equal(t, 3, list.Next.Value)
	assert.Equal(t, 2, list.Next.Next.Value)
}

func TestLinkListToArray(t *testing.T) {
	list := MakeLinkList([]int{1, 3, 2})

	assert.Equal(t, []int{1, 3, 2}, LinkListToArray(list))
}
