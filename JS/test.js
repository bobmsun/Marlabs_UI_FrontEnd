
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

        // console.log("Finally")
        () => {
        console.log(
        "This is finally() block that is " +
        "executed after Promise is settled"
      );
     }
    );

    ///async await
    //Promises.all
    //Promise chaining