let asynceAdd=(a,b)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(typeof a==='number' && typeof b==='number'){
                resolve(a+b);

            }else{
                reject('Arguments must be numbers');
            }
        },1500);
    });

};


asynceAdd(5,7).then((res) =>{
    console.log('Result: ',res);
    return asynceAdd(res,33);
}).then((res)=>{
    console.log('should be 45 ' ,res);
}).catch((errorMessage)=>{
  console.log(errorMessage);  
});


// let somePromise = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//   //  resolve('Hey it worked');
//   reject('Unable to fulfill promise');
// },2500);
// });

// somePromise.then((message)=>{
//     console.log('Success: ',message);
 
// },(errorMessage)=>{
//     console.log('Error: ',errorMessage);
// });