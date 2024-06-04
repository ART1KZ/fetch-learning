const baseUrl = "https://jsonplaceholder.typicode.com";

async function doMethodWithAdlbumById(id = null, method = "get") {
    try {
      if (method === "get" && id === null) {
        console.log(await fetch(`${baseUrl}/users`).then((res) => res.json()));
      } else if (method === "get") {
        console.log(await fetch(`${baseUrl}/users/${id}`).then((res) => res.json()));
      } else {
        console.log(await fetch(`${baseUrl}/users/${id}`, method).then((res) =>
          res.json())
        );
      }
    } catch (err) {
      console.log(err);
    }
  }


doMethodWithAdlbumById(1);