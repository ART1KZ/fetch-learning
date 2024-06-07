import { baseUrl } from "../baseUrl.js";

export const Post = {
  async get() {
    return fetch(`${baseUrl}/posts`).then((res) => res.json());
  },
  async getById(id) {
    return fetch(`${baseUrl}/posts/${id}`).then((res) => res.json());
  },

  async post() {
    return fetch(`${baseUrl}/posts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: "Agugugaga",
        email: "something@example.com",
        body: "aaagugugaga",
      }),
    }).then((res) => res.json());
  },
  async patchById(id) {
    return fetch(`${baseUrl}/posts/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: "Одна девочка так сильно боялась прыгать с парашютом",
        body: ", что прыгнула без него.",
      }),
    }).then((res) => res.json());
  },
  async putById(id) {
    return fetch(`${baseUrl}/posts/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: "Одна девочка так сильно боялась прыгать с парашютом ",
        body: ", что прыгнула без него.",
      }),
    }).then((res) => res.json());
  },
  async deleteById(id) {
    return fetch(`${baseUrl}/posts/${id}`, {
      method: "DELETE",
    }).then((res) => res.json());
  },
};
