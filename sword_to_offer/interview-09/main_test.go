package interview09

import (
	"github.com/stretchr/testify/assert"
	"testing"
)

func Test(t *testing.T) {
	queue := Constructor()

	queue.AppendTail(1)
	queue.AppendTail(2)

	assert.Equal(t, 1, queue.DeleteHead())
	assert.Equal(t, 2, queue.DeleteHead())
	assert.Equal(t, -1, queue.DeleteHead())
}
