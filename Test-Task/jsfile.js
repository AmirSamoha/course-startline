const API_KEY = "39709500-3fa7c7110c7ab095eb9da8985";

// const searchValues = document.getElementById('search-input').value;
const searchForm = document.getElementById("search-form");


//create a new card
function createCard(data) {
  const card = document.createElement("div");
  card.classList.add("card");

  card.innerHTML = `
        <img src=${data.largeImageURL} alt=${data.tags}/>
        <p>${data.likes}</p>
    `;

  return card;
}

const fetchData = async (searchValues) => {
  // let querytype =  Values
  const basicUrl = `https://pixabay.com/api/?key=${API_KEY}`;
  // const queryUrl = `&q=${querytype}=&image_type=photo`

  try {
    const response = await fetch(`${basicUrl}&q=${searchValues}=&image_type=photo`);
    const data = await response.json();
    console.log(data.hits);

    const results = document.getElementById('photos');

    const cards = data.hits.map((item) => createCard(item));
    results.append(...cards);

  } catch (error) {
    console.log(error.message, "Error fetching");
  }
};

//
searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const searchValues = document.getElementById("search-input").value;
  fetchData(searchValues);
});
