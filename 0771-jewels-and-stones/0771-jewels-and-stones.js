/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    let count = 0
    for(let jls of jewels){
        for(let st of stones){
        if(st === jls){
            count++
        }

       }
    
    }
    return count
};