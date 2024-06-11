// You can, however, do the following:
// Declare a global counter variable.
let counter = 0;
// Create a simple function that increments the variable, and then 
// calls itself recursively.
function increment(){
    {
        console.log(counter)
        counter++
        increment()
        
    }

}

increment()
// e in try and catch universal for error*
// Surround the initial function call in a try/catch block.
// Within the catch, log the error and the value of the counter variable.
// As your first task, complete the steps abov
// 