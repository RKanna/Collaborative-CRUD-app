"use strict";

const descriptionPage = document.getElementById("next-page");
const heroPage = document.getElementById("hero");
descriptionPage.style.display = "none";
const rows = document.querySelectorAll(".row");

//next page Alterations

const titleDescription = document.getElementById("title-des");
const modelDescription = document.getElementById("model-des");
const madebyDescription = document.getElementById("madeby");
const priceDescription = document.getElementById("price-des");
const imageDescription = document.getElementById("img-des");

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

function handleProductClick() {
  rows.forEach((row) => {
    row.addEventListener("click", () => {
      const productId = row.id;
      console.log(productId);
      switch (productId) {
        case "productOne":
          heroPage.style.display = "none";
          descriptionPage.style.display = "block";
          break;
        case "productTwo":
          titleDescription.innerText = "Samsung S7";
          modelDescription.innerText = "Model:Samsung S7";
          madebyDescription.innerText = "MADE BY: SAMSUNG";
          priceDescription.innerText = "Price : $16";
          imageDescription.src = "/images/product-2.png";
          heroPage.style.display = "none";
          descriptionPage.style.display = "block";
          break;
        case "productThree":
          titleDescription.innerText = "HTC 10 - Black";
          modelDescription.innerText = "Model:HTC 10 - Black";
          madebyDescription.innerText = "MADE BY: HTC";
          priceDescription.innerText = "Price : $8";
          imageDescription.src = "/images/product-3.png";
          heroPage.style.display = "none";
          descriptionPage.style.display = "block";
          break;
        case "productFour":
          titleDescription.innerText = "HTC 10 - White";
          modelDescription.innerText = "Model:HTC 10 - White";
          madebyDescription.innerText = "MADE BY: HTC";
          priceDescription.innerText = "Price : $18";
          imageDescription.src = "/images/product-4.png";
          heroPage.style.display = "none";
          descriptionPage.style.display = "block";
          break;
        case "productFive":
          titleDescription.innerText = "HTC Desire 626s";
          modelDescription.innerText = "Model:HTC Desire 626s";
          madebyDescription.innerText = "MADE BY: HTC";
          priceDescription.innerText = "Price : $24";
          imageDescription.src = "/images/product-5.png";
          heroPage.style.display = "none";
          descriptionPage.style.display = "block";
          break;
        case "productSix":
          titleDescription.innerText = "Vintage Iphone";
          modelDescription.innerText = "Model:Vintage Iphone";
          madebyDescription.innerText = "MADE BY: APPLE";
          priceDescription.innerText = "Price : $17";
          imageDescription.src = "/images/product-6.png";
          heroPage.style.display = "none";
          descriptionPage.style.display = "block";
          break;
        case "productSeven":
          titleDescription.innerText = "Iphone 7";
          modelDescription.innerText = "Model:Iphone 7";
          madebyDescription.innerText = "MADE BY: APPLE";
          priceDescription.innerText = "Price : $30";
          imageDescription.src = "/images/product-7.png";
          heroPage.style.display = "none";
          descriptionPage.style.display = "block";
          break;
        case "productEight":
          titleDescription.innerText = "Smashed Iphone";
          modelDescription.innerText = "Model:Smashed Iphone";
          madebyDescription.innerText = "MADE BY: APPLE";
          priceDescription.innerText = "Price : $2";
          imageDescription.src = "/images/product-8.png";
          heroPage.style.display = "none";
          descriptionPage.style.display = "block";
          break;
      }
    });
  });
}

handleProductClick();
function homepage() {
  heroPage.style.display = "flex";
  descriptionPage.style.display = "none";
}
function homepageOverlay() {
  overlaySection.style.display = "none";
  heroPage.style.display = "flex";
}
const smallCartBtns = document.getElementsByClassName("btn-small");
const overlaySection = document.getElementById("overlay-section");

overlaySection.style.display = "none";

for (const smallCartBtn of smallCartBtns) {
  smallCartBtn.addEventListener("click", (event) => {
    // Prevent the click event from propagating to the parent "row" element.
    event.stopPropagation();

    // Handle the click for each "btn-small" button here.
    // You can add code specific to each small button's behavior.
    // For example, adding the product associated with the clicked button to the cart.

    // Access the specific button that was clicked using event.target.
    const clickedButton = event.target;
    overlaySection.style.display = "flex";
    // You can now work with the clicked button, for example:
    // const productId = clickedButton.getAttribute("data-product-id");
    // Add the product to the cart or perform any other desired action.
  });
}
