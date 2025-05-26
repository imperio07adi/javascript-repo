//QUESTIONS---------------------------------
// * Sum of all Numbers
//     * Given: [1,2,3]
//     * Output: 6
// let arr = [1,2,3];
// let a =0
// for (let i=0;i<arr.length;i++){
//     a += arr[i]
// }
// console.log(a);


// * Find Max Number
//     * Given: [4,9,2,7]
//     * Output: 9
// let arr =[4,9,2,7]
// let max = 0
// for(let i=0;i<arr.length;i++){
//     if(max<arr[i]){
//         max = arr[i]
//     }
// }
// console.log(max);



// * Find the Minimum Number
//     * Given: [4,9,2,7]
//     * Output: 2
// let arr = [4,9,2,7];
// min = arr[0] 
// for(let i=0;i<arr.length;i++){
//     if (arr[i]< min){
//         min = arr[i]
//     }
// }
// console.log(min);





// * Count Even Numbers
//     * Given: [1,2,3,4,5]
//     * Output: 2 (2 and 4)
// const number = [1,2,3,4,5]
// let count = 0
// for(let i=0;i<number.length;i++){
//     if (number[i] % 2 ==0){
//         // console.log(number[i])
//         count++
//     }
// }
// console.log(count);




// // * Count Occurrences of a Number
// //     * Given: [1,2,2,3,2], target: 2
// //     * Output: 3
// const num = [1,2,2,3,2]
// const target = 2
// let count = 0
// for(let i=0;i<num.length;i++){
//     if(num[i] == target){
//         count++
//     }
// }
// console.log(count);



// * Reverse an Array
//     * Given: [1,2,3]
//     * Output: [3,2,1]
// const arr = [1,2,3]
// let rev = []
// for (let i=arr.length-1; i>=0;i--){
//     rev.push(arr[i])
// }
// console.log(rev);




// * Remove Duplicates
//     * Given: [1,2,2,3]
//     * Output: [1,2,3]
// let arr = [1,2,2,3,3,4,4,5]

// for(let i=0;i<arr.length;i++){
//     if(arr[i]==arr[i+1]){
//         arr.splice((arr[i]), 1)
//     }
// }
// console.log(arr);


// * Check if  Array Contains a Value
//     * Given: [5,7,8], Value :7
//     * Output: true

// let arr = [5,7,8]
// let target = 7
// istrue = false

// for (let i=0;i<arr.length;i++){
//     if(arr[i] == target){
//         istrue = true
//         break
//     }
//     else if (arr[i] != target){
//         istrue = false
//     }
// }
// console.log(istrue);



// * Double All Values
//     * Given: [1,2,3]
//     * Output: [2,4,6]
// const arr = [1,2,3]
// let uparr = []
// for(let i=0;i<arr.length;i++){
//     uparr.push(arr[i]*2)

// }
// console.log(uparr);


// * Filter Out Odd Numbers
//     * Given: [1,2,3,4]
//     * Output: [2,4]

// const arr = [1,2,3,4]
// let uparr = []
// for(let i=0;i<arr.length;i++){
//     if(arr[i] % 2 ==0){
//         uparr.push(arr[i])
//     }
// }
// console.log(uparr);
