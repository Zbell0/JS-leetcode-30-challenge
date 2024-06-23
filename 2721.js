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


