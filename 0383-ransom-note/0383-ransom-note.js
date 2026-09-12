/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    let map = new Map()

    for(let char of magazine){
        if(map.has(char)){
            map.set(char, map.get(char) +1)
        }else{
            map.set(char, 1)
        }
    }

    for(let char of ransomNote){
        if(!map.has(char) || map.get(char) === 0){
            return false
        }
        map.set(char,map.get(char) - 1 )
    }
    return true
};