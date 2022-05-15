package linklist

func Merge(l1 *ListNode, l2 *ListNode) *ListNode {
	if l1 == nil {
		return l2
	}

	if l2 == nil {
		return l1
	}

	var merged *ListNode

	if l1.Value < l2.Value {
		merged = l1
		merged.Next = Merge(l1.Next, l2)
	} else {
		merged = l2
		merged.Next = Merge(l1, l2.Next)
	}

	return merged
}
