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

function sum(e) {
    let numbers = [2,3,6,9];
    let target = 9;
    numbers.forEach(function(number, index){
        // console.log(number, index)
        let diff = target- number
        // console.log(diff)
       numbers.forEach(function(number2, index2){
           if (number2 !== number){
               if(number2 + number == target ){
                   console.log( index, index2)
               }
           }
       })
    })
}

sum();

