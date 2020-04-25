const calculateSqure = require('../calculate-square.js');
const expect = require('chai').expect;

describe('calculateSqure ',function(){
    // as the 
    // below will execute assertion before geting execute callback,
    //
    // so always pass test case

    it(' should return sequre of given no.',function(){
        calculateSqure(2,function(error,result){
            console.log("callback get called")
            expect(result).to.equal(4);
        })
    })
    it('asynch testing should return sequre of given no',function(done){
        calculateSqure(2,function(error,result){
            console.log("callback get called")
            expect(result).to.equal(4);
            done();
        })
    })

    it('asynch testing should return error if pass string',function(done){
        calculateSqure('string',function(error, result){
            console.log("callback get called")
            expect(error).to.not.equal(null)
            expect(error.message).to.equal('Argument of type number is expected')       
            done();
        })
    })

})
