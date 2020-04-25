/*
function print(number){
    console.log(number)
}

const numbers = [1,2,3,4];
numbers.forEach(print);
*/

/*
// callback in asynchronours way
function f(callback) {
    setTimeout(() =>callback(),0);
}

f(()=> console.log('this is a callback '));
console.log('Hello world')
*/
/*
// callback in sychronous way
function f1(callback) {
    callback()
}

f1(()=> console.log('this is a callback1 '));
console.log('Hello world1')
*/


/*
// handling error in callback


function calculateSquare(number, callback) {
    setTimeout(function(){
        if (typeof number !== 'number'){
            throw new Error('Argument of type number is expected');
        }
        const result = number * number;
        callback(result);
    },1000)
}

try{
    calculateSquare('bad argument',function(result){
        console.log(result);
    });
}catch(error){
    console.log('cought error'+  String(error))
}
*/
// in above case we will get error , 
// not a catch() message
// as when we call calculateSqaure() method it will take some time to execute
// but catch block executed and then callback will executed
// so it will not cought in catch block

// try catch blocks will be in call stack and executing
// callback will be placed in to message queue as soon as it found settimeout() (as async) function call and wait for completion
// so first try, catch executed and then after stack is empty -> event loop will check wether
// there is anything in message queue then it found callback() and then it willbe placed in
// callstack and executed
//we can not use try catch dealing with asynch code

// insted provide arg to call back for error and result as follows



function calculateSquare(number, callback) {
    setTimeout(function(){
        if (typeof number !== 'number'){
            callback(new Error('Argument of type number is expected'));
            return;
        }
        const result = number * number;
        callback(null,result);
    },1000)
}


calculateSquare('bad argument',function(error, result){
    if(error !== null)
    {
        console.log('cought error'+  String(error))
        return;
    }
    console.log(result)
});



// calculateSquare(2,function(error, result){
//     if(error !== null)
//     {
//         console.log('cought error'+  String(error))
//         return;
//     }
//     console.log(result)
// });


// Pros and Cons of callbacks

/*

Pros:
 1. Simplicity.
 2. Popularity

 Cons:
    1. lack of readablity
    2. Callback hell. (sevral call chain)


 Example:
React 
     console.log(this.state.counter);
     const newState = {counter : 2};
     setState{newState, callback}   
console.log(this.state.counter)

vanilajs

button.addEventListner('click',function(event){
    alert("button clikecked")
})

jquery
    $("#myId").click(function(){
        alert('click event called');
    })


mysql-npm package




*/