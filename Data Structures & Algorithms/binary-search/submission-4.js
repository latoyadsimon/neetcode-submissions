class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        console.log(nums)
        console.log(target)
        let idx = 0
        

        for (let num of nums){
            if (num === target) {
                console.log(num)
                return idx
            }
            idx += 1

        }
            return -1

        

    }

}
