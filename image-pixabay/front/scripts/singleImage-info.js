const API_KEY = "39709500-3fa7c7110c7ab095eb9da8985";
const basicUrl = `https://pixabay.com/api/?key=${API_KEY}`;

async function showImageDetails(id) {
  try {
    const response = await fetch(`${basicUrl}&id=${id}`);
    const data = await response.json();
    // console.log(data.hits[0]);

    const para = document.createElement("p");
    const tags = data.hits[0].tags;
    const tagsArray = tags.split(",");
    let buttonsHtml = "";

    const searchByTag = async (tag) => {
      try {
        const response = await fetch(`${basicUrl}&category=${tag}`);
        const data = await response.json();
        console.log(data.hits);
      } catch (error) {
        console.log(error.message);
      }
    };

    for (let i in tagsArray) {
      buttonsHtml += `<button type="button" id="btn-tag" class="btnTag">${tagsArray[i]}</button>`;
    }




    para.innerHTML = `
        <p>id: ${data.hits[0].id}</p>
        <p>comments: ${data.hits[0].comments}</p>
        <p>downloads: ${data.hits[0].downloads}</p>
        <p>likes: ${data.hits[0].likes}</p>
        <span id="tags">tags: ${buttonsHtml}</span>
        `;

    document.getElementById("info").innerHTML = "";
    document.getElementById("info").appendChild(para);

    const tagBtns = document.querySelectorAll(".btnTag");

    tagBtns.forEach((tagBtn) => {
      tagBtn.addEventListener("click", () => {
        // Get the text content of the clicked button
        const tag = tagBtn.textContent;
    
        // Call the searchByTag function with the tag
        searchByTag(tag);
      });
    });


  } catch (error) {
    console.log(error.message, "Error fetching");
  }
}
