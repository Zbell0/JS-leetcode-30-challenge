var promiseAll = async function(functions){
    return new Promise( (resolve,reject)=>{
        const results = new Array(functions.length);
        let count = 0;
        functions.forEach((fn,i) => {
            fn()
            .then( val => {
                results[i] = val;
                count++;
                if(count === functions.length) resolve(results);
            })
            .catch(reason => reject(reason));
        });
    });
};



const promise = promiseAll([()=>new Promise(res => res(42))])
promise.then(console.log)



// <Key note>
// forEach ==> Same mechanics as for loop
// forEach statement receives a function and an index (option) as parameters.
// ex) names.forEach((item,index)=>{console.log(item,index)})

// var promiseAll = async function(functions) {
//     // Declare a new asynchronous function named promiseAll that takes an array of functions as an argument.
//     return new Promise((resolve, reject) => {
//         // Create and return a new Promise, which takes resolve and reject functions as arguments.
//         const results = new Array(functions.length);
//         // Initialize an array named results with the same length as the functions array.
//         let count = 0;
//         // Initialize a variable named count to 0. This will keep track of the number of completed promises.
//         functions.forEach((fn, i) => {
//             // Iterate over each element in the functions array using the forEach method.
//             // fn is the current asynchronous function, and i is its index.
//             fn()
//             // Execute the current function fn, which returns a Promise.
//             .then(val => {
//                 // If the Promise returned by fn resolves successfully, the then block is executed.
//                 // val is the resolved value.
//                 results[i] = val;
//                 // Store the resolved value in the results array at the ith position.
//                 count++;
//                 // Increment the count variable by 1.
//                 if (count === functions.length) resolve(results);
//                 // Check if all the Promises have been resolved by comparing count to the length of the functions array.
//                 // If true, call resolve with the results array to fulfill the outer Promise.
//             })
//             .catch(reason => reject(reason));
//             // If the Promise returned by fn rejects, the catch block is executed.
//             // The reason for the rejection is passed to the reject function to immediately reject the outer Promise.
//         });
//     });
// };
