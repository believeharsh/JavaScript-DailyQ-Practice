
//What is Session Storage?

// Session Storage objects can be accessed using the sessionStorage read-only property. The difference between sessionStorage and localStorage is that localStorage data does not expire, whereas sessionStorage data is cleared when the page session ends

// Local : The storage capacity of local storage is 5MB/10MB
// Session : The storage capacity of session storage is 5MB
// Cookie : The storage capacity of Cookies is 4KB

window.onstorage = (e) => {
    alert("changed")
    console.log(e)
  }