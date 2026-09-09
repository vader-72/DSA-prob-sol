/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {

  let  str = Array.from({ length: n }, (_, i) => String(i + 1));
  for(let j = 0 ; j<str.length ; j++){
    if(str[j] % 3 ===0 && str[j] % 5 === 0){
        str[j] = 'FizzBuzz'
    }else if(str[j] % 3 === 0){
        str[j] = 'Fizz'
    }else if(str[j] % 5 === 0){
        str[j] = 'Buzz'
    }
  }
  return str
 


};