const card = document.querySelector(".mainItems");

const user = JSON.parse(localStorage.getItem("user"));

if (user) {
  card.innerHTML = `
            <div class="profileInformation">
            
            <div style="display: flex; gap: 30px; flex-direction: column;">
            <h2 style="text-align: center;">Profile Information</h2>
              <div class="profileItems">
                <img src="${user.profilePictureURL}" alt="Profile Picture" />

                <div class="user">
                  <div class="userName">
                    <h3>Username:</h3>
                    <p>${user.username}</p>
                  </div>

                  <div class="email">
                    <h3>Email:</h3>
                    <p>${user.email}</p>
                  </div>

                  <div class="balance">
                    <h3>Balance:</h3>
                    <p>${user.balance}</p>
                  </div>

                  <div class="account">
                  <h3>Member since:</h3>
                  <p>${user.accountCreationDate}</p>
                  </div>

                </div>
              </div>
              </div>

              <table>
                <h2>Purchase history:</h2>

              </table>
            </div>
          </div>
  `;
} else {
  card.innerHTML = "<p>User not found</p>";
}
