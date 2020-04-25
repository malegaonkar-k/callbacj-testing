
function print1(){
    const number1 = 1;
    console.log(number1);
}

function print2(){
    function getNumber2() {
        return 2;
    }
    const number2 = getNumber2();
    console.log(number2);
}

/*
function print3(){
    const fs = require('fs');
    fs.readFile('./number3.txt','utf-8',function(err, number3) {
        console.log(number3);
    })
}
*/
/*
function print3(){
    const fs = require('fs');
    fs.readFile('./number3.txt','utf-8',function(err, number3) {
        console.log(number3);
        print4();
    })
    
}
*/

function print3(){
    const callback = function (err, number3) {
        console.log(number3);
        print4();
    }
    const fs = require('fs');
    //rading file asynch function
    fs.readFile('./number3.txt','utf-8', callback);
    
}

function print4(){
    const number4 = 4; 
    console.log(number4);
     
}

print1();
print2();
print3();
// print4();
// in above case result will be
//1
//2
//4
//3

// to fix the order of function execution we can do one thing\
// we can call print4(); in to print3()
//so that order of result will be , 1,2,3,4
// modifi print3 function
//or we can change print3()

/*
synchronous Action
    statement1

    statement2--------> take time to execute (blocking call) then execute next statement3
                        |
              < -------- 
    statement3

    statement4

    blocking call : in print2() function getnumber2() is blocking call/it will execute first 
    and then console.log() will execute

    statement1

    statement2--------> take time to execute (non-blocking call) statement 2 will execute independently
                        without blocking execution of statement3 and statement4 
                        |

    statement3

    statement4

    <--------------------statement2 executed


  
    example of asynch - httprequest, dbcall, reading from file
    github.com/vp-online-courses/asynchronous-javascript-tutorial
    
*/