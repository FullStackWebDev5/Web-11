import navbar from "./components/navbar.js";
import { getData, appendData } from './utils/getAndShowData.js'

let navbarContainer = document.getElementById('navbar-container');
navbarContainer.innerHTML = navbar()

let mainContainer = document.getElementById("main-container");
let response = getData(`https://fakestoreapi.com/products/category/jewelery`);

response.then((res) => {
  appendData(res, mainContainer);
}).catch((err) => {
	console.log(err);
});