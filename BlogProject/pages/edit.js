import navbar from "../components/navbar.js";
let navbarDiv = document.getElementById("navbar_div");
navbarDiv.innerHTML = navbar();

let blogId = localStorage.getItem("blogId")

async function getData(url) {
  try {
    let res = await fetch(url);
    let data = await res.json();

    return data;
  } catch (error) {
    console.log(error);
  }
}

async function getBlogById() {
  try {
    let blog = await getData(`http://localhost:3000/blogs/${blogId}`);

    document.getElementById("title").value = blog.title;
    document.getElementById("body").value = blog.body;
    document.getElementById("author").value = blog.author;
  } catch (error) {
    console.log(error);
  }
}
getBlogById();

let editBlogBtn = document.getElementById("edit-blog-btn");

editBlogBtn.addEventListener("click", async function () {
  try {
    let blogData = {
      title: document.getElementById("title").value,
      body: document.getElementById("body").value,
      author: document.getElementById("author").value,
    };
    await fetch(`http://localhost:3000/blogs/${blogId}`, {
      method: "PUT",
      body: JSON.stringify(blogData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    location.href = "main.html";
  } catch (error) {
    console.log(error);
  }
});