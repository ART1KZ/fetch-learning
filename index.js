import { doMethodWithAdlbumById } from "./routes/albums.js";
import * as albumMethods from "./routes/albums.js";
import { doMethodWithCommentById } from "./routes/comments.js";
import * as commentMethods from "./routes/comments.js";
import { doMethodWithPhotoById } from "./routes/photos.js";
import * as photoMethods from "./routes/photos.js";
import { doMethodWithPostById } from "./routes/posts.js";
import * as postMethods from "./routes/posts.js";
import { doMethodWithTodoById } from "./routes/todos.js";
import * as todoMethods from "./routes/todos.js";
import { doMethodWithUserById } from "./routes/users.js";
import * as userMethods from "./routes/users.js";

const album = await doMethodWithAdlbumById(1);
const comment = await doMethodWithCommentById(1);
const photo = await doMethodWithPhotoById(1);
const post = await doMethodWithPostById(1);
const todo = await doMethodWithTodoById(1);
const user = await doMethodWithUserById(1);

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

showResponse(
  `ROUTE - album\n\nuserId : ${album.userId}\n\nid: ${album.id}\n\ntitle: ${album.title}`
);

showResponse(
  `ROUTE - comment\n\npostId : ${comment.postId}\n\nid: ${comment.id}\n\nname: ${comment.name}\n\nemail: ${comment.email}\n\nbody: ${comment.body}`
);

showResponse(
  `ROUTE - photo\n\nalbumId : ${photo.albumId}\n\nid: ${photo.id}\n\ntitle: ${photo.title}\n\nurl: ${photo.url}\n\nthumbnailUrl: ${photo.thumbnailUrl}`
);

showResponse(
  `ROUTE - post\n\nuserId : ${post.userId}\n\nid: ${post.id}\n\ntitle: ${post.title}\n\nbody: ${post.body}`
);

showResponse(
  `ROUTE - todo\n\nuserId : ${todo.userId}\n\nid: ${todo.id}\n\ntitle: ${todo.title}\n\ncompleted: ${todo.completed}`
);

showResponse(
  `ROUTE - user\n\nid: ${user.id}\n\nname: ${user.name}\n\nusername: ${user.username}\n\nemail: ${user.email}\n\naddress.street: ${user.address.street}\n\nphone: ${user.phone}\n\nwebsite: ${user.website}\n\ncompany.name: ${user.company.name}`
);