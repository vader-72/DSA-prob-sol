/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  let arr = new Map()
  for(let i = 0 ; i<nums.length ; i++){
    let diff = target - nums[i]
    if(arr.has(diff)){
        return [arr.get(diff), i]
    }

   arr.set(nums[i],i)
    
  }
 
};