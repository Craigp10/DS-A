package ds_a

import (
	"testing" 
)

type twoSumTest struct {
	nums []int
	target int
	output [2]int
}

func TestTwoSum(t *testing.T) {

	var addTest = []twoSumTest {
		{
			[]int{1,2,3,4,5},
			6,
			[2]int{1,3},
		},
		{
			[]int{2,4,6,8,10},
			7,
			[2]int{-1,-1},
		},
		{
			[]int{2,3,4,6,8,10},
			7,
			[2]int{1,2},
		},
		{
			[]int{1,3,5,7},
			7,
			[2]int{-1,-1},
		},
	}
		
	for _, test := range addTest {
		var result [2]int
		result = TwoSum(test.nums, test.target)
		// printArray(result)
		// printArray(test.output)

		if result != test.output {
			// t.Errorf("twoSum(%f) = %f, expected %f", test.input, result, test.expected)
			t.Error("ERROR")
		}
	} 
}

// func printArray(a [2]int) {
// 	fmt.Println(a)
// }