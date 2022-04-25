// 四则运算，支持 +-*/ 四种操作符，支持小括号括号，比如:
// 1+(3-1)*2
// 中序表达式和逆波兰表达式的转换算法，调度场算法: https://zh.wikipedia.org/wiki/%E8%B0%83%E5%BA%A6%E5%9C%BA%E7%AE%97%E6%B3%95

package arithmetic

import (
	"errors"
	"fmt"
	"strconv"
)

var operatorMap = map[byte]int8{'+': 10, '-': 10, '*': 20, '/': 20}

func cal(queue *[]string) error {
	operator := (*queue)[len(*queue)-1]
	s1, s2 := (*queue)[len(*queue)-3], (*queue)[len(*queue)-2]

	n1, _ := strconv.ParseFloat(s1, 64)
	n2, _ := strconv.ParseFloat(s2, 64)

	*queue = (*queue)[0 : len(*queue)-3]

	switch operator {
	case "+":
		*queue = append(*queue, fmt.Sprintf("%f", n1+n2))
	case "-":
		*queue = append(*queue, fmt.Sprintf("%f", n1-n2))
	case "*":
		*queue = append(*queue, fmt.Sprintf("%f", n1*n2))
	case "/":
		*queue = append(*queue, fmt.Sprintf("%f", n1/n2))
	default:
		return errors.New("invalid operator")
	}

	return nil
}

func calculate(str string) (float64, error) {
	var word string
	var numberQueue []string
	var operatorStack []byte

	for i := 0; i < len(str); i++ {
		if str[i] == ' ' {
			continue
		}

		if str[i] == '(' {
			// 如果是左括号，直接放到 operator stack
			operatorStack = append(operatorStack, str[i])
		} else if str[i] == ')' {
			if len(operatorStack) == 0 {
				return 0, errors.New("invalid arithmetic")
			}

			// 如果是右括号, 出栈 operator stack 至 number queue，直到遇到左括号 (
			if word != "" {
				numberQueue = append(numberQueue, word)
				word = ""
			}

			hasLeftBrackets := false
			for {
				top := operatorStack[len(operatorStack)-1]
				operatorStack = operatorStack[0 : len(operatorStack)-1]

				if top == '(' {
					hasLeftBrackets = true
					break
				}

				numberQueue = append(numberQueue, string(top))

				if err := cal(&numberQueue); err != nil {
					return 0, err
				}

				if len(operatorStack) == 0 {
					return 0, errors.New("invalid arithmetic")
				}
			}

			if !hasLeftBrackets {
				return 0, errors.New("invalid arithmetic")
			}
		} else if _, ok := operatorMap[str[i]]; ok {
			// 如果是操作符

			if word != "" {
				numberQueue = append(numberQueue, word)
				word = ""
			}

			// 1. 如果 operator stack 为空，或者栈顶元素是左括号，直接入栈 operator stack
			if len(operatorStack) == 0 || operatorStack[len(operatorStack)-1] == '(' {
				operatorStack = append(operatorStack, str[i])
				continue
			}

			// 2. 出栈 operator, 直到栈里下一个操作符的优先级大于 str[i], 然后将 str[i] 入栈
			for {
				top := operatorStack[len(operatorStack)-1]
				if top == '(' {
					break
				}

				curOpPriority := operatorMap[str[i]]
				opInStackPriority := operatorMap[top]

				if curOpPriority > opInStackPriority {
					break
				}

				numberQueue = append(numberQueue, string(top))
				operatorStack = operatorStack[0 : len(operatorStack)-1]

				if err := cal(&numberQueue); err != nil {
					return 0, err
				}

				if len(operatorStack) == 0 {
					break
				}
			}
			operatorStack = append(operatorStack, str[i])
		} else {
			// 其它情况都是数字或者小数点，拼接数字字符串
			word += string(str[i])
		}

		if i == len(str)-1 {
			if word != "" {
				numberQueue = append(numberQueue, word)
			}

			for {
				if len(operatorStack) == 0 {
					break
				}
				top := operatorStack[len(operatorStack)-1]
				operatorStack = operatorStack[0 : len(operatorStack)-1]

				numberQueue = append(numberQueue, string(top))
				if err := cal(&numberQueue); err != nil {
					return 0, err
				}
			}
		}
	}

	if len(numberQueue) != 1 {
		return 0, errors.New("invalid arithmetic")
	}

	res, err := strconv.ParseFloat(numberQueue[0], 64)

	if err != nil {
		return 0, errors.New("invalid arithmetic")
	}

	return res, nil
}
