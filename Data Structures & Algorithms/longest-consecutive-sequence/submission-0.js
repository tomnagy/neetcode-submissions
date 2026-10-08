class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        nums.sort((a, b) => a - b)
        console.log(nums)

        const counters = [0]
        let currentCounter = 0

        for(let i = 0; i < nums.length; i++) {
            if(i == 0) {
                console.log('first', nums[i])
                counters[currentCounter] = counters[currentCounter] + 1
                console.log(counters)
                continue
            }

            if(nums[i - 1] == nums[i]) {
                console.log('dup', nums[i])
                console.log(counters)
                continue
            }
            
            if(nums[i - 1] + 1 == nums[i]) {
                //part of sequence
                console.log('part of sequence', nums[i])
                counters[currentCounter] = counters[currentCounter] + 1
            } else {
                //start of new sequence
                console.log('start of new sequence', nums[i])
                currentCounter++
                counters[currentCounter] = 1
            }
            
            console.log(counters)
        }

        return Math.max(...counters)
    }
}
