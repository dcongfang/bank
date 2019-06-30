var twoSum = function(nums, target) {
  const arr = [];
    for(let i = 0; i < nums.length; i++) {
      for(let j = i; j < nums.length; j++) {
        if (nums[j] + nums[i] == target && j !== i) {
          arr.push(i,j)
        }
      }
    }
    return arr;
};
nums = [3, 7, 11, 15];
console.log(twoSum(nums, 14));
