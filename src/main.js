const AllEventCardContainer = document.querySelector(".AllEventCardsContainer");

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
    });

    AllEventCardContainer.innerHTML = cardsHTML;
  })
  .catch((error) => console.error("Error fetching events:", error));


  // TICKET CARDS
const avaliableTickets = document.querySelector(".TicketCardsContainer");

fetch("http://localhost:3000/tickets")
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
    });

    avaliableTickets.innerHTML = cardsHTML;
  })
  .catch((error) => console.error("Error fetching events:", error));
