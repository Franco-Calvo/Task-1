const container = document.getElementById("container-details");

const detalles = location.search;
const parametro = new URLSearchParams(detalles);
const nombre = parametro.get("id");
console.log(nombre);
const evento = data.events.find((evento) => evento._id == nombre);
console.log(evento);
document.title = `${evento.name} | Detail's`;


container.innerHTML = ` <div class="details-img">
<img src="${evento.image}" class="img-details">
</div>
<div class="container-information">
<ul>
  <li><b>Name:</b> ${evento.name} </li>
  <li><b>Date:</b> ${evento.date} </li>
  <li><b>Description:</b> ${evento.description} </li>
  <li><b>Category:</b> ${evento.category} </li>
  <li><b>Place:</b>  ${evento.place}</li>
  <li><b>Capacity:</b> ${evento.capacity}</li>
  <li><b>Estimate:</b> ${evento.assistance}</li>
  <li><b>Price:</b>${evento.price} </li>
  
</ul>
</div> `;


