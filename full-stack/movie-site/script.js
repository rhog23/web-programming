const API =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=9549acd684db225930b009a5380931cb&page=1";
const IMAGE_PATH = "https://www.themoviedb.org/t/p/w220_and_h330_face";
const SEARCH_API =
  "https://api.themoviedb.org/3/search/movie?&api_key=9549acd684db225930b009a5380931cb&query=";

const main = document.getElementById("movie--cards");
const from = document.getElementById("form");
const search = document.getElementById("query");

function getMovies(url) {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      data.results.forEach((result) => {
        const card = `<div class="card">
        <img
          class="card--image"
          src=${IMAGE_PATH + result.poster_path}
          alt=""
        />
        <div class="card--content">
          <div class="card--title">
            <h3>${result.title}</h3>
          </div>
          <div class="card--body">
            <p>
              ${result.overview.substring(0, 50) + "..."}
            </p>
          </div>
        </div>
      </div>`;
        main.innerHTML += card;
      });
    });
}

getMovies(API);

search.addEventListener("change", (e) => {
  e.preventDefault();
  main.innerHTML = "";

  const searchQuery = e.target.value;
  if (searchQuery) {
    getMovies(SEARCH_API + searchQuery);
    e.target.value = "";
  }
});
