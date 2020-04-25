const calculateSquare = require("../calculate-square-promise.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
const expect =chai.expect;

describe('calculateSquare Promise method',function(){
    this.timeout(4000); //globally 
    // below test will always pass
    it('should not resolved 1 if passed 3 ,square of no.',function(){
        expect(calculateSquare(3)).to.eventually.not.be.equal(1)
    })
    //also make sure that Timeout is increased for test if taking more time Error: Timeout of 2000ms exceeded.
    // 2 sec is default by mocha
// use return statement
    it('should resolved 4 if passed 2 ,square of no.',function(){
        // this.timeout(4000);//increased timeout for executinon locally
       return expect(calculateSquare(2)).to.eventually.be.equal(4);
       
    }) 

    it('should resolved 4 if passed 2 ,square of no.',function(done){
         
        expect(calculateSquare(2)).to.eventually.be.equal(4).notify(done)
         
      })
    it('should  be fulfilled when passed 2 ,square of no.',function(){
       return expect(calculateSquare(2)).to.be.fulfilled;
    })


    it('should  be rejected if passed a string insted of a number',function(){
        return expect(calculateSquare('string')).to.be.rejected;
    })
  
    it('test case with multiple assertion',function(){
        // this.timeout(4000);//increased timeout for executinon locally
         expect(calculateSquare(2)).to.eventually.be.above(5);
       return expect(calculateSquare(2)).to.eventually.be.equal(4);
       

       //(node:5873) UnhandledPromiseRejectionWarning: AssertionError: expected 4 to be above 5
//     at /home/keshav/Workspace/node-app/callback-testing/node_modules/chai-as-promised/lib/chai-as-promised.js:302:22
//     at runNextTicks (internal/process/task_queues.js:58:5)
//     at listOnTimeout (internal/timers.js:501:9)
//     at processTimers (internal/timers.js:475:7)
// (node:5873) UnhandledPromiseRejectionWarning: Unhandled promise rejection. This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). (rejection id: 1)
//   //(node:5873) [DEP0018] DeprecationWarning: Unhandled promise rejections are deprecated. In the future, promise rejections that are not handled will terminate the Node.js process with a non-zero exit code.
    // ✓ test case with multiple assertion (3009ms)
    })
    
    it('1 test case with multiple assertion',function(done){
        // this.timeout(4000);//increased timeout for executinon locally
         expect(calculateSquare(2)).to.eventually.be.above(5).notify(done);
         expect(calculateSquare(2)).to.eventually.be.equal(4).notify(done);
     
    })

    it('1 test case with multiple assertion',function(){
        // this.timeout(4000);//increased timeout for executinon locally
         expect(calculateSquare(2)).then(result =>{
            expect(result).to.eventually.be.above(5);
            expect(result).to.eventually.be.equal(4);
        
         })
         
      
    })

    it('ok test case with multiple assertion',function(){
        // this.timeout(4000);//increased timeout for executinon locally
         expect(calculateSquare(2)).then(result =>{
            expect(result).to.be.above(5);
            expect(result).to.be.equal(4);
        
         })
         
      
    })


    it('rejcted promise test case with multiple assertion',function(){
          return calculateSquare('string').catch((reason)=>{
              expect(reason).to.not.equal(null);
              expect(reason.message).to.equal('Argument of type number is expected');
          })
      
    })
})