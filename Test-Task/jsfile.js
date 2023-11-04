const API_KEY = "39709500-3fa7c7110c7ab095eb9da8985";
const basicUrl = `https://pixabay.com/api/?key=${API_KEY}`;

const searchForm = document.getElementById("search-form");


//create a new card
function createCard(data) {
  const card = document.createElement("div");
  card.classList.add("card");
  card.id = "openModalBtn";
  

  card.innerHTML = `
        <img id="id-image" class="image" src=${data.largeImageURL} alt=${data.tags}/>
        <p>${data.likes} likes</p>
        <p>${data.tags}</p>
        <p id="idPhoto">id: ${data.id}</p>
        <span class="icon">⭐</span>
    `;

  return card;
}



//function to get photos data
const fetchData = async (searchValues) => {
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


// searchForm.addEventListener("submit", (e) => {
//   e.preventDefault();
//   const searchValues = document.getElementById("search-input").value;
//   fetchData(searchValues);
// });



searchForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const searchInput = document.getElementById("search-input").value;

  try {
    const response = await fetch('http://localhost:3000/search', {
      method: 'POST',
      body: JSON.stringify({ searchInput }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();

    console.log('Data from the server:', data);
  } catch (error) {
    console.error('Error fetching data from the server:', error);
  }
});
// const popup = document.getElementById('popup');
// const openModalBtn = document.getElementById('openModalBtn');
// const closeModalBtn = document.getElementById('closeModalBtn');
// const idPhoto = document.getElementById('id-photo');


// function openPopup() {
//   popup.style.display = 'block';
// }

//test
// Function to open the popup
// function openPopup() {
//   popup.style.display = 'block';
//   idPhoto.innerHTML = 'id'
// }

// function closePopup() {
//   popup.style.display = 'none';
// }


// openModalBtn.addEventListener('click', openPopup);
// closeModalBtn.addEventListener('click', closePopup);

// const loadMoreBtn = document.getElementById('loadMoreBtn');

//function to get more photos data
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

// const imageInfoById = async(imageId) => {
//   try {
//     const response = await fetch(`https://pixabay.com/api/?key=${API_KEY}&id=${imageId}`);
//     const data = await response.json();
//     console.log(data)
//   } catch (error) {
//     console.log(error.message, "Error fetching");
//   }
// }



