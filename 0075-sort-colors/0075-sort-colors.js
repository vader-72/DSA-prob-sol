/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
   let i =0 ;
   let j=0 ; 
   let k = nums.length-1;
   while(i<=k){
    if(nums[i]===0){
        let ram = nums[j]
        nums[j] = nums[i]
        nums[i] = ram
        j++
        i++
    }else if(nums[i]===1){
        i++
        
    }else if(nums[i]===2){
        let temp = nums[k]
        nums[k] = nums[i]
        nums[i] = temp
        k--
    }
   }
};