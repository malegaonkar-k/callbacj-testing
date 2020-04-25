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
   
   module.exports = calculateSquare;