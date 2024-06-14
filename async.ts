#! /usr/bin/env node
import inquirer from "inquirer";

Question:1
// Write a simple asynchronous TypeScript function fetchGreeting that returns a 
// greeting message after a 2-second delay using setTimeout.

function fetchGreeting():Promise< string > {
    return new Promise((resolve) => {         // Step 1: Create a new Promise
        setTimeout(() =>                      // Step 2: Use setTimeout to simulate delay
        {                  
            resolve("I am student of Governer Sindh Initiative");  // Step 3: Resolve the Promise after 3 seconds
        }, 
        3000);                                //Step 4: Delay of 3000 milliseconds (3 seconds)
    });

}

fetchGreeting().then((message) => 
    console.log(message));                    // Step 5: Call fetchGreeting() and handle the resolved value


Question:2
// Write a function simulateTask that simulates a task by logging "Task started", 
// waits for 1 second, and then logs "Task completed". Use setTimeout for the delay

function simulateTask(){
    console.log("Task started");              //Step 1: Print "Task started" to the console
    setTimeout(function(){                    // Step 2: Set a timeout function to simulate a delay of 1000 milliseconds (1 second)
        console.log("Task completed");       // Step 3: After 1 second, print "Task completed" to the console
},
1000);
}
simulateTask();                              // Step 4: Call the simulateTask() function

Question:3
// Write a function fetchData that returns a Promise which resolves with the string 
// "Data fetched successfully!" after a delay of 1 second.

function fetchData(){
    return new Promise((resolve,reject)=>{       // Step 1: Create a new Promise
        setTimeout(()=>{                           // Step 2: Simulate a delay of 2000 milliseconds (2 seconds)
         resolve("Data fetched Sucessfully!");    // step:3 Resolve the Promise after 1 second with the success message
},1000);                                          // step:4 Delay of 1000 milliseconds (1 second)
});
}

fetchData().then((data)=>{                         // Step 4: Handle the resolved value using .then()
    console.log(data);                             // Step 5: Log the resolved data ("Data fetched Successfully!") to the console
}).catch((error)=>{                                // Step 6: Handle any errors using .catch()
    console.log("Error fetching data",error);      // Step 7: Log an error message and the error object to the console
}
);

Question:4
// Write a function fetchWithError that returns a Promise. It should randomly either 
// resolve with "Data fetched successfully!" or reject with "Data fetch failed!" after a 
// delay of 1 second. Handle the rejection using .catch

function fetchWithError(){
    return new Promise((resolve , reject)=>{         // Step 1: Create a new Promise
        setTimeout(()=>{                             // Step 2: Simulate a delay of 1000 milliseconds (1 second)
            let randomNumber = Math.random();        // Step 3: Generate a random number between 0 and 1
            if (randomNumber <  10) {                // Step 4: Check if the random number is less than 10
                resolve("Data fetch succesfully!");  // Step 5a: If true, resolve the Promise with success message
            }else{
                reject("Data fetch failed!");        // Step 5b: If false, reject the Promise with error message
            }
        },1000);
});
}

fetchWithError().then((data)=>{                      // Step 6: Handle the resolved value using .then()
    console.log(data);                              // Step 7: Log the resolved data ("Data fetch successfully!") to the console
}).catch((error)=>{                                 // Step 8: Handle any errors using .catch()
    console.log("Error fetching Data", error);      // Step 9: Log an error message and the error object to the console
}
);

Question:5
// Write a function executeSequentially that executes two functions fetchData and 
// processData sequentially using Promises, and logs the results in the order they are 
// called.

function FetchData(){    
    return new Promise((resolve , reject)=>{      // Step 1: Create a new Promise
   setTimeout(()=>{                              // Step 2: Simulate a delay of 1000 milliseconds (1 second)
    resolve("Data fetched succesfully!");       // Step 3: Resolve the Promise with success message after the delay
},1000);
});
}

function processData(data:any){
    return new Promise((resolve , reject)=>{
        setTimeout(()=>{
        resolve(`Data processed:${data}`);
},400);
});
}

function executeSequentially(){
fetchData().then((fetchedData)=>{    // Step 1: Handle the resolved value from fetchData() using .then()
    console.log("fetchedData");      // Step 2: Log the fetched data to the console
    return processData(fetchData);  // Step 3: Return a new Promise from processData()
}).then((processData) =>{           // Step 4: Handle the resolved value from processData() using .then()
    console.log(processData);      // Step 5: Log the processed data to the console
}).catch((error)=>{                // Step 6: Handle any errors using .catch()
    console.log("Error", error);   // Step 7: Log an error message and the error object to the console
});
}
executeSequentially();
