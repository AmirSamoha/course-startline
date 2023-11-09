function createCard(data) {
  const card = document.createElement("div");
  card.classList.add("card");

  card.innerHTML = `
      <img onclick=showImageDetails(${data.id}) class="image" src=${data.largeImageURL} alt=${data.tags}/>
      <p>${data.likes} likes</p>
      <p>${data.tags}</p>
      <p>id: ${data.id}</p>
      <span class="icon">⭐</span>
  `;
  return card;
}


export { createCard };
