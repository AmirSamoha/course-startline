import { createCard } from "./createCard.js";

//function to get photos data
const fetchData = async (searchValues) => {
  try {
    const response = await fetch(`http://localhost:3000/search`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({searchValues})
    });

    if (!response.ok) {
      throw new Error(`Server responded with ${response.status}`);
    }

    const data = await response.json();
    console.log(data.hits);

    const results = document.getElementById("result");

    const cards = data.hits.map((item) => createCard(item));
    results.append(...cards);
  } catch (error) {
    console.log(error.message, "Error fetching");
  }
};

const fetchMoreData = async (searchValues) => {
  try {
    const response = await fetch(
      `${basicUrl}&q=${searchValues}=&image_type=photo&per_page=40`
    );
    const data = await response.json();
    //console.log(data.hits);

    const sliceHits = data.hits.slice(20, 40);
    //console.log(sliceHits);
    const morePhotos = document.getElementById("result-moreImages");

    const cards = sliceHits.map((item) => createCard(item));
    morePhotos.append(...cards);
  } catch (error) {
    console.log(error.message, "Error fetching");
  }
};

async function importImagesOnLoad() {
  try {
    const response = await fetch('http://localhost:3000/random-images','GET');
    const data = await response.json();
    console.log('Images imported:', data);
  } catch (error) {
    console.error('Error importing images:', error); 
  }
}



export { fetchData, fetchMoreData, importImagesOnLoad };
