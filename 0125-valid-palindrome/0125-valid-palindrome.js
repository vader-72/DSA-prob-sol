/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s=s.toLowerCase('').replace(/[^a-z0-9]/g, '')
    let pal = s.split('').reverse().join('')
 
    if(pal === s){
        return true
    }else{
        return false
        
    }
    
};