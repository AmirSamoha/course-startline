import { fetchData, fetchMoreData } from "./api-data.js";

const searchForm = document.getElementById("search-form");
const results = document.getElementById("result");
const loadMoreBtn = document.getElementById('loadMoreBtn');


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



