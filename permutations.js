/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    function Permutations(arr){
        let container = []
        container = arr.reduce((result, val, index) => {
            let rest = Permutations(immutableDelete(arr, index))
            if (rest.length === 0) {
                rest = Array.from(new Array(1))
            }
            return result.concat(rest.map((x) => {
                if (!x) {
                    return [arr[index]]
                }else {
                    return [arr[index],...x]
                }
            }))
        }, [])
        return container
    }

    function immutableDelete (arr, index) {
        return arr.slice(0,index).concat(arr.slice(index+1))
    }
    
    return Permutations(nums)
};