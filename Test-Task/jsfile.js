const API_KEY = "39709500-3fa7c7110c7ab095eb9da8985";

// const searchValues = document.getElementById('search-input').value;
const searchForm = document.getElementById("search-form");


//create a new card
function createCard(data) {
  const card = document.createElement("div");
  card.classList.add("card");

  card.innerHTML = `
        <img class="image" src=${data.largeImageURL} alt=${data.tags}/>
        <p>${data.likes} likes</p>
        <p>${data.tags}</p>
        <span class="icon">⭐</span>
    `;

  return card;
}


const basicUrl = `https://pixabay.com/api/?key=${API_KEY}`;

//function to get photos data
const fetchData = async (searchValues) => {
  // let querytype =  Values
  // const basicUrl = `https://pixabay.com/api/?key=${API_KEY}`;
  // const queryUrl = `&q=${querytype}=&image_type=photo`

  try {
    const response = await fetch(`${basicUrl}&q=${searchValues}=&image_type=photo`);
    const data = await response.json();
    // console.log(data.hits);

    const results = document.getElementById('photos');

    const cards = data.hits.map((item) => createCard(item));
    results.append(...cards);
  } catch (error) {
    console.log(error.message, "Error fetching");
  }
};


searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const searchValues = document.getElementById("search-input").value;
  fetchData(searchValues);
});


const popup = document.getElementById('popup');
const openModalBtn = document.getElementById('openModalBtn');
const closeModalBtn = document.getElementById('closeModalBtn');
const idPhoto = document.getElementById('id-photo');


function openPopup() {
  popup.style.display = 'block';
}

//test
// Function to open the popup
// function openPopup() {
//   popup.style.display = 'block';
//   idPhoto.innerHTML = 'id'
// }

function closePopup() {
  popup.style.display = 'none';
}


openModalBtn.addEventListener('click', openPopup);
closeModalBtn.addEventListener('click', closePopup);

const loadMoreBtn = document.getElementById('loadMoreBtn');

//function to get photos data
const fetchMoreData = async (searchValues) => {

  try {
    const response = await fetch(`${basicUrl}&q=${searchValues}=&image_type=photo&per_page=40`);
    const data = await response.json();
    //console.log(data.hits);

    const sliceHits = data.hits.slice(20,40)
    //console.log(sliceHits);
    const morePhotos = document.getElementById('morePhotos');

    const cards = sliceHits.map((item) => createCard(item));
    morePhotos.append(...cards);
  } catch (error) {
    console.log(error.message, "Error fetching");
  }
};

loadMoreBtn.addEventListener("click", (e) => {
  const searchValues = document.getElementById("search-input").value;
  fetchMoreData(searchValues);
});


