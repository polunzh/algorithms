package linklist

import (
	"testing"

	"github.com/stretchr/testify/assert"
)

func Test1(t *testing.T) {
	list := MakeLinkList([]int{1, 2, 3})
	reversed := MakeLinkList([]int{3, 2, 1})

	assert.Equal(t, LinkListToArray(reversed), LinkListToArray(Reverse(list)))
}

func Test2(t *testing.T) {
	list := MakeLinkList([]int{1})
	reversed := MakeLinkList([]int{1})

	assert.Equal(t, LinkListToArray(reversed), LinkListToArray(Reverse(list)))
}

func Test3(t *testing.T) {
	assert.Equal(t, MakeLinkList(nil), Reverse(nil))
}
