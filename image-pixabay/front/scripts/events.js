import { fetchData, fetchMoreData } from "./api-data.js";

const searchForm = document.getElementById("search-form");
const results = document.getElementById("result");
const loadMoreBtn = document.getElementById('loadMoreBtn');
// const favorite = document.querySelectorAll(".icon")

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const searchValues = document.getElementById("search-input").value;
  results.innerHTML = ""
  fetchData(searchValues);
  loadMoreBtn.style.display = "block";
});


loadMoreBtn.addEventListener("click", () => {
  const searchValues = document.getElementById("search-input").value;
  fetchMoreData(searchValues);
});



// favorite.addEventListener("click", () =>{
//   alert('save')
// })

document.querySelector('#result').addEventListener('click', function (e) {
  const clickedElement = e.target;
  //console.log(clickedElement);

  const liked = clickedElement.innerHTML === '💚' ? '💛' : '💚';
  clickedElement.innerHTML = liked;
});
