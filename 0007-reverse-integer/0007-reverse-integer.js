/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {

  let reversed = x.toString().split('').reverse().join('')
  let result = parseInt(reversed)*Math.sign(x)   
  if(result < -(2**31) || result > ((2**31) - 1)){
    return 0
  }else{
    return result
  }
};