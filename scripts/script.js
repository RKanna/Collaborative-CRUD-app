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

// function generateUniqueIds() {
//   // Get all the row elements with class "row"

//   // Loop through each row and generate a unique ID
//   rows.forEach((row) => {
//     const uniqueId = `row-${Date.now()}-${Math.random()
//       .toString(36)
//       .substring(7)}`;
//     row.setAttribute("data-row-id", uniqueId);
//     console.log(uniqueId);
//   });
// }

// // Call the function to generate unique IDs
// generateUniqueIds();

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
          imageDescription.src = "./images/product-2.png";
          heroPage.style.display = "none";
          descriptionPage.style.display = "block";
          break;
        case "productThree":
          titleDescription.innerText = "HTC 10 - Black";
          modelDescription.innerText = "Model:HTC 10 - Black";
          madebyDescription.innerText = "MADE BY: HTC";
          priceDescription.innerText = "Price : $8";
          imageDescription.src = "./images/product-3.png";
          heroPage.style.display = "none";
          descriptionPage.style.display = "block";
          break;
        case "productFour":
          titleDescription.innerText = "HTC 10 - White";
          modelDescription.innerText = "Model:HTC 10 - White";
          madebyDescription.innerText = "MADE BY: HTC";
          priceDescription.innerText = "Price : $18";
          imageDescription.src = "./images/product-4.png";
          heroPage.style.display = "none";
          descriptionPage.style.display = "block";
          break;
        case "productFive":
          titleDescription.innerText = "HTC Desire 626s";
          modelDescription.innerText = "Model:HTC Desire 626s";
          madebyDescription.innerText = "MADE BY: HTC";
          priceDescription.innerText = "Price : $24";
          imageDescription.src = "./images/product-5.png";
          heroPage.style.display = "none";
          descriptionPage.style.display = "block";
          break;
        case "productSix":
          titleDescription.innerText = "Vintage Iphone";
          modelDescription.innerText = "Model:Vintage Iphone";
          madebyDescription.innerText = "MADE BY: APPLE";
          priceDescription.innerText = "Price : $17";
          imageDescription.src = "./images/product-6.png";
          heroPage.style.display = "none";
          descriptionPage.style.display = "block";
          break;
        case "productSeven":
          titleDescription.innerText = "Iphone 7";
          modelDescription.innerText = "Model:Iphone 7";
          madebyDescription.innerText = "MADE BY: APPLE";
          priceDescription.innerText = "Price : $30";
          imageDescription.src = "./images/product-7.png";
          heroPage.style.display = "none";
          descriptionPage.style.display = "block";
          break;
        case "productEight":
          titleDescription.innerText = "Smashed Iphone";
          modelDescription.innerText = "Model:Smashed Iphone";
          madebyDescription.innerText = "MADE BY: APPLE";
          priceDescription.innerText = "Price : $2";
          imageDescription.src = "./images/product-8.png";
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
  cartSection.style.display = "none";
}
function homepageOverlay() {
  overlaySection.style.display = "none";
  heroPage.style.display = "flex";
}
const smallCartBtns = document.querySelectorAll(".btn-small");
const overlaySection = document.getElementById("overlay-section");

overlaySection.style.display = "none";

const overlayImage = document.getElementById("overlayimg");
const overlayTitle = document.getElementById("overlayh2-title");
const overlayPrice = document.getElementById("overlayprice");

for (const smallCartBtn of smallCartBtns) {
  smallCartBtn.addEventListener("click", (event) => {
    // Prevent the click event from propagating to the parent "row" element.
    event.stopPropagation();

    // Access the specific button that was clicked using event.currentTarget.
    const clickedButton = event.currentTarget;

    // Get the productId from the clicked button's data-product-id attribute.
    const productId = clickedButton.getAttribute("data-product-id");

    // Handle the click for each "btn-small" button here.
    switch (productId) {
      case "1":
        // Handle the "addToCart" behavior here.
        overlayImage.src = "./images/product-1.png";
        overlayTitle.innerText = "Google Pixel - Black";
        overlayPrice.innerText = "Price : $ 10";
        overlaySection.style.display = "flex";

        // Add the product to the cart or perform any other desired action.
        break;

      case "2":
        // Handle the "removeFromCart" behavior here.
        overlayImage.src = "./images/product-2.png";
        overlayTitle.innerText = "Samsung S7";
        overlayPrice.innerText = "Price : $ 16";
        overlaySection.style.display = "flex";

        // You can remove the product associated with the clicked button from the cart.
        break;
      case "3":
        // Handle the "removeFromCart" behavior here.
        overlayImage.src = "./images/product-3.png";
        overlayTitle.innerText = "HTC 10 - Black";
        overlayPrice.innerText = "Price : $ 8";
        overlaySection.style.display = "flex";

        // You can remove the product associated with the clicked button from the cart.
        break;
      case "4":
        // Handle the "removeFromCart" behavior here.
        overlayImage.src = "./images/product-4.png";
        overlayTitle.innerText = "HTC 10 - White";
        overlayPrice.innerText = "Price : $ 18";
        overlaySection.style.display = "flex";

        // You can remove the product associated with the clicked button from the cart.
        break;
      case "5":
        // Handle the "removeFromCart" behavior here.
        overlayImage.src = "./images/product-5.png";
        overlayTitle.innerText = "HTC Desire 626s";
        overlayPrice.innerText = "Price : $ 24";
        overlaySection.style.display = "flex";

        // You can remove the product associated with the clicked button from the cart.
        break;
      case "6":
        // Handle the "removeFromCart" behavior here.
        overlayImage.src = "./images/product-6.png";
        overlayTitle.innerText = "Vintage Iphone";
        overlayPrice.innerText = "Price : $ 17";
        overlaySection.style.display = "flex";

        // You can remove the product associated with the clicked button from the cart.
        break;
      case "7":
        // Handle the "removeFromCart" behavior here.
        overlayImage.src = "./images/product-7.png";
        overlayTitle.innerText = "Iphone 7";
        overlayPrice.innerText = "Price : $ 30";
        overlaySection.style.display = "flex";

        // You can remove the product associated with the clicked button from the cart.
        break;
      case "8":
        // Handle the "removeFromCart" behavior here.
        overlayImage.src = "./images/product-8.png";
        overlayTitle.innerText = "Smashed Iphone";
        overlayPrice.innerText = "Price : $ 2";
        overlaySection.style.display = "flex";

        // You can remove the product associated with the clicked button from the cart.
        break;
    }
  });
}

const cartSection = document.getElementById("your-cart");
const navigationButton = document.getElementById("nav-btn");

cartSection.style.display = "none";

navigationButton.addEventListener("click", () => {
  cartSection.style.display = "flex";
  heroPage.style.display = "none";
  descriptionPage.style.display = "none";
});
