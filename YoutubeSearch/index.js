const API_KEY = "AIzaSyDWEfqO6tftghUNjvOKO7MYhPcgY4sExkg";
let searchResultsDiv = document.getElementById("searchResults");

async function searchVideo() {
  let searchParam = document.getElementById("searchParam").value;
  await fetchData(searchParam);
}

async function fetchData(q) {
  let data = await fetch(
    `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${q}&type=video&key=${API_KEY}`
  );
  data = await data.json();
  let videosArray = data.items;
  displayData(videosArray);
}

function displayData(videosArray) {
  videosArray.forEach(
    ({
      id: { videoId },
      snippet: {
        title,
        thumbnails: {
          medium: { url },
        },
      },
    }) => {
      console.log({ videoId, title, url });

      let videoCard = document.createElement("div");

      let videoFrame = document.createElement("iframe");
      videoFrame.src = `https://www.youtube.com/embed/${videoId}`;
      videoFrame.width = "100%";
      videoFrame.height = "420px";

      videoCard.append(videoFrame);

      searchResultsDiv.append(videoCard);
    }
  );
}