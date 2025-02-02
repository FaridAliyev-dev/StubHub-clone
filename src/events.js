const cardContainer = document.querySelector(".box");

fetch("http://localhost:3000/events")
  .then((response) => response.json())
  .then((events) => {
    let cardsHTML = "";

    events.forEach((event) => {
      cardsHTML += `
        <div class="card" data-event-id="${event.id}">
          <img src="${event.posterURL}" alt="${event.name}" />
          <div class="cardContent">
            <h3>${event.name}</h3>
            <p>${new Date(event.dateTime).toLocaleString()}</p>
            <p>${event.venueName}</p>
          </div>
        </div>
      `;
    });

    cardContainer.innerHTML = cardsHTML;

    const cards = document.querySelectorAll(".card");
    cards.forEach((card) => {
      card.addEventListener("click", (e) => {
        const eventId = card.getAttribute("data-event-id");
        window.location.href = `detail.html?id=${eventId}`;
      });
    });
  })
  .catch((error) => console.error("Error fetching events:", error));
