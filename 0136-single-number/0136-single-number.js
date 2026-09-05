/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  let set = new Set()
  for(let val of nums){
    if(set.has(val)){
      set.delete(val)
    }else{
        set.add(val)
    }
  }
  return [...set][0]
  
    
};