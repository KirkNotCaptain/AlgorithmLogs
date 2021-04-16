/**
 * @param {number[]} nums
 * @return {number}
 */
 var findMin = function(nums) {
  if (nums.length === 0) return -1;
  if (nums.length === 1) return nums[0];
  
  var left = 0;
  var right = nums.length - 1;
  
  //if nums is not rotated, return first element
  if (nums[left] < nums[right]) return nums[0];
  
  while (right >= left) {
      var mid = Math.floor(left + (right - left) / 2);
      
      if (nums[mid+1] < nums[mid]) return nums[mid + 1];
      if (nums[mid-1] > nums[mid]) return nums[mid];
      
      //look right
      if (nums[right] < nums[mid]) {
          left = mid + 1;
      } else {
          right = mid - 1;
      }
      
  }
  
  return -1;
  
};