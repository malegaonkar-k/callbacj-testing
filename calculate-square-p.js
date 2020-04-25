
function calculateSquare(number){
 const  promise = new Promise(function(resolve,reject){
        setTimeout(function(){
            if(typeof number !== 'number') {
                reject(new Error('Argument of type number is expected'));
                 
            }
            const result= number * number;
            resolve(result);
        },3000);
     }
 );
 return promise;
    
};
/*
// module.exports =  calculateSquare;
console.log('.......')
calculateSquare(2)
.then((value) =>{
    console.log('Succes ' + value);
    },(reason) => {
    console.log('Error '+reason);
}
).catch(e=> console.log(e));

console.log('.......')
calculateSquare('string')
.then((value) =>{
    console.log('Succes ' + value);
    },(reason) => {
    console.log('Error '+reason);
}
);

function capitalize_(text){
    return text[0].toUpperCase()+ text.substr(1);
}

function capitalize(text){

    return new Promise(function(resolve,reject){
        if(typeof text !== 'string'){
             reject(new Error('Argument must be a string'))
        }    
        const result = text[0].toUpperCase()+ text.substr(1);
         resolve(result);
    })
    
}

capitalize('some text')
.then((result)=>{
 console.log('some text result : '+ result);
},error=>{
console.log("error message "+error );
});

capitalize(12)
.then((result)=>{
 console.log('some text result : '+ result);
},error=>{
console.log("error message "+error );
});

capitalize(12)
.then((result)=>{
 console.log('some text result : '+ result);
}).catch(error =>{
    console.log("errr  "+error);
});


// chaining Promises
//p1-> p2 -> p3
*/
calculateSquare(10)
.then((value) =>{
    console.log('1 chain promise value => ' + value);
     
})
.then((value1) =>{
    console.log('2 chain promise value => ' + value1);
})

// here value1 is undefined priviosu then doesnot return any thing so it is undefine
calculateSquare(2)
.then((value) =>{
    console.log('1 chain promise value => ' + value);
    return 3;  // this value will go to next then in value1
})
.then((value1) =>{
    console.log('2 chain promise value => ' + value1);
})

calculateSquare(3)
.then((value) =>{
    console.log('1 chain promise value => ' + value);
    throw new Error('error');  // this value will go to next then in value1
})
.then((value1) =>{
    console.log('2 chain promise value => ' + value1);
},reason=>{
    console.log('error happended ' + reason)
})


calculateSquare(4)
.then((value) =>{
    console.log('a chain promise value => ' + value);
    // return calculateSquare(5)
    return calculateSquare('string')
})
.then((value1) =>{
    console.log('a chain promise value => ' + value1);
},reason=>{
    console.log('error happended ' + reason)
})

// avoid promise callback hell


calculateSquare(1)
 .then(value =>{
     console.log(value);
     return calculateSquare(2);
 })
 .then(value =>{
    console.log(value);
    return calculateSquare(3);
})
.then(value =>{
    console.log(value);
    return calculateSquare(4);
})
.then(value =>{
    console.log(value);
    return calculateSquare(5);
})
.then(value =>{
    console.log(value);
    return calculateSquare(6);
})


// Handling Promise Rejection

// onley succssfull cases
//somePromise.then(onFulfilled)

//onley promise rejections
//somePromise.the(undefined,onRejected)


calculateSquare(1)
 .then(value =>{
     console.log(value);
   
     return calculateSquare(2);
 })
 .then(value =>{
    throw new Error('something went wrong')
    console.log('promise fulfill ' +value);
    //return calculateSquare(3);
},reason =>{
    console.log('promise rejection '+reason);
}) 
// above will not handle rejection throw unhandled error to avoid this or fix this

calculateSquare(1)
 .then(value =>{
     console.log(value);
   
     return calculateSquare(2);
 })
 .then(value =>{
    throw new Error('something went wrong')
    console.log('promise fulfill ' +value);
   
})
.then(undefined, reason =>{ 
    console.log('error happned here '+reason);
})  


