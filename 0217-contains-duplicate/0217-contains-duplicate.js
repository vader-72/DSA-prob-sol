/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  let dude = new Set();
  for(val of nums){
    if(dude.has(val)){
        return true
    }
    dude.add(val)
  }
  return false
};