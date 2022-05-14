package linklist

func Reverse(h *ListNode) *ListNode {
	var reversedHeader *ListNode = nil
	currentNode := h
	var prevNode *ListNode = nil

	for currentNode != nil {
		nextNode := currentNode.Next

		if nextNode == nil {
			reversedHeader = currentNode
		}

		currentNode.Next = prevNode
		prevNode = currentNode
		currentNode = nextNode
	}

	return reversedHeader
}
