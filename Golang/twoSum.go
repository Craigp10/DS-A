package main

type dataStore struct {
	index int
}

func main(arr []int, target int) {
	// var dataObj dataStore = {}
	for i := 0; i < len(arr); i++ {
		if dataObj[arr[i]] {
			return [dataObj[arr[i]], i]
		} else {
			dataObj[arr[i]] = i
		}
	}
	return [-1 ,-1]
}



twoSum([1,2,3,4,5], 3)
