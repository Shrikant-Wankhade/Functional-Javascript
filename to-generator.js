/*
write a function 'to'
takes a generator and an end value, and returns a 
generator that will produce numbers 
up to that limit

*/

function from(a){
    return function (){
        return a++;
    }
}

function to(gen, limit){
     return function (){
        let value = gen();
        if(value <= limit){
            return value;
        }
        return undefined;
     }
}
const increment = to(from(2), 6);

console.log(increment())
console.log(increment())
console.log(increment())
console.log(increment())
console.log(increment())
console.log(increment())
