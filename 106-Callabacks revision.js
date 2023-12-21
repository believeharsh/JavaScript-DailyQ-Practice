const cart = ['Macbook', 'Mointar', 'I phone'];

Api.createOrder(cart, function(){
    Api1.Proceedtopayment(function(){
        Api2.ShowOrderSummery(function(){ /// this is ca
            Api3.UpdateWallet(function(){
                Api4.AlertOrderEmail()
            })
        })
    })
})

// The above function is the perfect example of callbacks hells where our each api is dependent on other api so that if a single error will ocur then entire function will collapse


// inversion of Control : 