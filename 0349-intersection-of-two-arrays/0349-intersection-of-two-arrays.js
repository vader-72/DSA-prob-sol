/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let set = new Set(nums2)
    let arr = [] 

    for(let num of nums1){
        if(set.has(num)){
            arr.push(num)
            set.delete(num)
        }
    }
    return arr
};