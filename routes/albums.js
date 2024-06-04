import { baseUrl } from "../baseUrl.js";

const create = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    name: "Agugugaga",
    email: "something@example.com",
    body: "aaagugugaga",
  }),
};

const patch = {
  method: "PATCH",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    name: "Одна девочка так сильно боялась прыгать с парашютом",
    body: ", что прыгнула без него.",
  }),
};

const put = {
  method: "PUT",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    title: "Одна девочка так сильно боялась прыгать с парашютом ",
    body: ", что прыгнула без него.",
  }),
};

const deleteAldbum = {
  method: "DELETE",
};

async function doMethodWithAdlbumById(id = null, method = "get") {
  try {
    if (method === "get" && id === null) {
      return await fetch(`${baseUrl}/albums`).then((res) => res.json());
    } else if (method === "get") {
      return await fetch(`${baseUrl}/albums/${id}`).then((res) => res.json());
    } else {
      return await fetch(`${baseUrl}/albums/${id}`, method).then((res) =>
        res.json()
      );
    }
  } catch (err) {
    console.log(err);
  }
}

export { create, patch, put, deleteAldbum, doMethodWithAdlbumById };