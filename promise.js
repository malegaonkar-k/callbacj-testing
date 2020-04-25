// Promise is a special javascript Object that represent an eventual result of an asynchronous action.
// its like proxy which will get data from async funciton
// like proxy for value which we dont have yet.
//if we want to get a result from async(take 10 sec) function we have two options 
//1. pass a callback
//2. return a Promise

// promise has 1. PromiseStatus, 2. PromiseValue
// these are internal properties we can not use to print
// if everything get well PromisValue contain real value of async function
// a promise can be in three state 
//.1.pending -PromiseValue will bbe undefined
// 2. fulfill -PromiseValue will be real value
// 3.rejected -PromiseValue will be reson for rejected

// there is special class in js Promise
// to create Promise create instatnce of Promise
const myPromise = new Promise(function(resolve,reject){
 
});
console.log(myPromise);

// when promise created but not resolved or rejected 
   // the <state> will be pending



// Promise constructore takes onley one argument ie. a funciton , it is required without it 
// we can not create Promise, it is excuter, and envocked when creting Promise
// function take two arguments resolve,reject these are functions,
//intially Promise is in pending state
// to transfer to fullfil state resolve
// to transfer to reject state reject

const myPromise1 = new Promise(function(resolve,reject){
    resolve('value')
   });
   console.log(myPromise1);
// when promise resolved 
   // the <state> will be fullfil
   // the <value> will be value

   const myPromise2 = new Promise(function(resolve,reject){
    reject('value')
   });
   console.log(myPromise2);

   // when promise rejected 
   // the <state> will be rejected
   // the <reason> will be value


   // Promise can change its state onley when it ssi in pending state
   // it can not change state when it is in fulfilled or rejected state



   const myPromise3 = new Promise(function(resolve,reject){
    resolve('one');
    reject('resone one');
    reject('reason two')
   });
   console.log(myPromise3);

   const myPromise4 = new Promise(function(resolve,reject){

    reject('resone 1');
    reject('reason 2')
    resolve('1');
   });
   console.log(myPromise4);


   // Promise have some value and method to use
   // onFulfilled()
   // onRejected()
   // then(onFulfilled(){})

   const myPromise5 = new Promise(function(resolve,reject){
    resolve('Hello world'); 
   });
   console.log(myPromise5);
   myPromise5.then(function(value){
       console.log("fullfiled",value);

   })


   const myPromise6 = new Promise(function(resolve,reject){
    reject('Hello world'); 
   });
   console.log(myPromise6);
   myPromise5.then(function(value){
       console.log("fullfiled",value);

   })

console.log('after promise then')


