// let user = {
//     name: "Artem",
//     surname: "Kiselev",
//     age: 17,
//     os: "Windows 10",
//     admin: true,
// };

// for(let key in user) {
//     if(key === "age")
//     console.log(user[key])
// }

const baseUrl = "https://jsonplaceholder.typicode.com";

let variable;

const createJokeSetup = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    setup: "Одна девочка так сильно боялась прыгать с парашютом,",
    punchLine: " что прыгнула без него.",
  }),
};

const patchJokeSetup = {
  method: "PATCH",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    setup: "Одна девочка так сильно боялась прыгать с парашютом",
    punchLine: ", что прыгнула без него.",
  }),
};

const putJokeSetup = {
  method: "PUT",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    setup: "Одна девочка так сильно боялась прыгать с парашютом ",
    punchLine: ", что прыгнула без него.",
  }),
};

const deleteJokeSetup = {
  method: "DELETE",
};

export async function getJokeById(id) {
  return await fetch(baseUrl + `/posts/${id}`).then((res) => res.json())
  .catch(err => console.log(err));
}

// const joke = await getJokeById(3);

// console.log(joke);


