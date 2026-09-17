/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  let result = [];
  let pairs = {
    ')':'(',
    '}':'{',
    ']':'['
  }

  for(let char of s){
    if(char === '(' || char === '{' || char === '['){
        result.push(char)
    }else{
        if(result.length === 0 || result.pop() !== pairs[char]){
            return false
        }
    }
  }

  return result.length === 0;
  
  
};