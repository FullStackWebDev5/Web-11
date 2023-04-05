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

function displayData(blog, parentNode) {
	document.title = `View Blog: ${blog.title}`

  parentNode.innerHTML = "";

  let blogTitleElement = document.createElement("p");
  blogTitleElement.textContent = blog.title;
  let blogBodyElement = document.createElement("p");
  blogBodyElement.textContent = blog.body;
  let blogAuthorElement = document.createElement("p");
  blogAuthorElement.textContent = `By : ${blog.author}`;

  parentNode.append(blogTitleElement, blogBodyElement, blogAuthorElement);
}

const fetchBlogById = async (blogId) => {
  try {
    let blog = await getData(`http://localhost:3000/blogs/${blogId}`);
		let parentNode = document.getElementById("main-content");
    displayData(blog, parentNode);
  } catch (error) {
    console.log(error);
  }
};

fetchBlogById(blogId);











// Ternary opeartor
// condition ? true expression : false expression