// localStorage : LocalStorage is a type of web storage for info. As a result, JavaScript websites and applications can store and access data without any time limits. The data will therefore always be preserved and never expire. Thus, the information saved in the browser will remain accessible even after the browser window is closed.
// Data is stored as key-value pair and the keys are unique. The keys and the values are always in the UTF-16 DOM String format that is stored within localStorage.


// setItem( key , value ): stores key/value pair
// getItem( key ): returns the value in front of key
// key( index ): get the key on a given index
// length: returns the number of stored items(data)
// removeItem( key ): removes given key with its value
// clear(): deletes everything from the storage


let key = prompt("Enter key you want to set")
let value = prompt("Enter value you want to set")

localStorage.setItem(key, value)

console.log(`The value at ${key} is ${localStorage.getItem(key)}`)

if (key == "red" || key == "blue") {
        localStorage.removeItem(key)
}

if (key == 0) {
        localStorage.clear()
}
// localStorage.removeItem('sdfsdfksadfj')
// localStorage.removeItem("Name")
// localStorage.clear()

//What is Session Storage?

// Session Storage objects can be accessed using the sessionStorage read-only property. The difference between sessionStorage and localStorage is that localStorage data does not expire, whereas sessionStorage data is cleared when the page session ends

// Local : The storage capacity of local storage is 5MB/10MB
// Session : The storage capacity of session storage is 5MB
// Cookie : The storage capacity of Cookies is 4KB

window.onstorage = (e) => {
    alert("changed")
    console.log(e)
  }