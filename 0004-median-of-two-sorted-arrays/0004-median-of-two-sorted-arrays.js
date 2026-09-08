/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  let random = [...nums1, ...nums2].sort((a,b) => a-b) 
  
  let middle = Math.floor(random.length/2)
  if(random.length%2 !==0){
    return random[middle]
  }else{
    return (random[middle-1] + random[middle])/2
  }
};