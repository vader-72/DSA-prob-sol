/**
 * @param {string[]} strs
 * @return {string[][]}
    
 */
var groupAnagrams = function(strs) {
    
    let map = new Map();

    for (let str of strs) {
        let sorted = str.split("").sort().join("");

        if (!map.has(sorted)) {
            map.set(sorted, []);
        }

        map.get(sorted).push(str);
    }

    return Array.from(map.values());

    
    
    
 
};