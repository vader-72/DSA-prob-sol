/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
  let i = nums.length -2 ; 

  while(i >= 0 && nums[i] >= nums[i+1]){
    i--;
  }   

  if(i >=0 ){
    let j = nums.length - 1 ;

    while(nums[j] <= nums[i]){
        j--
    }

    let temp = nums[i]
    nums[i] = nums[j]
    nums[j] = temp
  }

  let left = i + 1 ;
  let right = nums.length - 1

  while(left <right){
    let temp = nums[left] 
    nums[left] = nums[right]
    nums[right] = temp
    left++
    right--
  }

  return nums
    
    
};