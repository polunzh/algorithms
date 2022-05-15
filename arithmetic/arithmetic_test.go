package arithmetic

import (
	"github.com/stretchr/testify/assert"
	"testing"
)

func Test(t *testing.T) {
	v, err := calculate("1*2")
	assert.Equal(t, float64(2), v)
	assert.Nil(t, err)

	v, err = calculate("1*2.1")
	assert.Equal(t, float64(2.1), v)
	assert.Nil(t, err)

	v, err = calculate("1*(2-1))")
	assert.NotNil(t, err)

	v, err = calculate("5 + ((1 + 2) * 4) - 3")
	assert.Equal(t, float64(14), v)
	assert.Nil(t, err)

	v, err = calculate("5 + (3 +(1 + 2) * 4) / 3")
	assert.Equal(t, float64(10), v)
	assert.Nil(t, err)
}
