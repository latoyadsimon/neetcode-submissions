class Solution {
    /**
     * @param {number[]} nums1
     * @param {number} m
     * @param {number[]} nums2
     * @param {number} n
     * @return {void} Do not return anything, modify nums1 in-place instead.
     */
    merge(nums1, m, nums2, n) {
        // push the nums2 into nums1
        //pop out the zeros

        nums1.push(...nums2)
        let count = m
        
        // console.log(nums1)

        // nums1.sort((a,b) => a - b)
        // nums1.pop(0)*n
        // nums1.push(nums2.pop())
            for (let j = 0; j < nums2.length; j++) {
        for(let i = 0; i < nums1.length; i++) {
            // let num = nums1[i]
                // let nums = nums2[j]
            if(nums1[i] === 0 ){
                if(count > m - n){

                nums1.splice(i,1)
                count --
                }

                    

            }
                //  nums1.pop(i)
            }


        }
        nums1.sort((a,b) => a - b)

        console.log(nums1)
        return nums1
        


    }
}
