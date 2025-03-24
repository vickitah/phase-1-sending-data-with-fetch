// Add your code here
function submitData(userName, userEmail) {
    // Create the data object
    const userData = {
      name: userName,
      email: userEmail
    };
  
    // Set up the configuration object
    const configurationObject = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(userData)
    };
  
    // Make the fetch request and return it
    return fetch("http://localhost:3000/users", configurationObject)
      .then(response => response.json())
      .then(object => {
        console.log(object);
        // Append user ID to the DOM (optional)
        document.body.innerHTML += `<p>${object.id}</p>`;
      })
      .catch(error => {
        alert("Something went wrong!");
        document.body.innerHTML += `<p>${error.message}</p>`;
      });
  }
  
  // Example usage:
  submitData("Victor", "victor@example.com");
  