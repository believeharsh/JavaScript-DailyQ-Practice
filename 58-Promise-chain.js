let p1 = () => {
    return new Promise((resolve, reject)=> {
        console.log("Your Promise chaining has been started");
        return secnd
        }).then((value)=> {
            console.log("first promise has been completed")
            resolve("done")
            return second
        }).then((value) => {
            console.log("second promise has been completed")
            resolve("done")
            return third
        }).then((value)=> {
            console.log("thrid promise has been completed")
            resolve("done")
        }).catch()
    
}