// catch() method is onley handle rejection cases take one org
//myPromise.catch(onRejected)

calculateSquare(1)
 .then(value =>{
     console.log(value);
   
     return calculateSquare(2);
 })
 .then(value =>{
    throw new Error('something went wrong')
    console.log('promise fulfill ' +value);
   
})
.catch(reason =>{ 
    console.log('error happned here '+ reason);
})  


//

function logToConsole(somePromise){
 somePromise.then(value => console.log(value));
}

const somePromise = new Promise(
    (resolve, reject) => resolve('Hello')
)

logToConsole(somePromise);
const v= 'string';
//logToConsole(v);//somePromise.then i not a funciton

const promisifiedValue = Promise.resolve(v);
logToConsole(promisifiedValue);

const rejectedPromise= Promise.reject(v);
const rejectedPromise1 = Promise.reject(new Error('some error'));
logToConsole(rejectedPromise1);


// executing Promises In parllel

// multiple http request and wiat for complete all

function askfirstDealer(){
    return new Promise((resolve, reject) =>{
        setTimeout(()=> resolve(8000),3000);
    });    
}

function askSecondDealer(){
    return new Promise((resolve, reject) =>{
        setTimeout(()=> resolve(12000),5000);
    });    
}

function askThirdDealer(){
    return new Promise((resolve, reject) =>{
        setTimeout(()=> resolve(10000),8000);
    });    
}

Promise.all([askfirstDealer(),askSecondDealer(),askThirdDealer()])
.then(prices=>{
    console.log(prices)
})

Promise.all([1,'aa',true])
.then(prices=>{
    console.log(prices)
})
/*
Promise.all([1,'aa',true])
Promise {<resolved>: Array(3)}
__proto__: Promise
[[PromiseStatus]]: "resolved"
[[PromiseValue]]: Array(3)
0: 1
1: "aa"
2: true
length: 3
__proto__: Array(0)
*/ 
Promise.all([])
.then(prices=>{
    console.log(prices)
})
/*
Promise {<resolved>: Array(0)}
__proto__: Promise
[[PromiseStatus]]: "resolved"
[[PromiseValue]]: Array(0)
*/

// Promise all rejection



function askSecondDealer(){
    return new Promise((resolve, reject) =>{
        setTimeout(()=> reject('Not sutaible car'),5000);
    });    
}

Promise.all([
    askfirstDealer(),
    askSecondDealer(),
    askThirdDealer()
])
.then(prices =>{
    console.log(prices);
})
.catch(error => {
    console.log(error);
})


Promise.all([
    askfirstDealer().catch(error => {return error}),
    askSecondDealer().catch(error => {return error}),
    askThirdDealer().catch(error => {return error}),
])
.then(prices =>{
    console.log(prices);
})
.catch(error => {
    console.log(error);
})
// o/p [ 8000, 'Not sutaible car', 10000 ]

// promise.all fail fast behavior
//if any one of all promise reject , promise.all reject emidiatly



Promise.all([
    askfirstDealer().catch(error => {return error}),
    askSecondDealer().catch(error => {return error}),
    askThirdDealer().catch(error => {return error}),
    Promise.reject('rejected for some reasons')
])
.then(prices =>{
    console.log(prices);
})
.catch(error => {
    console.log(error);
})


// Executing Promises in Parallel. which one is Faster

// Promise.race
// need a result from multiple source, fastest will be taken not other
// request lift for three friend any one who reach first to you, you will take ride with him
// for other will give thans messaage
askA=()=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=> resolve('Yep, I got one extra pen'),3000)
    })
}

askB=()=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=> reject('sorry, no extra pen'),5000)
    })
}

askC=()=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=> resolve('Sure, I have one extra pen'),2000)
    })
}


Promise.race([askA(),askB(),askC()])
.then(value =>{
    console.log(value);
})

askE=()=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=> reject('sorry, no extra pen'),1000)
    })
}


Promise.race([askA(),askB(),askC(), askE()])
.then(value =>{
    console.log(value);
})
.catch(reason => {
    console.log('Rejected: '+reason);
})