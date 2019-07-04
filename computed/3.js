var findMedianSortedArrays = function(nums1, nums2) {
    let arr = nums1.concat(nums2);
    let n = 0;
    arr.sort((a, b) => a - b);
    if (arr.length % 2 === 0) {
      n = (arr[arr.length / 2 - 1] + arr[arr.length / 2]) / 2
      if (parseInt(n)==n) {
        n = n.toFixed(1)
      }
    }else {
      n = arr[Math.floor(arr.length / 2)]
    }
    return n
};
arr1 = [1,6]
arr2 = [2, 6]
console.log(findMedianSortedArrays(arr1, arr2))