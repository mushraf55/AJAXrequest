document.getElementById("fetchData").addEventListener("click", () => {
  // Show a loading message
  const userInfoDiv = document.getElementById("userInfo");
  userInfoDiv.innerHTML = "Loading...";

  // Make an AJAX request
  fetch("https://jsonplaceholder.typicode.com/users/5") // Example API endpoint
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      // Display user information
      userInfoDiv.innerHTML = `
              <p><strong>Name:</strong> ${data.name}</p>
              <p><strong>Email:</strong> ${data.email}</p>
              <p><strong>Phone:</strong> ${data.phone}</p>
          `;
    })
    .catch((error) => {
      // Handle errors
      userInfoDiv.innerHTML = `Error fetching user data: ${error.message}`;
    });
});
