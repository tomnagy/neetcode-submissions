class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const map = new Map()
        nums.forEach((value) => {
           if(map.has(value)) {
                map.set(value, map.get(value) + 1)
            } else {
                map.set(value, 1)
            }
            console.log(map); 
        })
        const output = Array.from(map.entries()).sort((a,b) => b[1] - a[1]).splice(0,k)
        console.log(output);
        return Array.from(output.map((pair) => pair[0]))
    }
}
