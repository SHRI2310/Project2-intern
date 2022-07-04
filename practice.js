// function ReplaceElements(arr,n)
// {
//  // [4,5,2,1,7,6]
//     // Max value initialised
//     // to element at 0th index
//     let max_ele = arr[0];//4...............5......................5.................5.................7
//     arr[0] = -1;    // [-1,5,2,1,7,6]....... [-1,4,2,1,7,6]....... [-1,5,5,1,7,6]....[-1,5,5,5,7,6]...[-1,5,5,5,5,6]
 
//     for (let i = 1; i < n; ++i) {
//         // If max_ele is greater than arr[i]
//         // then just replace arr[i] with max_ele
//         if (max_ele > arr[i])
//             arr[i] = max_ele;//....i=1x, i=2=> [-1,5,5,1,7,6], i=3=> [-1,5,5,5,7,6], i=4x, i=5=>[-1,5,5,5,5,7]
 
//         // Else if update the max_ele also
//         else if (max_ele <= arr[i]) {
//             let temp = arr[i];
//             arr[i] = max_ele;   // [-1,4,2,1,7,6]//i=4=>[-1,5,5,5,5,6]
//             max_ele = temp;     //max=5........i=4=>max=7
             
        
//         }
//     }
//     return arr  //[-1,4,5,5,5,7]
// }
 
// let array = [4,5,2,1,7,6]
// len = 6
//  console.log(ReplaceElements(array,len))
 
// //  for(i=0;i<len;i++) 

// // console.log(array[i]+ " ")


let arr = [1,2,3]

sum = 0;
 let x = arr.forEach(function add(a){
     return sum + a
 })
 console.log(x)