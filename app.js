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
    }

}
// Surround the initial function call in a try/catch block.
// Within the catch, log the error and the value of the counter variable.
increment()



// As your first task, complete the steps abov
// 