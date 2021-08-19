// let array = [2,3,6,9];
// let target = 9;

// loop through the array and pass an index
// in that same loop, loop through it again so as to get the second number
// but this time first of you have to include the index or the number of the first looped array
// and you have to check if the index of this current item=index of the first looped item
// if yes, skip it,
// if no ....


// let sum = function(arr, target) {
//     array.forEach(function(item, index){
//         console.log(item, index)
//     })
//     let diff = target - item;
//     console.log(diff)
//     let x = array.indexOf(diff)
//     array.forEach(function(item2, index2){
//         // console.log(item2, index2)
//         if(index == index2){
    
//         }
//         if(index + index2 != target){
    
//         }
//         }
//     )};
// sum();

// 

// function sum(numbers, target) {
//     // let numbers = [2,3,6,9];
//     // let target = 9;
//     numbers.forEach(function(number, index){
//         // console.log(number, index)
//         let diff = target- number
//         // console.log(diff)
//        numbers.forEach(function(number2, index2){
//            if (number2 == diff){
//                if(number2 + number == target ){
//                    console.log( index, index2)
//                }
//            }
//            else if (number2 == number && number2 + number == target) {
//             //    console.log(index, index2)
//            }
//        })
//     })
// }

// sum([2,3,6,9], 9);
// // sum([2,7,11,15], 9);
// // sum([3,2,4], 6);
// sum([3,3], 6);


//Node.js 10.14.0
//Plain Javascript and Node.js is supported
// html/css is not supported here 
// const sum = (numbers, target) => {
//     let ans = []
//     numbers.forEach(function(number, index){
//         if (ans.length <2 || ans.length >2) {
//             ans = [];
//             ans.push(index)
//         // console.log(number, index)
//         let diff = target- number
//         // console.log(diff)
//        numbers.forEach(function(number2, index2){
//            if (number !== number2){
//                if(number2 == diff){
//                 ans.push(index2)
//                 // console.log(ans)
//                }
//            }
//            else if (number == number2 && index2 !== index){
//                if(number2 == diff)
//                ans.push(index2)
//             //    console.log(ans)
//            }
//        })
//         }
//     })
//     return ans
//   };


  const sum = (nums, target) => {
    const ans = [];
    nums.forEach((n,i) => {
      if (ans.length === 0) {
        const diff = target - nums[i];
        const newArr = nums.filter((z,ind) => ind !== i);
        //console.log(i,newArr, diff);
        if (newArr.some(n => n === diff)) {
          //console.log(true);
          y = newArr.findIndex(n => n === diff);
          //console.log(y);
          ans[0] = i;
          ans[1] = y + 1;
        }
      }
    });
    console.log('ans',ans); 
    return ans;
  };


//   
  
  
  // test starts here
  
  // Inputs/test cases
  const inputs = [
    {input: [2,7,6,12], target: 9, expect: [0,1]},
    {input: [3,2,4], target: 6, expect: [1,2]},
    {input: [3,3], target: 6, expect: [0,1]},
  ];
  
  const test = (fn) => {
    let pass = true;
    inputs.forEach(({input, target, expect}) => {
      if (pass === false) return;
      const result = fn(input, target);
      //console.log("res", result)
      pass = result[0] === expect[0] && result[1] === expect[1];
     // if (pass === false) {
        console.log(pass ? 'passed' : "failed")
        console.table({input: input, expected: expect, result: result})
     // }
    });
  };
  
  test(sum);