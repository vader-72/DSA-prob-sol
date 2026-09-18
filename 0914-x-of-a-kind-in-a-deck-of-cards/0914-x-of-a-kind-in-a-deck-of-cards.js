/**
 * @param {number[]} deck
 * @return {boolean}
 */
var hasGroupsSizeX = function(deck) {
   let map = new Map();
   
   for(let x of deck){
    map.set(x , (map.get(x) || 0 ) +1) ;
   }

   let min = Infinity ;

   for(let count of map.values()){
    min = Math.min(min, count);
   }

   for(let x = 2 ; x <= min ; x++){
    let possible = true;
    for(let count of map.values()){
        if(count % x !== 0 ){
            possible = false;
            break
        }
    }

    if(possible) return true;
   }

   return false
   
};