/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
   let jls = new Set(jewels)
   let count = 0
   for(let st of stones){
    if(jls.has(st))
     count++
   }

   return count
};