/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
   let pal = x.toString().split('').reverse().join('')
   let num = pal*1
   if(num === x){
    return true
   }else{
    return false
   }
};