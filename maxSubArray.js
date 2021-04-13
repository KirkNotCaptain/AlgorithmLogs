/*
Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

Example 1:
Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.

Example 2:
Input: nums = [1]
Output: 1

Example 3:
Input: nums = [5,4,-1,7,8]
Output: 23

Constraints:
1 <= nums.length <= 3 * 104
-105 <= nums[i] <= 105

*/


//Solution using dynammic programming and Kadane's Algorithm
/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxSubArray = function(nums) {
   if (nums.length === 0) return 0;
   if (nums.length === 1) return nums[1];

   var sum = 0;
   var maxSum = -Infinity;
   
   for (var i = 0; i < nums.length; i++) {
     sum += nums[i];
     maxSum = Math.max(sum, maxSum);

     if (sum < 0) sum = 0;
   }

   return maxSum
};