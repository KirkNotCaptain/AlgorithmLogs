/**
 * @param {number[]} nums
 * @return {number}
 */
 var findMin = function(nums) {
    
  if (nums.length === 0) return -1;
  if (nums.length === 1) return nums;
  
  if (nums[0] < nums[nums.length - 1]) return nums[0]; //if no rotation return first element
  
  var left = 0;
  var right = nums.length - 1;
  
  while (right >= left) {
      var mid = Math.floor(left + (right - left) / 2);
      
      if (nums[mid] > nums[mid+1]) {
          return nums[mid+1];
      }
      
      if (nums[mid - 1] > nums[mid]) {
          return nums[mid]
      }
      
      
      //if mid element > first element, then keep looking to the right by shifting left
      if (nums[mid] > nums[0]) {
          left = mid + 1;
      } else {
          //if mid element < first element, then keep looking left by shifting right
          right = mid - 1
      }
  }
  
};