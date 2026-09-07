/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  let pas = []
  for(let i = 0 ; i<numRows ; i++){
    let row = [1]
    for(let j=1 ; j<i ; j++){
        row.push(
          pas[i - 1][j - 1] + pas[i-1][j]
        )
    }
      if(i>0){
            row.push(1)
        }
        pas.push(row)
  }
  return pas
};