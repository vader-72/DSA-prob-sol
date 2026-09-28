/**
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function(nums) {
  let  pos = 0 ;
  let  neg = 1 ;
  let  ans = new Array(nums.length) ;

  for(let num of nums){
    if(num>0){
        ans[pos] = num
        pos +=2
    }else{
        ans[neg] = num
        neg +=2
    }

  }  
  return ans
};