const promise = createOrderId()

promise.then(function(orderId){
console.log(orderId)
})
.catch(function(err){
  console.log(err.message)
})

function createOrderId(cart){
  const Pr = new Promise(function(resolve, reject){
    if(!validdataCart(cart)){
      const err = new Error("Cart is not valid");
      reject(err)
    }
    const orderId = "12345";
    if (orderId){
      setTimeout(function(){
        resolve(orderId)
      },5000)
    
    }
  });
  return Pr;
}
function validdataCart(cart){
  return false;
}
