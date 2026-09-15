/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
   let map = new Map();

    for (let num of nums) {
        map.set(num, (map.get(num) || 0) + 1);
    }

    for (let [num, count] of map) {
        if (count > nums.length / 2) {
            return num;
        }
    }
};