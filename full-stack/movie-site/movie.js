const url = new URL(location.href);
const movieId = url.searchParams.get("id");
const movieTitle = url.searchParams.get("title");
const API = "http://localhost:8000/api/v1/reviews/";

const main = document.getElementById("movie--reviews");
const title = document.getElementById("movie--title");
title.innerText = movieTitle;

const insertForm = `
    <div class="card">
        <h3>New Review</h3>
        <p>
            <strong>Review: </strong>
            <input type="text" id="new_review" value="">
        </p>
        <p>
            <strong>User: </strong>
            <input type="text" id="new_user" value="">
        </p>
        <p>
            <a href="#" onclick="saveReview('new_review', 'new_user')">💾</a>
        </p>
    </div>
`;

main.innerHTML += insertForm;

getReviews(API);

function getReviews(url) {
  fetch(`${url}/movie/${movieId}`)
    .then((res) => res.json())
    .then((data) => {
      data.forEach((review) => {
        const card = `<div class="card" id="${review._id}">
                 <div class="card--content">
                   <div class="card--body">
                     <p><strong>Review: </strong>${review.review}</p>
                     <p><strong>User: </strong>${review.user}</p>
                     <p>
                     <a href="#" onclick="editReview('${review._id}', '${review.review}', '${review.user}')">✏️</a>
                     <a href="#" onclick="deleteReview('${review._id}')">🗑️</a>
                     </p>
                   </div>
                 </div>
               </div>`;
        main.innerHTML += card;
      });
    });
}

function editReview(id, review, user) {
  const element = document.getElementById(id);
  const reviewInputId = `review${id}`;
  const userInputId = `user${id}`;
  const cardForm = `
  <p>
    <strong>Review: </strong>
    <input type="text" id="${reviewInputId}" value="${review}">
  </p>
  <p>
    <strong>User: </strong>
    <input type="text" id="${userInputId}" value="${user}">
  </p>
  <a href="#" onclick="saveReview('${reviewInputId}', '${userInputId}', '${id}')">💾</a>
  `;
  element.innerHTML = cardForm;
}

async function saveReview(reviewInputId, userInputId, id = "") {
  const review = document.getElementById(reviewInputId).value;
  const user = document.getElementById(userInputId).value;

  if (id) {
    fetch(`${API}${id}`, {
      method: "PUT",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ user: user, review: review }),
    })
      .then((res) => res.json)
      .then((res) => {
        location.reload();
      });
  } else {
    fetch(`${API}new`, {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ movieId: movieId, user: user, review: review }),
    })
      .then((res) => res.json())
      .then((res) => {
        location.reload();
      });
  }
}

async function deleteReview(reviewId) {
  fetch(`${API}${reviewId}`, {
    method: "DELETE",
  })
    .then((res) => res.json())
    .then((res) => location.reload());
}
