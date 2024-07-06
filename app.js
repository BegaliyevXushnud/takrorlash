



// 2-masala

// let arr = 'Salom dunyo';
// let bush = []
// let count = 0;
// function  news(son) {
//     for(let i = 0; i < arr.length; i++) {
//         if(arr[i] === 'a' || arr[i] === 'o' || arr[i] === 'i' || arr[i] === 'e' || arr[i] === "o'" || arr[i] === 'u' ) {
//            count++
//             bush.push(arr[i]);
//         }
//     }
//     console.log(count)
//     console.log(bush)
// }
// news();


// 3-masala
// function son (arr) {
//     if (arr.length === 0) return arr;
//
//     let minIndex = 0;
//     let maxIndex = 0;
//     let minValue = arr[0];
//     let maxValue = arr[0];
//
//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] < minValue) {
//             minValue = arr[i];
//             minIndex = i;
//         } else if (arr[i] > maxValue) {
//             maxValue = arr[i];
//             maxIndex = i;
//         }
//     }
//     [arr[minIndex], arr[maxIndex]] = [arr[maxIndex], arr[minIndex]];

//     return arr;
// }
// let arr = [1, 3, 2, 0, 4, 5];
// let result = son(arr);
// console.log(result); // [1, 3, 2, 5, 4, 0]



// 4-masala
// function  word() {
//     let str =  "Salom dunyo";
//     let count = 0;
//     for (let i = 0; i < str.length; i++) {
//         if(str[i] === 'a'){
//             count++
//         }
//     }
//     console.log(count)
//
// }
// word()










// 5-masala
// let nums = [2, 7, 11, 15];
// let target = 9;
// function bottom(nums, target) {
//     for (let i = 0; i < nums.length; i++) {
//         for (let j = i + 1; j < nums.length; j++) {
//             if (nums[i] + nums[j] === target) {
//                 return [i, j];
//             }
//         }
//     }
//     return null;
// }
// let result = bottom(nums, target);
// console.log(result);







// 6-masala
// function dublicate() {
//     let arr = [1,2,3,3,3,4,5,6]
//     let son1 = [];
//     let son2 = [];
//     for (let i = 0; i < arr.length; i++) {
//     let item = arr[i];
//     if (!son1[item]) {
//         son1[item] = true;
//         son2.push(item);
//     }
// }
//
//     console.log(son2);
// }
// dublicate()