/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    function Permutations(arr){
    let container = []
    let used = []
    container = arr.reduce((result, val, index) => {
        if (used.indexOf(arr[index]) >= 0) {
            return result
        }else {
            let rest = Permutations(arr.slice(0,index).concat(arr.slice(index+1)))
            if (rest.length === 0) {
                rest = [[]]
            }
            used.push(arr[index])
            return result.concat(rest.map((x) => {
                return [arr[index],...x]
            }))
        }
        
    }, [])
    return container
}

return Permutations(nums)
};