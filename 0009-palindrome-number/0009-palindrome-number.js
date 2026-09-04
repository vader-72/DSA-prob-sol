/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
y = x.toString().split('').reverse().join('')
num = y*1
if(x ===num){
    return true
}else{
    return false
}
};