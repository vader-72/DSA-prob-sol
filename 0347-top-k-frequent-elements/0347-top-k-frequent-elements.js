/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
   let map = new Map()
   
   for(let num of nums){
    map.set(num , (map.get(num) || 0) + 1 );
   }

   const bucket = Array.from(
    {length: nums.length  + 1},
    () =>[]
   )

   for(let [num ,freq] of map){
    bucket[freq].push(num);
   }

   const result = []

   for(let i = bucket.length -1 ;i>=0 ; i--){
    for(let num of bucket[i]){
       result.push(num) 

       if(result.length === k){
        return result
       }

    }
   }
   
};