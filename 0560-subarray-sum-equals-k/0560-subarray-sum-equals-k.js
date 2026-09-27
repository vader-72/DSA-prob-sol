/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
   let count = 0 ; 
   let runCount = 0 ;
   let subCount = new Map()
   subCount.set(0,1)

   for(let num of nums){
    runCount += num

    if(subCount.has(runCount - k)){
        count += subCount.get(runCount - k)
    }

    subCount.set(runCount , (subCount.get(runCount ) || 0 ) + 1 )
   } 
   return count
};