
// Define the Promise
let task = new Promise((resolve, reject) => {
    setTimeout(() => {
    
      // Reject the Promise
      reject("Promise has been rejected!");
    }, 2000);
  });
    
  task
    .then(
      (data) => {
        console.log(data);
      },
    
      // Handle any error
      (error) => {
        console.log("Error:", error);
      }
    )
  
    // Specify the code to be executed 
    // after the Promise is settled
    .finally(

        // console.log("Finally")             // will not wait for promise to be settled; writing like this is actually not proper
        () => {                               // should write a function inside finally block, this fuction will be executed right after promise is settled.
        console.log(
        "This is finally() block that is " +
        "executed after Promise is settled"
      );
     }
    );


    // 只要当 promise settles down (settle down means promise 明确了是 reject or success)， finally 就会立刻 run

    // async await
    // Promises.all
    // Promise chaining