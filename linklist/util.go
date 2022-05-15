package linklist

type ListNode struct {
	Value int
	Next  *ListNode
}

func MakeLinkList(arr []int) *ListNode {
	if len(arr) == 0 {
		return nil
	}

	head := &ListNode{Value: arr[0]}
	cur := head

	for i := 1; i < len(arr); i++ {
		cur.Next = &ListNode{Value: arr[i]}
		cur = cur.Next
	}

	return head
}

func LinkListToArray(head *ListNode) []int {
	var res []int
	cur := head

	for cur != nil {
		res = append(res, cur.Value)
		cur = cur.Next
	}

	return res
}
