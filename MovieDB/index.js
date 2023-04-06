let API_KEY = "2126f673";
let parentNode = document.getElementById("movies");

async function getData() {
  try {
    let movie = document.getElementById("query").value;

    let res = await fetch(
      `http://www.omdbapi.com/?apikey=${API_KEY}&s=${movie}`
    );

    let data = await res.json();

    return data.Search;
  } catch (err) {
    console.log(err);
  }
}

function displayData(data) {
  parentNode.innerHTML = null;
  data.forEach((movie) => {
    let p = document.createElement("p");
    p.textContent = movie.Title;
    parentNode.append(p);
  });
}

async function main() {
  let data = await getData();

  if (!data) {
    return false;
  }

  displayData(data);
}

let timerId;
function debounce(func, delay) {
  if (timerId) {
    clearTimeout(timerId);
  }
  timerId = setTimeout(function () {
    func();
  }, delay);
}