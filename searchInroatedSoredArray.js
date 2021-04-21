var search = function(nums, target) {
    
  if (nums.length === 0) return -1;
  if (nums.length === 1) {
      nums[0] === target ? 0 : -1;
  }
  if (nums.length === 2) {
      if (nums[0] === target) return 0;
      if (nums[1] === target) return 1;
      return -1;
  }
  
  var left = 0;
  var right = nums.length - 1
  
  while (right >= left) {
      var mid = Math.floor( left + (right - left) / 2);
      
      if (nums[mid] === target) return mid;
      
      if (target < nums[mid]) {
          if (target < nums[left]) {
              left = mid + 1;
          } else {
              right = mid - 1; 
          }
      } else if (target > nums[mid]) {
         if (target < nums[left]) {
              left = mid + 1;
          } else {
              right = mid - 1; 
          }
      }
  }
  
  return -1;    

  
};