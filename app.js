// You can, however, do the following:
// Declare a global counter variable.
let counter = 0;
// Create a simple function that increments the variable, and then 
// calls itself recursively.
function increment(){
  try{
        console.log(counter)
        counter++
        increment()
       
    }catch(error){
        // try and catch work in tandem. e in try and catch universal for error (both work)*
    console.error(error)
    console.log(counter)
    // Within the catch, log the error and the value of the counter variable.
    }

}
// Surround the initial function call in a try/catch block.
increment()
//8982 was my outcome


function flattenArr(arr){
    const givenArr = arr.flat()
    try{
        console.log(givenArr.flat())
        flattenArr(arr)
    }catch(error){
        console.error(error)
        console.log(error)
    }

}

console.log(flattenArr([1],[2],[3]))
//Team leader Marlie explained flattening array is a higher function taking a 
//nested array and making it a single array