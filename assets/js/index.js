const cardsContainer = document.getElementById("cards-container")

for (let event of data.events) {
  let card = document.createElement("div")
  card.className = "card1"
  card.innerHTML = `<img src="${event.image}" alt="" class="card-img1">
  <h5 class="festival-title">${event.name}</h5>
  <div class="text-container">
    <p>${event.description}</p>
  </div>
  <div class="footer-card">
    <h5 class="price">Price: $${event.price}</h5>
    <a href="/Details.html" class="btn-details">Details</a>
  </div>`
  cardsContainer.appendChild(card)
}