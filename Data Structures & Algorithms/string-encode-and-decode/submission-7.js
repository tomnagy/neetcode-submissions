class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        return strs.map((word) => {
            return word.length + '#' + word
        }).join('')  
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        console.log(str)
        const out = []
        while (str.length > 0) {
            const i = str.indexOf('#')
            console.log('i:',i)
            const len = parseInt(str.slice(0, i))
            console.log('len:', len)
            console.log('start:', i+1)
            console.log('end:', i+1+len)
            const word = str.slice(i+1, i+1+len)
            console.log('word', word)
            out.push(word)
            str = str.slice(i+1+len)
            console.log(str)
        }
        return out
    }
}
