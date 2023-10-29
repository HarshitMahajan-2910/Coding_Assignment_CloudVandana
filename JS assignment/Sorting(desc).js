console.log("<<<<<<<<<<<<<Perform sorting of an array in descending order>>>>>>>>")
// ***********************Method-1********************************************
console.log("******Method-1*******")
let arr = [1, 2, 5, 10, 7]
console.log("Array before sorting :", arr);
for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
        
        
        
        if (arr[i] > arr[j]) {
            let c = arr[i]
            arr[i] = arr[j]
            arr[j] = c
        }
    }
}
console.log("Array after sorting in descending order: [" + arr.join(" ") + " ]")

// **********************Method-2****************************************************

console.log("******Method-2*******")
let arr2=[45, 12, 20,65, 7, 25];
console.log("Array before sorting: ",arr2)
arr2.sort((a,b)=>b-a);
console.log("Array after sorting in descending order: [ "+arr2.join(" ")+" ]")
