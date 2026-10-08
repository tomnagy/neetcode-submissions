class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        return nums.map((value, index, array) => {
            const clone = Array.from(array)
            clone.splice(index, 1)
            return clone.reduce((p,c) => p*c)
        })
    }
}
