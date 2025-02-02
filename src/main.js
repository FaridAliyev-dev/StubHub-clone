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

const nav = document.querySelector(".nav-menu");
if (localStorage.getItem("user")) {
  const user = localStorage.getItem("user");
  userData = JSON.parse(user);
  console.log(user);

  nav.innerHTML = `
            <ul class="nav-list">
            <li><a href="#">Events</a></li>
            <li><a href="#">Favorites</a></li>
            <li><a href="#">My Tickets</a></li>
            <li style="display: flex; flex-direction: row; ">
            <a href="profile.html" class="sign-in" style="display: flex; align-items: center; width: 100%; gap: 10px">
            
            <div style="width: 30px; height: 30px;">
            <img src="${userData.profilePictureURL}" alt="profile picture" style="width: 100%;  height: 100%; object-fit: cover; border-radius: 50%; margin-right: 10px">
            </div>

            ${userData.username}</a></li>
            <li><a href="login.html" class="log-out">Log Out</a></li>
          </ul>
  `;

  document.querySelector(".log-out").addEventListener("click", () => {
    localStorage.clear();
  });
  console.log("User is logged in");
} else {
  console.log("Salam");
}
