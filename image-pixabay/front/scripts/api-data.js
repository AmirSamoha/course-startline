import { createCard} from "./createCard.js";


const API_KEY = "39709500-3fa7c7110c7ab095eb9da8985";
const basicUrl = `https://pixabay.com/api/?key=${API_KEY}`;

//function to get photos data
const fetchData = async (searchValues) => {
  try {
    const response = await fetch(
      `${basicUrl}&q=${searchValues}=&image_type=photo`
    );
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

export { fetchData, fetchMoreData }