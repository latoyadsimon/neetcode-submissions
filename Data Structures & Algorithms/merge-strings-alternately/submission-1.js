class Solution {
    /**
     * @param {string} word1
     * @param {string} word2
     * @return {string}
     */
    mergeAlternately(word1, word2) {
     

        word1 = word1.split("")
        word2 = word2.split("")
        let len = 0
        console.log(word1, word2)
        if (word1.length > word2.length) {
             len = word1.length
        }else{
            len = word2.length
        }
        let newString = []
        for(let i = 0; i < len; i++ ){
            newString.push(word1[i])
            newString.push(word2[i])
           

           
        }
        
        console.log(newString)
        return(newString.join(""))
    }
}
