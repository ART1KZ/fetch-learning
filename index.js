import { Album } from "./routes/albums.js";
import { Comment } from "./routes/comments.js";
import { Photo } from "./routes/photos.js";
import { Post } from "./routes/posts.js";
import { Todo } from "./routes/todos.js";
import { User } from "./routes/users.js";

// get/create/update/delete Album.get()
// const album = await doMethodWithAdlbumById(1, albumMethods.deleteAldbum);
// const comment = await doMethodWithCommentById(1);
// const photo = await doMethodWithPhotoById(1);
// const post = await doMethodWithPostById(1);
// const todo = await doMethodWithTodoById(1);
// const user = await doMethodWithUserById(1, "get");

function showResponse(response) {
  const div = document.createElement("div");

  const body = document.createElement("p");

  const bodyStyle = body.style;
  bodyStyle["white-space"] = "pre-line";

  body.innerHTML = response;

  div.appendChild(document.createElement("hr"));
  div.appendChild(body);
  div.appendChild(document.createElement("hr"));

  const root = document.querySelector("#root");

  root.append(div);
}

for (let key in Album) {
  if(!(typeof Album[key] === 'function')) continue;

  console.log(`Route: albums\nMethod: ${key}\n`, await Album[key](1));
}

console.log("\n\n")

for (let key in Comment) {
  console.log(`Route: comments\nMethod: ${key}\n`, await Comment[key](1));
}

console.log("\n\n")

for (let key in Photo) {
  console.log(`Route: photos\nMethod: ${key}\n`, await Photo[key](1));
}

console.log("\n\n")

for (let key in Post) {
  console.log(`Route: posts\nMethod: ${key}\n`, await Post[key](1));
}

console.log("\n\n")

for (let key in Todo) {
  console.log(`Route:   \nMethod: ${key}\n`, await Todo[key](1));
}

console.log("\n\n")

for (let key in User) {
  console.log(`Route: users\nMethod: ${key}\n`, await User[key](1));
}


// showResponse(
//   `ROUTE - album\n\nuserId : ${album.userId}\n\nid: ${album.id}\n\ntitle: ${album.title}`
// );

// showResponse(
//   `ROUTE - comment\n\npostId : ${comment.postId}\n\nid: ${comment.id}\n\nname: ${comment.name}\n\nemail: ${comment.email}\n\nbody: ${comment.body}`
// );

// showResponse(
//   `ROUTE - photo\n\nalbumId : ${photo.albumId}\n\nid: ${photo.id}\n\ntitle: ${photo.title}\n\nurl: ${photo.url}\n\nthumbnailUrl: ${photo.thumbnailUrl}`
// );

// showResponse(
//   `ROUTE - post\n\nuserId : ${post.userId}\n\nid: ${post.id}\n\ntitle: ${post.title}\n\nbody: ${post.body}`
// );

// showResponse(
//   `ROUTE - todo\n\nuserId : ${todo.userId}\n\nid: ${todo.id}\n\ntitle: ${todo.title}\n\ncompleted: ${todo.completed}`
// );

// showResponse(
//   `ROUTE - user\n\nid: ${user.id}\n\nname: ${user.name}\n\nusername: ${user.username}\n\nemail: ${user.email}\n\naddress.street: ${user.address.street}\n\nphone: ${user.phone}\n\nwebsite: ${user.website}\n\ncompany.name: ${user.company.name}`
// );
