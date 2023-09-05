"use strict";

const descriptionPage = document.getElementById("next-page");
const heroPage = document.getElementById("hero");
descriptionPage.style.display = "none";
const rows = document.querySelectorAll(".row");

function generateUniqueIds() {
  // Get all the row elements with class "row"

  // Loop through each row and generate a unique ID
  rows.forEach((row) => {
    const uniqueId = `row-${Date.now()}-${Math.random()
      .toString(36)
      .substring(7)}`;
    row.setAttribute("data-row-id", uniqueId);
    console.log(uniqueId);
  });
}

// Call the function to generate unique IDs
generateUniqueIds();

rows.forEach((row) => {
  row.addEventListener("click", () => {
    // Get the specific action you want to perform for each row
    const productId = row.id; // Assuming you set the ID attribute for each row accordingly
    console.log(productId);
    // Perform the action based on the row clicked
    switch (productId) {
      case "productOne":
        // Redirect to a specific page for product 1
        heroPage.style.display = "none";
        descriptionPage.style.display = "block";
        break;
      case "productTwo":
        // Redirect to a specific page for product 2
        heroPage.style.display = "none";
        descriptionPage.style.display = "block";
        break;
      case "productThree":
        // Redirect to a specific page for product 2
        heroPage.style.display = "none";
        descriptionPage.style.display = "block";
        break;
      case "productFour":
        // Redirect to a specific page for product 2
        heroPage.style.display = "none";
        descriptionPage.style.display = "block";
        break;
      case "productFive":
        // Redirect to a specific page for product 2
        heroPage.style.display = "none";
        descriptionPage.style.display = "block";
        break;
      case "productSix":
        // Redirect to a specific page for product 2
        heroPage.style.display = "none";
        descriptionPage.style.display = "block";
        break;
      case "productSeven":
        // Redirect to a specific page for product 2
        heroPage.style.display = "none";
        descriptionPage.style.display = "block";
        break;
      case "productEight":
        // Redirect to a specific page for product 2
        heroPage.style.display = "none";
        descriptionPage.style.display = "block";
        break;
      // Add more cases for other products...
    }
  });
});
