/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
  let  n = nums.length 
  k = k%n 
  
  const arr = new Array(n)

  for(let i = 0 ; i<n ; i++){
    arr[(i +k ) % n ] = nums[i]
  }
  for(let i = 0 ; i<n ;i++){
    nums[i] = arr[i]
  }
};