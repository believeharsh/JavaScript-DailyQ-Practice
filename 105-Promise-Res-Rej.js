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



// const cart = ["shoes", "pants" , "kurta"]
// const promise = createOrderId()

// promise.then(function(orderId){
// console.log(orderId)
//   return orderId;
  
// })
  
//   .then(function(orderId){
//     return ProceedtoPayment(orderId)
    
//   })
//   .then(function(paymentinfo){
//     console.log(paymentinfo)
//   })

// .then(function(paymentinfo){
//   console.log("NO matter what happens, I will definetely be called")
// })
// .catch(function(err){
//   console.log(err.message)
// })



// function createOrderId(cart){
//   const Pr = new Promise(function(resolve, reject){
//     if(!validdataCart()){
//       const err = new Error("Cart is not valid");
//       reject(err)
//     }
//     const orderId = "12345";
//     if (orderId){
//       setTimeout(function(){
//         resolve(orderId)
//       },2000)
    
//     }
//   });
//   return Pr;
// }
// function validdataCart(Cart){
//   return false;
// }

// function ProceedtoPayment(OrderId){
  
//   return new Promise (function(res, rej){
//     res("Payment has been done Successfully  ")
//   })
  
// }

// function paymentinfo(){
//   const s = "Payment"
//   return s;
// }