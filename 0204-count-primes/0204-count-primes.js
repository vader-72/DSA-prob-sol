/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
  if (n < 3) return 0
    const isComposite = new Array(n).fill(false)
    let count = 0

    for (let i = 2; i < n; i++) {
        if (!isComposite[i]) {
            count++
            for (let j = i * i; j < n; j += i) {
                isComposite[j] = true
            }
        }
    }
    return count

};