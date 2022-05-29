package ds_a


func TwoSum(nums []int, target int) [2]int {
			var numStore = map[int]int{}

			for i, v := range nums {
				_, ok := numStore[target - v]
				if ok {
						return [2]int{numStore[target-v], i}
				} else {
					numStore[v] = i
				}
			}

			return [2]int{-1, -1}
}


// func main() {
// 	TwoSum([]int{1,2,3,4,5},6)
// }