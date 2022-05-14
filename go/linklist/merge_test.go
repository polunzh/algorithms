package linklist

import (
	"testing"

	"github.com/stretchr/testify/assert"
)

func TestMergeList1(t *testing.T) {
	l1 := MakeLinkList([]int{1, 3, 5})
	l2 := MakeLinkList([]int{2, 4})

	assert.Equal(t, LinkListToArray(MakeLinkList([]int{1, 2, 3, 4, 5})), LinkListToArray(Merge(l1, l2)))
}

func TestMergeList2(t *testing.T) {
	l1 := MakeLinkList([]int{1, 2, 3})
	l2 := MakeLinkList([]int{4, 5})

	assert.Equal(t, LinkListToArray(MakeLinkList([]int{1, 2, 3, 4, 5})), LinkListToArray(Merge(l1, l2)))
}

func TestMergeList3(t *testing.T) {
	l1 := MakeLinkList(nil)
	l2 := MakeLinkList([]int{4, 5})

	assert.Equal(t, LinkListToArray(MakeLinkList([]int{4, 5})), LinkListToArray(Merge(l1, l2)))
}

func TestMergeList4(t *testing.T) {
	l1 := MakeLinkList([]int{1})
	l2 := MakeLinkList(nil)

	assert.Equal(t, LinkListToArray(MakeLinkList([]int{1})), LinkListToArray(Merge(l1, l2)))
}
