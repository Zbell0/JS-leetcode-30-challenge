Array.prototype.groupBy = function(fn){
    
    return this.reduce( (grouped,item) =>{
        let key = fn(item);
        if(!grouped[key]){
            grouped[key] = [];  
             // If the key doesn't exist in the grouped object, create a new array for it
        }

        grouped[key].push(item);
        // grouping process

        return grouped;
    },{} );
}



const test = [1,2,3].groupBy(String)
console.log(test)


