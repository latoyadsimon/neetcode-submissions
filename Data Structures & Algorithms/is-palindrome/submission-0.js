class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let clean_str = s.toLowerCase()
        clean_str = clean_str.replace(/[^a-zA-Z0-9]/g, '');
        console.log("original", clean_str)
        console.log("original split", clean_str.split(""))
        console.log("reversed", clean_str.split().reverse().join(""))
        let reversed = clean_str.split("").reverse().join("")
        if(clean_str === reversed){
            return true
        }else{
            return false
        }

    }
}
