import { navbar, footer } from "./components/components.js";

var productPageNavbar = document.getElementById("navbar");
productPageNavbar.innerHTML = navbar();

var productPageFooter = document.getElementById("footer");
productPageFooter.innerHTML = footer();


// ------------------------------------------------------->

// Fetch data from a source
fetch("https://chiragapi.onrender.com/arr")
  .then((response) => response.json()) // Assuming the response is in JSON format
  .then((data) => {
    // Save data to local storage
    localStorage.setItem("myData", JSON.stringify(data));
    // console.log("Data saved to local storage:", data);
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });

// Retrieve data from local storage
const storedData = localStorage.getItem("myData");

// ------------------------------------------------------->



const parsedData = JSON.parse(storedData);
console.log(parsedData);


var rightProductsArea = document.getElementById("right-products")
for (let i = 0; i < parsedData.length; i++) {
    const productCard = document.createElement("div");
    productCard.setAttribute("id", "product-card");
    productCard.innerHTML = `
          <div id="product-card-imageDiv">
              <img src="${parsedData[i].img}" alt="">
          </div>
          <div id="product-card-belowDiv">
              <p>${parsedData[i].name}</p>
              <p><span>₹ ${parsedData[i].mrp + 13.9}</span> ₹ ${
      parsedData[i].mrp
    }</p>
              <div id="product-card-buttons">
                  <button id="add-to-cart">Add to cart</button>
                  <button id="wishlistButton${i}" class="wishlistButton"><img id="wislist-heartImage" src="./images/heart.png" alt=""></w=button>
              </div>  
          </div>
      `;
      rightProductsArea.append(productCard);
  }
// <img src="${parsedData[i].img}" alt="">