import { getJokeById as getPostById } from "./test.js";

const post = await getPostById(3);

const div = document.createElement('div');

const title = document.createElement('p');
const body = document.createElement('p');

title.innerHTML = post.title;
body.innerHTML = post.body;

div.appendChild(document.createElement('hr'))
div.appendChild(title)
div.appendChild(body)
div.appendChild(document.createElement('hr'))

const root = document.querySelector('#root');

root.append(div)



























// async function sayJoke(apiUrl, jokeId) {
//   try {
//     fetch(`${apiUrl}/${jokeId}`)
//       .then((response) => {
//         return response.json();
//       })
//       .then((obj) => {
//         console.log(obj);
//       });
//   } catch (error) {
//     console.error(`No jokes found id: ${jokeId}`);
//   }
// }

// sayJoke("http://localhost:3000/jokes", 191);
