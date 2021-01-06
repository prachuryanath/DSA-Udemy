// Given 2 arrays, create a function that lets a user know (true/false) 
// whether these two arrays contain any common items.
// For example:
// const array1 = ['a','b','c','x'];
// const array2 = ['z','y','i'];
// should return false..
// -----------------
// const array1 = ['a','b','c','x'];
// const array2 = ['z','y','x'];
// should return true..

// 2 parameters(arrays) - no size limit
// return true or false

// const array1 = ['a','b','c','x'];
// const array2 = ['z','y','f'];

// function containsCommonItem(arr1,arr2) {
//     for(let i=0;i<arr1.length;i++) {
//         for(let j=0;j<arr2.length;j++) {
//             if(arr1[i]===arr2[j]) {
//                 return true;
//             }
//         }
//     }
//     return false
// }

// containsCommonItem(array1,array2);
//O(a*b) -> Quadratic time complexity. Not a good solution !
//O(1) -> Space complexity

const array1 = ['a','b','c','x'];
const array2 = ['z','y','f'];
 
function containsCommonItem2(arr1,arr2) {
    // loop through first array and create object where properties == items in the array
    let map={};
    for (let i=0;i<arr1.length;i++) {
        if(!map[arr1[i]]) {
            const item = array1[i];
            map[item] = true;
        }
    }
    // loop through second array and check if item in second array exists on created object
    for (let j=0;j<arr2.length;j++) {
        if (map[arr2[j]]) {
            return true;
        }
    }
    return false
}
// containsCommonItem2(array1,array2)
//O(a+b) Better Time complexity
//O(a) Space Complexity

function containsCommonItem3(arr1,arr2) {
    return arr1.some(item => arr2.includes(item))
}

containsCommonItem3(array1,array2)



