package algorithms

func Fibo(n int) int {
  if n <= 2 {
    return 1
  }

  n1, n2 := 1, 1

  for i := 3; i <= n; i++ {
    t := n1
    n1 = n2
    n2 = t + n2
  }

  return n2
}
