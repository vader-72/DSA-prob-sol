/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {

    let countS = new Map()
    for (let char of s) {
        countS.set(char, (countS.get(char) || 0) + 1)
    }

    let countT = new Map()
    for (let val of t) {
        countT.set(val, (countT.get(val) || 0) + 1)
    }

    if (countS.size !== countT.size) {
        return false
    }

    for (let [char, count] of countS) {
        if (countT.get(char) !== count) {
            return false
        }
    }

    return true

};