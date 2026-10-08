class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const output = new Map();
        strs.forEach((word) => {
            const chars = [...word].sort().join('');
            console.log(word, chars);
            if(output.has(chars)) {
                output.get(chars).push(word)
            } else {
                output.set(chars, [word])
            }
            console.log(output);
        })
        console.log(output.values.length);
        return Array.from(output.values()); 
    }
}
