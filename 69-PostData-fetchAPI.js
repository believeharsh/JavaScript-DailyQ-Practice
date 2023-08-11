// Simple .then method 
// let options = {
//   method: "POST",
//   headers: {
//     "Content-type": "application/json"
//   },
//   body: JSON.stringify({
//     title: "harsh",
//     body: "Dahiya",
//     id:1200,
//   }),
// }

// fetch('https://jsonplaceholder.typicode.com/posts', options)
//   .then((response) => response.json())
//   .then((json)=> console.log(json))


const createTodo = async (updated_data) => {
    let options = {
            method: "POST",
            headers: {
                    "Content-type": "application/json"
            },
            body: JSON.stringify(updated_data),
    }
    let p = await fetch('https://jsonplaceholder.typicode.com/posts', options)
    let response = await p.json()
    // console.log(response)
    return response

}
// createTodo()

const getTodo = async (id) => {
    let response = await fetch('https://jsonplaceholder.typicode.com/posts/' + id)
    let r = await response.json()
    return r
}

const mainFunc = async () => {
    let OurData = {
            title: 'YourGrowth',
            body: 'for sure hogi',
            userId: 1100,
    }
    let todor = await createTodo(OurData)
    console.log(todor)
    console.log(await getTodo(6))
}

mainFunc()



