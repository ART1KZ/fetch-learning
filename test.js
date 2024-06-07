const url = "https://jsonplaceholder.typicode.com";
const route = "/albums";

let data = await fetch(`${url}${route}`).then((res) => res.json())

console.log(data[0])