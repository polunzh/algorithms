package algorithms

import (
	"github.com/stretchr/testify/assert"
	"testing"
)

func TestFibo1(t *testing.T) {
	assert.Equal(t, 1, Fibo(1))
}

func TestFibo2(t *testing.T) {
	assert.Equal(t, 1, Fibo(2))
}

func TestFibo3(t *testing.T) {
	assert.Equal(t, 2, Fibo(3))
}

func TestFibo4(t *testing.T) {
	assert.Equal(t, 3, Fibo(4))
}

func TestFibo5(t *testing.T) {
	assert.Equal(t, 5, Fibo(5))
}
