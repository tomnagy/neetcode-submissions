class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        console.log(s)
        s = s.replaceAll(/\W/g, '').toLocaleLowerCase()
        console.log(s)
        if(s.length % 2 != 0) {
            const chars = s.split('')
            chars.splice(s.length/2, 1)
            s = chars.join('')
        }
        console.log(s)
        const firstHalf = s.slice(0, s.length/2)
        const secondHalf = s.slice(s.length/2).split('').reverse().join('');

        console.log(firstHalf)
        console.log(secondHalf)
        const palindrome = firstHalf == secondHalf
        return palindrome
    }
}
