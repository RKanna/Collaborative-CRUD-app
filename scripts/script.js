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

const btnMainOne = document.getElementById("btn1");
const btnMainTwo = document.getElementById("btn2");
const btnMainThree = document.getElementById("btn3");
const btnMainFour = document.getElementById("btn4");
const btnMainFive = document.getElementById("btn5");
const btnMainSix = document.getElementById("btn6");
const btnMainSeven = document.getElementById("btn7");
const btnMainEight = document.getElementById("btn8");
btnMainOne.style.display = "none";
btnMainTwo.style.display = "none";
btnMainThree.style.display = "none";
btnMainFour.style.display = "none";
btnMainFive.style.display = "none";
btnMainSix.style.display = "none";
btnMainSeven.style.display = "none";
btnMainEight.style.display = "none";
function handleProductClick() {
  rows.forEach((row) => {
    row.addEventListener("click", () => {
      const productId = row.id;
      console.log(productId);
      switch (productId) {
        case "productOne":
          titleDescription.innerText = "Samsung S7";
          modelDescription.innerText = "Model:Google Pixel - Black";
          madebyDescription.innerText = "MADE BY: GOOGLE";
          priceDescription.innerText = "Price : $10";
          imageDescription.src = "./images/product-1.png";
          heroPage.style.display = "none";
          descriptionPage.style.display = "block";
          btnMainOne.style.display = "block";
          btnMainTwo.style.display = "none";
          btnMainThree.style.display = "none";
          btnMainFour.style.display = "none";
          btnMainFive.style.display = "none";
          btnMainSix.style.display = "none";
          btnMainSeven.style.display = "none";
          btnMainEight.style.display = "none";
          break;
        case "productTwo":
          titleDescription.innerText = "Samsung S7";
          modelDescription.innerText = "Model:Samsung S7";
          madebyDescription.innerText = "MADE BY: SAMSUNG";
          priceDescription.innerText = "Price : $16";
          imageDescription.src = "./images/product-2.png";
          heroPage.style.display = "none";
          descriptionPage.style.display = "block";
          btnMainTwo.style.display = "block";
          btnMainOne.style.display = "none";
          btnMainThree.style.display = "none";
          btnMainFour.style.display = "none";
          btnMainFive.style.display = "none";
          btnMainSix.style.display = "none";
          btnMainSeven.style.display = "none";
          btnMainEight.style.display = "none";
          break;
        case "productThree":
          titleDescription.innerText = "HTC 10 - Black";
          modelDescription.innerText = "Model:HTC 10 - Black";
          madebyDescription.innerText = "MADE BY: HTC";
          priceDescription.innerText = "Price : $8";
          imageDescription.src = "./images/product-3.png";
          heroPage.style.display = "none";
          descriptionPage.style.display = "block";
          btnMainThree.style.display = "block";
          btnMainTwo.style.display = "none";
          btnMainOne.style.display = "none";
          btnMainFour.style.display = "none";
          btnMainFive.style.display = "none";
          btnMainSix.style.display = "none";
          btnMainSeven.style.display = "none";
          btnMainEight.style.display = "none";
          break;
        case "productFour":
          titleDescription.innerText = "HTC 10 - White";
          modelDescription.innerText = "Model:HTC 10 - White";
          madebyDescription.innerText = "MADE BY: HTC";
          priceDescription.innerText = "Price : $18";
          imageDescription.src = "./images/product-4.png";
          heroPage.style.display = "none";
          descriptionPage.style.display = "block";
          btnMainFour.style.display = "block";
          btnMainTwo.style.display = "none";
          btnMainThree.style.display = "none";
          btnMainOne.style.display = "none";
          btnMainFive.style.display = "none";
          btnMainSix.style.display = "none";
          btnMainSeven.style.display = "none";
          btnMainEight.style.display = "none";
          break;
        case "productFive":
          titleDescription.innerText = "HTC Desire 626s";
          modelDescription.innerText = "Model:HTC Desire 626s";
          madebyDescription.innerText = "MADE BY: HTC";
          priceDescription.innerText = "Price : $24";
          imageDescription.src = "./images/product-5.png";
          heroPage.style.display = "none";
          descriptionPage.style.display = "block";
          btnMainFive.style.display = "block";
          btnMainTwo.style.display = "none";
          btnMainThree.style.display = "none";
          btnMainFour.style.display = "none";
          btnMainOne.style.display = "none";
          btnMainSix.style.display = "none";
          btnMainSeven.style.display = "none";
          btnMainEight.style.display = "none";
          break;
        case "productSix":
          titleDescription.innerText = "Vintage Iphone";
          modelDescription.innerText = "Model:Vintage Iphone";
          madebyDescription.innerText = "MADE BY: APPLE";
          priceDescription.innerText = "Price : $17";
          imageDescription.src = "./images/product-6.png";
          heroPage.style.display = "none";
          descriptionPage.style.display = "block";
          btnMainSix.style.display = "block";
          btnMainTwo.style.display = "none";
          btnMainThree.style.display = "none";
          btnMainFour.style.display = "none";
          btnMainFive.style.display = "none";
          btnMainOne.style.display = "none";
          btnMainSeven.style.display = "none";
          btnMainEight.style.display = "none";
          break;
        case "productSeven":
          titleDescription.innerText = "Iphone 7";
          modelDescription.innerText = "Model:Iphone 7";
          madebyDescription.innerText = "MADE BY: APPLE";
          priceDescription.innerText = "Price : $30";
          imageDescription.src = "./images/product-7.png";
          heroPage.style.display = "none";
          descriptionPage.style.display = "block";
          btnMainSeven.style.display = "block";
          btnMainTwo.style.display = "none";
          btnMainThree.style.display = "none";
          btnMainFour.style.display = "none";
          btnMainFive.style.display = "none";
          btnMainSix.style.display = "none";
          btnMainOne.style.display = "none";
          btnMainEight.style.display = "none";
          break;
        case "productEight":
          titleDescription.innerText = "Smashed Iphone";
          modelDescription.innerText = "Model:Smashed Iphone";
          madebyDescription.innerText = "MADE BY: APPLE";
          priceDescription.innerText = "Price : $2";
          imageDescription.src = "./images/product-8.png";
          heroPage.style.display = "none";
          descriptionPage.style.display = "block";
          btnMainEight.style.display = "block";
          btnMainTwo.style.display = "none";
          btnMainThree.style.display = "none";
          btnMainFour.style.display = "none";
          btnMainFive.style.display = "none";
          btnMainSix.style.display = "none";
          btnMainSeven.style.display = "none";
          btnMainOne.style.display = "none";
          break;
      }
    });
  });
}
const emptyCartMessage = document.querySelector(".empty-cart");
handleProductClick();
function homepage() {
  heroPage.style.display = "flex";
  descriptionPage.style.display = "none";
  cartSection.style.display = "none";
  emptyCartMessage.style.display = "none";
}
function gotoCart() {
  cartSection.style.display = "flex";
  overlaySection.style.display = "none";
  heroPage.style.display = "none";
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

////...............................................NeWWWW...............................
// Add an event listener to the remove button in each cart row

const products = [
  {
    id: 1,
    name: "Google Pixel - Black",
    imageSrc: "./images/product-1.png",
    price: 10,
    quantity: 1,
  },
  {
    id: 2,
    name: "Samsung S7",
    imageSrc: "./images/product-2.png",
    price: 16,
    quantity: 1,
  },
  {
    id: 3,
    name: "HTC 10 - Black",
    imageSrc: "./images/product-3.png",
    price: 8,
    quantity: 1,
  },
  {
    id: 4,
    name: "HTC 10 - White",
    imageSrc: "./images/product-4.png",
    price: 18,
    quantity: 1,
  },
  {
    id: 5,
    name: "HTC Desire 626s",
    imageSrc: "./images/product-5.png",
    price: 24,
    quantity: 1,
  },
  {
    id: 6,
    name: "Vintage Iphone",
    imageSrc: "./images/product-6.png",
    price: 17,
    quantity: 1,
  },
  {
    id: 7,
    name: "Iphone 7",
    imageSrc: "./images/product-7.png",
    price: 30,
    quantity: 1,
  },
  {
    id: 8,
    name: "Smashed Iphone",
    imageSrc: "./images/product-8.png",
    price: 30,
    quantity: 1,
  },
];

//....................................For Visibility of displayCart in Cart Area.......

//......................................new new......................................

function createCartRow(product) {
  const cartRow = document.createElement("div");
  cartRow.classList.add("cart-row");
  cartRow.dataset.inCart = false; // Initialize as not in cart
  cartRow.innerHTML = `
    <div class="cart-item">
      <img src="${product.imageSrc}" alt="${product.name}" />
      <span class="span-title">${product.name}</span>
    </div>
    <div class="cart-price">$${product.price}</div>
    <div class="cart-quantity">
      <button class="increase-btn">+</button>
      <input
        class="quantity-ele"
        type="number"
        value="${product.quantity}"
        min="1"
      />
      <button class="decrease-btn">-</button>
    </div>
    <div class="cart-remove">
      <i class="remove-btn fas fa-trash" data-product="${product.name}"></i>
    </div>
    <div class="cart-total">$${product.price * product.quantity}</div>
    <div class="cart-total-value">$0</div>
  `;

  const removeButton = cartRow.querySelector(".remove-btn");
  removeButton.addEventListener("click", () => {
    removeCartRow(cartRow, product.name);
  });

  return cartRow;
}

function updateCartRow(cartRow) {
  const priceElement = cartRow.querySelector(".cart-price");
  const quantityElement = cartRow.querySelector(".quantity-ele");
  const totalElement = cartRow.querySelector(".cart-total");

  const price = parseFloat(priceElement.textContent.replace("$", ""));
  const quantity = parseInt(quantityElement.value);

  const rowTotal = price * quantity;

  totalElement.textContent = `$${rowTotal.toFixed(2)}`;
}

function removeCartRow(cartRow, productName) {
  cartRow.remove();
  updateCartTotal();
  displayEmptyCartMessage();
  const addButton = document.querySelector(
    `#btn${products.findIndex((product) => product.name === productName) + 1}`
  );

  if (addButton) {
    addButton.innerText = "Add to Cart";
    addButton.disabled = false;
  }
}

function updateCartTotal() {
  const cartRows = document.querySelectorAll(".cart-row");

  cartRows.forEach((cartRow) => {
    updateCartRow(cartRow);

    const totalElement = cartRow.querySelector(".cart-total");
    const rowTotal = parseFloat(totalElement.textContent.replace("$", ""));

    const cartTotalValue = cartRow.querySelector(".cart-total-value");
    cartTotalValue.textContent = `$${rowTotal.toFixed(2)}`;
  });
}

function increaseQuantity(quantityElement) {
  let newValue = parseInt(quantityElement.value) + 1;
  quantityElement.value = newValue;
}

function decreaseQuantity(quantityElement) {
  let newValue = parseInt(quantityElement.value) - 1;
  // Ensure the quantity doesn't go below 1
  quantityElement.value = Math.max(newValue, 1);
}

function addClickListenersToButtons() {
  for (let i = 1; i <= 8; i++) {
    const addButton = document.getElementById(`btn${i}`);
    addButton.addEventListener("click", () => {
      const product = products[i - 1];
      const cartRow = createCartRow(product);
      const cartContainer = document.querySelector(".dynamic-html-structure");
      cartContainer.appendChild(cartRow);
      updateCartTotal();

      addButton.innerText = "In Cart"; // Update the button text
      addButton.disabled = true; // Disable the button

      cartRow.dataset.inCart = true; // Update the cart row's "In Cart" data attribute

      // Add event listeners for increase and decrease buttons in the new cart row
      const increaseButton = cartRow.querySelector(".increase-btn");
      const decreaseButton = cartRow.querySelector(".decrease-btn");
      const quantityElement = cartRow.querySelector(".quantity-ele");

      increaseButton.addEventListener("click", () => {
        increaseQuantity(quantityElement);
        updateCartRow(cartRow);
        updateCartTotal();
      });

      decreaseButton.addEventListener("click", () => {
        decreaseQuantity(quantityElement);
        updateCartRow(cartRow);
        updateCartTotal();
      });

      // Add event listener to prevent non-numeric input
      quantityElement.addEventListener("input", () => {
        const newValue = parseInt(quantityElement.value);
        if (isNaN(newValue) || newValue < 1) {
          quantityElement.value = 1;
        }
        updateCartRow(cartRow);
        updateCartTotal();
      });
    });
  }

  // Add event listeners for "btn-small" buttons
  const btnSmallButtons = document.querySelectorAll(".btn-small");
  btnSmallButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
      const product = products[index];
      const cartRow = createCartRow(product);
      const cartContainer = document.querySelector(".dynamic-html-structure");
      cartContainer.appendChild(cartRow);
      updateCartTotal();

      button.innerText = "In Cart"; // Update the button text
      button.disabled = true; // Disable the button

      cartRow.dataset.inCart = true; // Update the cart row's "In Cart" data attribute

      // Add event listeners for increase and decrease buttons in the new cart row
      const increaseButton = cartRow.querySelector(".increase-btn");
      const decreaseButton = cartRow.querySelector(".decrease-btn");
      const quantityElement = cartRow.querySelector(".quantity-ele");

      increaseButton.addEventListener("click", () => {
        increaseQuantity(quantityElement);
        updateCartRow(cartRow);
        updateCartTotal();
      });

      decreaseButton.addEventListener("click", () => {
        decreaseQuantity(quantityElement);
        updateCartRow(cartRow);
        updateCartTotal();
      });

      // Add event listener to prevent non-numeric input
      quantityElement.addEventListener("input", () => {
        const newValue = parseInt(quantityElement.value);
        if (isNaN(newValue) || newValue < 1) {
          quantityElement.value = 1;
        }
        updateCartRow(cartRow);
        updateCartTotal();
      });
    });
  });
}

addClickListenersToButtons();

function displayEmptyCartMessage() {
  const cartRows = document.querySelectorAll(".cart-row");
  const emptyCartMessage = document.querySelector(".empty-cart");

  if (cartRows.length === 0) {
    cartSection.style.display = "none";
    emptyCartMessage.style.display = "block";
  } else {
    emptyCartMessage.style.display = "none";
  }
}
const navButton = document.querySelector(".nav-btn");

navButton.addEventListener("click", () => {
  displayEmptyCartMessage();
});
