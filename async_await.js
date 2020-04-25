const fetch = require("node-fetch");

// Async / Await. Async Keword

// according to wikipidia, async/await is a syntactic feature of programming laguages that
// allows an asynchoronous function to be structured in a way similar to an ordinary function.

// async keyword is used with function defination
// it can be placed before a function defination this way we can define async function,
//async function is function which execute asynchronoulsly
// async function alway return a promise
// js will atomatically wrap return of async function in to promise

async function f(){
 return 'simp string';

}

console.log(f());

// Promise {<resolved>: "simp string"}
// __proto__: Promise
// [[PromiseStatus]]: "resolved"
// [[PromiseValue]]: "simp string"



async function f1(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>resolve(true),1000)
    });
   
}
   const var1= f1();
   console.log(var1);
   // var1 is pending it will resolved after 1 sec but console.log() will excuted allready
// below run in browser console 
//   const var2= await f1();
//    console.log(var2);
//    async function f1(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>resolve(true),1000)
//     });
   
// }
//    const var1= f1();
//       console.log(var1);
// VM132:8 
// Promise {<pending>}
// __proto__: Promise
// [[PromiseStatus]]: "resolved"
// [[PromiseValue]]: true
// undefined
// var1
// Promise {<resolved>: true}
// __proto__: Promise
// [[PromiseStatus]]: "resolved"
// [[PromiseValue]]: true


//rejecting promie 

async function f2(){
    return  Promise.reject(404);
   
}
console.log("rejection of Promise  " + f2());
const var2= f2();
console.log("rejection of Promise1  " + JSON.stringify(var2));

// async function f2(){
//     return  Promise.reject(404);
   
// }
// undefined
// f2()
// Promise {<rejected>: 404}
// __proto__: Promise
// [[PromiseStatus]]: "rejected"
// [[PromiseValue]]: 404

// await keyword / operator
// use to wait for Promise is settled for resolved/rejected

function getSpecificNumber(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=> resolve(43),2000)
    })
}

async function f3(){
    const specificNumber = await getSpecificNumber();
    console.log("specificNumber "+specificNumber);
}

console.log(" f3 "+ f3())


function f4(){
    getSpecificNumber()
    .then(specificNumber => console.log(specificNumber));
}

f4();

function getRandomDogImage(){
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(value => console.log(value.message))
}

getRandomDogImage();

async function  getRandomDogImage1(){
    let response= await fetch('https://dog.ceo/api/breeds/image/random')
    let value=await response.json();
    console.log(value.message);
}

getRandomDogImage1();

// await is used in async function onlye
// give syntaz error 

// top level async js

//const number = await getSpecificNumber();
//console.log(number);
//SyntaxError: await is only valid in async function

(async function(){
    const number1 = await getSpecificNumber();
    console.log("number1 :: "+number1);
})();

// Handling Errors useing Async Await

async function f4(){
    const response = await fetch('https://some-host.com/wrong-url')
}

console.log(f4());
// gives unhandled error

// f4()
// Promise {<pending>}__proto__: Promise[[PromiseStatus]]: "rejected"[[PromiseValue]]: TypeError: Failed to fetch
// VM251:3 GET https://some-host.com/wrong-url net::ERR_CONNECTION_REFUSED
// f4 @ VM251:3
// (anonymous) @ VM275:1
// VM251:4 Uncaught (in promise) TypeError: Failed to fetch
// async function (async)
// f4 @ VM251:3
// (anonymous) @ VM275:1



async function f5(){
    try {
        const response = await fetch('https://some-host.com/wrong-url')     
    } catch (error) {
        console.log("error :: "+error)
    }
   
}


console.log(f5());
//error :: FetchError: request to https://some-host.com/wrong-url failed, reason: connect ECONNREFUSED 127.0.0.1:143


async function f6(){
    const response = await fetch('https://some-host.com/wrong-url')
}

f6().catch(e=> console.log('custom error '+e));
//custom error FetchError: request to https://some-host.com/wrong-url failed, reason: connect ECONNREFUSED 127.0.0.1:443

// sequential vs parllel excution

function printNumber1(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('printNumber1 is done');
            resolve(1)
        },1000)
    })
}

function printNumber2(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('printNumber2 is done');
            resolve(2)
        },1000)
    })
}

async function oneByOne(){
    const number1 = await printNumber1();
    const number2 = await printNumber2();
    console.log("Number1 and Number2",number1,number2);
}
oneByOne();// series calling

// 
async function inParallel(){
    const promise1= printNumber1();
    const promise2=printNumber2();
    const number1 = await promise1;
    const number2 = await promise2;
    // refactor above two line in one
    // const [number1,number2] =  [await promise2, await promise2];
    console.log("parallel exe",number1,number2);
}

inParallel();