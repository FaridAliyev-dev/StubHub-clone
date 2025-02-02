fetch("http://localhost:3000/events")
  .then((response) => response.json())
  .then((events) => {
    const eventId = new URLSearchParams(window.location.search).get("id");
    const event = events.find((event) => event.id === eventId);

    const detailContainer = document.querySelector(".detail");
    detailContainer.innerHTML = `
    <div class="detailImage">
    <img src="${event.posterURL}" alt="${event.name}" />
    </div>
    
    <div class="detailText">
    <h1>${event.name}</h1>
        <p>${new Date(event.dateTime).toLocaleString()}</p>
        <p><b>Venue:</b>${event.venueName}</p>
        <p><b>Address:</b>${event.venueAddress}</p>
        <p><b>Organizer:</b>${event.organizer}</p>
        <p><b>Age:</b>${event.ageRestriction}</p>
        <p><b>Duration:</b>${event.duration}</p>
        </div>
      `;
  })
  .catch((error) => console.error("Error fetching events:", error));
