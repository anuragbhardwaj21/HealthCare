import { navbar, footer } from "./components/components.js";

var navbarArea = document.getElementById("navbar");
navbarArea.innerHTML = navbar();

var footerArea = document.getElementById("footer");
footerArea.innerHTML = footer();

// Check if there are any products in the cart
var cartItems = JSON.parse(localStorage.getItem("cart_item")) || [];

// Function to display the cart items
function displayCart() {
  // Get the container elements
  var container = document.getElementById("container");
  var cartItemsContainer = document.getElementById("cart_items");
  var cartTotalContainer = document.getElementById("cart_total");

  // If no items in the cart, display the message
  if (cartItems.length === 0) {
    var messageDiv = document.createElement("div");
    messageDiv.innerHTML = "<h2>Oops!</h2><p>Looks like there is no item in your cart yet.</p><button id='add_medicines'>ADD MEDICINES</button>";
    container.appendChild(messageDiv);

    // Redirect to the home page when the "ADD MEDICINES" button is clicked
    var addMedicinesButton = document.getElementById("add_medicines");
    addMedicinesButton.addEventListener("click", function () {
      window.location.href = "index.html";
    });
  } else {
    // Display the cart items
    cartItemsContainer.innerHTML = "";
    cartItems.forEach(function (item) {
      var cartItemDiv = document.createElement("div");
      // Create and append the necessary HTML elements to display each item
      // ...

      cartItemsContainer.appendChild(cartItemDiv);
    });

    // Calculate and display the cart summary
    var totalPrice = 0;
    var totalDiscount = 0;

    cartItems.forEach(function (item) {
      // Update totalPrice and totalDiscount based on item price and quantity
      // ...

      // Create and append the necessary HTML elements for displaying the summary
      // ...
    });

    // Create and append the necessary HTML elements for the checkout section
    // ...
  }
}

// Call the displayCart function
displayCart();

// Checkout button click event handler
var checkoutButton = document.getElementById("checkout_button");
checkoutButton.addEventListener("click", function () {
  var userLoggedIn = JSON.parse(localStorage.getItem("user_login"));

  if (userLoggedIn) {
    // Redirect to the payment page if the user is logged in
    window.location.href = "payment.html";
  } else {
    // Redirect to the login page if the user is not logged in
    window.location.href = "login.html";
  }
});