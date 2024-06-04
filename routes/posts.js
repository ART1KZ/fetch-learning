import { baseUrl } from "../baseUrl.js";

// Конфигурация для создания нового поста (метод POST)
const create = {
  method: "POST",
  headers: {
    "Content-Type": "application/json", // Указываем, что тело запроса будет в формате JSON
  },
  body: JSON.stringify({
    title: "Одна девочка так сильно боялась прыгать с парашютом,", // Заголовок поста
    body: " что прыгнула без него.", // Тело поста
  }),
};

// Конфигурация для частичного обновления поста (метод PATCH)
const patch = {
  method: "PATCH",
  headers: {
    "Content-Type": "application/json", // Указываем, что тело запроса будет в формате JSON
  },
  body: JSON.stringify({
    title: "Одна девочка так сильно боялась прыгать с парашютом", // Обновленный заголовок поста
    body: ", что прыгнула без него.", // Обновленное тело поста
  }),
};

// Конфигурация для полного обновления поста (метод PUT)
const put = {
  method: "PUT",
  headers: {
    "Content-Type": "application/json", // Указываем, что тело запроса будет в формате JSON
  },
  body: JSON.stringify({
    title: "Одна девочка так сильно боялась прыгать с парашютом ", // Полностью обновленный заголовок поста
    body: ", что прыгнула без него.", // Полностью обновленное тело поста
  }),
};

const deletePost = {
  method: "DELETE",
};

// Асинхронная функция для получения поста по ID
async function doMethodWithPostById(id = null, method = "get") {
  try {
    if (method === "get" && id === null) {
      return await fetch(`${baseUrl}/posts`).then((res) => res.json());
    } else if (method === "get") {
      return await fetch(`${baseUrl}/posts/${id}`).then((res) => res.json());
    } else {
      return await fetch(`${baseUrl}/posts/${id}`, method).then((res) =>
        res.json()
      );
    }
  } catch (err) {
    console.log(err);
  }
}

export { create, patch, put, deletePost, doMethodWithPostById };
