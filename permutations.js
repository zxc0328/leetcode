function subsets(s) {
        if (s.length === 0){
            return []
        }else {
            let rest = subsets(s.splice(1))
            return rest.concat(rest.map((x) => { return [s[0],...x];}))
        }
}
subsets([1,2])
