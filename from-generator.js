/* Task
    Write a 'from' function that produces
    a generator that will produce a
    series of values.

*/ 

function from(a){
    return function (){
        return a++;
    }
}
const increment = from(2);

console.log(increment())
console.log(increment())
console.log(increment())