/*
* 用两个栈实现一个队列
*/

package interview09

type Stack struct {
	val []int
}

func (stack *Stack) Push(v int) {
	stack.val = append(stack.val, v)
}

func (stack *Stack) Pop() int {
	if len(stack.val) == 0 {
		return -1
	}

	res := stack.val[len(stack.val)-1]
	stack.val = stack.val[:len(stack.val)-1]
	return res
}

type Queue struct {
	s1 Stack
	s2 Stack
}

func Constructor() Queue {
	return Queue{Stack{}, Stack{}}
}

func (queue *Queue) AppendTail(v int) {
	queue.s1.Push(v)
}

func (queue *Queue) DeleteHead() int {
	for {
		v := queue.s1.Pop()
		if v == -1 {
			break
		}

		queue.s2.Push(v)
	}

	return queue.s2.Pop()
}
