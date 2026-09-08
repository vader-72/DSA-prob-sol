/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
  let str = []
  for(let i = 1 ; i<=n;i++ ){
    str.push(i.toString())
  }
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