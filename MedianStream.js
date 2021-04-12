/*The Prompt
Given a stream of unordered integers, find the median of the stream. 
We will be asked to find the median multiple times, 
so the peekMedian function should have optimal time complexity.

Note: The "median" is the middle number of a sorted, 
odd-length set or the average of the two middle numbers in a sorted, even-length set.Ω

*/

//Examples
// [1, 4, 8]
// Median is 4 (middle number)

// [1, 3, 7, 8]
// Median is 5 (average of two middle numbers)


var MedianStream = function () {
  this.stream = [];
};

MedianStream.prototype = {
  insert: function (val) {
      //i: integer
      //should add some val to the stream
      //o: none

//       if (typeof val === 'Number') {
//         this.stream.push(val);
//       }
    this.stream.push(val)
  },
  peekMedian: function () {
      //i: none, should work on this instance's stream
      //should return the median of the instance's stream
      if (this.stream.length === 0) {
          return null;
      } else if (this.stream.length === 1) {
          return this.stream[0];
      } else if (this.stream.length % 2 === 0) {
          var stream = this.stream.sort((a,b) => a-b)
          var middleNumOne = stream[stream.length/2]
          var middleNumTwo = stream[(stream.length/2) - 1]
          return (middleNumOne + middleNumTwo) / 2
      } else if (this.stream.length % 2 !== 0) {
          var stream = this.stream.sort((a,b) => a-b)
          var middleNum = stream[Math.floor(stream.length/2)]
          return middleNum;
      }
  },
  size: function () {
      //should return the size / length of the stream
      return this.stream.length;
  }
};


//Test Cases
var mStream = new MedianStream();
mStream.insert(1);
mStream.insert(3);
mStream.insert(2);
mStream.peekMedian(); 
// => 2
mStream.insert(5);
mStream.insert(4);
mStream.peekMedian(); 
// // => 3

