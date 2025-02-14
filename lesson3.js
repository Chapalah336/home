// // alg №1 lesson 3
// // Find Pair with Sum Closest to Target
// var nums = [10, 22, 28, 29, 30, 40] ;
// var target = 54;

// function ClosestToTarget(nums, target) {
//     var closestDiff = Infinity;
//     var closestPair = [];

//     for (var i = 0; i < nums.length; i++) {
//         for (var o = i + 1; o < nums.length; o++) {
//             var pairSum = nums[i] + nums[o];
//             var difference = Math.abs(pairSum - target);

//             if (difference < closestDiff) {
//                 closestDiff = difference;
//                 closestPair = [nums[i], nums[o]];
//             }
//         }
//     }
//     return closestPair;
// }

// var result = ClosestToTarget(nums, target);
// console.log(result) ;




// // lesson 4 alg 1

// array = [5, 1, 22, 25, 6, -1, 8, 10];
// sequence = [1, 6, -1, 10];
//  function sravnitelPoryadka (arr, seque) {
//     var secondRabbit = 0;
//     for (var rabbit = 0; rabbit < arr.length; rabbit++) {
//         if (arr[rabbit] === seque[secondRabbit]) {
//             secondRabbit++;
//         }
//         if (secondRabbit === seque.length) {
//             return true;
//         }
//     }
//     return false;
//  } 
// console.log(sravnitelPoryadka(array, sequence));