const card = document.querySelector(".box");

fetch("http://localhost:3000/events")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    const events = data;
    let cardsHTML = "";
    
    events.forEach((event) => {
      cardsHTML += `
      <div class="card">
      <img src="${event.posterURL}" alt="${event.name}" />
      <div class="cardContent">
      <h3>${event.name}</h3>
      <p>${new Date(event.dateTime).toLocaleString()}</p>
      <p>${event.venueName}</p>
      </div>
      </div>
      `;
      card.innerHTML = cardsHTML;
    })
  })
  .catch((error) => console.error("Error fetching events:", error));
