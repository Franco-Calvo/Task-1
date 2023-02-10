// Filtrar las 14 cartas de nuevo

const cardsContainer = document.getElementById("cards-container");

function newCard(list, element) {
  element.innerHTML = "";
  let fill = "";
  for (let event of list) {
    if (data.currentDate < event.date)
    fill += fillCard(event);
  }
  element.innerHTML += fill;
}

function fillCard(event) {
  return `<div class="card1">
  <img src="${event.image}" alt="" class="card-img1">
  <h5 class="festival-title">${event.name}</h5>
  <div class="text-container">
    <p>${event.description}</p>
  </div>
  <div class="footer-card">
    <h5 class="price">Price: $${event.price}</h5>
    <a href="../Task-1-Task2/Details.html?id=${event._id}" class="btn-details">Details</a>
  </div>
</div>`;
}
newCard(data.events, cardsContainer);

// Filtrar 7 Categorías

const checksContainer = document.getElementById("categories");
const eventsCategories = data.events.map((evento) => evento.category);
const catNoRepeat = [...new Set(eventsCategories)];

function addCategory(list, element) {
  let fragment = document.createDocumentFragment();
  list.forEach((cate) => fragment.appendChild(createCategory(cate)));
  element.appendChild(fragment);
}

function createCategory(cate) {
  let category = document.createElement(`div`);
  category.className = "checkbox";
  category.innerHTML = ` <label>
  <input type="checkbox" name="checkbox" value="${cate}" required>
 ${cate}
</label>`;

  return category;
}

addCategory(catNoRepeat, checksContainer);

// Filtrado por búsqueda

const inputSearch = document.querySelector("#inputSearch");
const buttonSearch = document.getElementById("buttonSearch");
const containerCard = document.querySelector("#cards-container");
const list = data.events.filter(event => event.date > data.currentDate)

function filterSearch(list) {
  containerCard.innerHTML = "";
  let text = inputSearch.value.toLowerCase();
  let events = [];
  for (let event of list) {
    let name = event.name.toLowerCase();
    if (name.includes(text) && data.currentDate < event.date) {
      events.push(event)
    };
  }
  return events;
}

function addSearch(list) {
  list.length == 0
    ? (containerCard.innerHTML += `Adjust the filters to find the search!`)
    : newCard(list, containerCard);
}

inputSearch.addEventListener("keyup", function () {
  const filteredByCheck = filterChecks(data.events);
  const filteredBySearch = filterSearch(filteredByCheck);
  addSearch(filteredBySearch);
});

// Filtrado de checks 2 por categorías

const checks = document.getElementById("categories");
const filterPastEvents = data.events.filter(event => event.date > data.currentDate)

function filterChecks(list) {
  const checkbox = document.querySelectorAll("input[name=checkbox]:checked");
  const checkboxArray = [...checkbox];
  const valueChecks = checkboxArray.map((e) => e.value);
  return valueChecks.length == 0
    ? list
    : list.filter((event) => valueChecks.includes(event.category));
}

checks.addEventListener("change", (e) => {
  const filteredByCheck = filterChecks(filterPastEvents);
  const filteredBySearch = filterSearch(filteredByCheck);
  addSearch(filteredBySearch);
});
