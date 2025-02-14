// alg №1 lesson 3
// Find Pair with Sum Closest to Target
// var nums = [10, 22, 28, 29, 30, 40] ;
// var target = 54;

// function PairsClosestToTarget(nums, target) {
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

// var result = PairsClosestToTarget(nums, target);
// console.log(result) ;


// alg №2 lesson 3
// s = "swiss";
// function findFirstUnique(str) {
//     var countMap = new Map();
//     for (var i = 0; i < str.length; i++) {
//         countMap.set(str[i], (countMap.get(str[i]) || 0) + 1);
//     }
//     for (var i = 0; i < str.length; i++) {
//         if (countMap.get(str[i]) === 1) {
//             return str[i];
//         }
//     }
// }
// var result = findFirstUnique(s);
// console.log(result);

// lesson 4 alg 1

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