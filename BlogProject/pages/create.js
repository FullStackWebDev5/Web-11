import navbar from "../components/navbar.js";
let navbarDiv = document.getElementById("navbar_div");
navbarDiv.innerHTML = navbar();

let createBlogBtn = document.getElementById("create-blog-btn");

createBlogBtn.addEventListener("click", async function () {
  try {
    let blogData = {
      title: document.getElementById("title").value,
      body: document.getElementById("body").value,
      author: document.getElementById("author").value,
    };
    await fetch(`http://localhost:3000/blogs`, {
      method: "POST",
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