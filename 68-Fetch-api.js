// const options = {
// 		method: 'GET',
// 		headers: {
// 			'X-RapidAPI-Key': 'your-rapidapi-key',
// 			'X-RapidAPI-Host': 'contextualwebsearch-websearch-v1.p.rapidapi.com',
// 		},
// 	};
// 	fetch(
// 		'https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/ImageSearchAPI?q=taylor%20swift&pageNumber=1&pageSize=5&autoCorrect=true',
// 		options
// 	)
// 		.then(response => response.json())
// 		.then(response => console.log(response))
// 		.catch(err => console.error(err));


// ..................... By Code With Harry.......................

let p = fetch("“https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single”")
p.then((response) => {
        console.log(response.status)
        console.log(response.ok)
        console.log(response.headers)
        return response.json()
}).then((value2) => {
        console.log(value2)
})


// let p = fetch("https://goweather.herokuapp.com/weather/Ny")
// p.then((response) => { 
//         return response.json()
// }).then((response) => {
//         console.log(response)
// })