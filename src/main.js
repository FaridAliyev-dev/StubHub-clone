import { products } from "./data.js";

const card = document.querySelector(".productsBox");
const bestSellersBox = document.querySelector(".bestSellersBox");
const discountedProductsBox = document.querySelector(".discountedProductsBox");

function DisplayCards(container, arr, itemClass) {
  arr.forEach((product) => {
    const productItem = document.createElement("div");
    productItem.classList.add(itemClass);

    const productStatus = document.createElement("div");
    productStatus.classList.add("productStatus");

    const status = document.createElement("div");
    status.classList.add("status");

    if (product.discount) {
      const activeSale = document.createElement("div");
      activeSale.classList.add("activeSale");
      activeSale.textContent = `-${product.discount}%`;
      status.appendChild(activeSale);
    }

    if (product.isNew) {
      const activeNew = document.createElement("div");
      activeNew.classList.add("activeNew");
      activeNew.textContent = "New";
      status.appendChild(activeNew);
    }

    productStatus.appendChild(status);

    const heartButton = document.createElement("div");
    heartButton.classList.add("heartButton");
    const heartIcon = document.createElement("i");
    heartIcon.classList.add("fa-regular", "fa-heart");
    heartButton.appendChild(heartIcon);

    productStatus.appendChild(heartButton);
    productItem.appendChild(productStatus);

    const productImage = document.createElement("div");
    productImage.classList.add("productImage");
    const img = document.createElement("img");
    img.src = product.image;
    img.alt = product.title;
    productImage.appendChild(img);
    productItem.appendChild(productImage);

    const productRating = document.createElement("div");
    productRating.classList.add("productRating");

    for (let i = 0; i < 5; i++) {
      const star = document.createElement("i");
      star.classList.add("fa-solid", "fa-star");
      star.style.color = "#ffdd45";
      productRating.appendChild(star);
    }

    productItem.appendChild(productRating);

    const productText = document.createElement("div");
    productText.classList.add("productText");

    const productName = document.createElement("p");
    productName.classList.add("productName");
    productName.textContent = product.title;

    const priceContainer = document.createElement("div");
    priceContainer.classList.add("priceContainer");

    const oldPrice = document.createElement("p");
    oldPrice.classList.add("oldPrice");
    oldPrice.textContent = `$${product.oldPrice}`;
    oldPrice.style.textDecoration = "line-through";

    const productPrice = document.createElement("p");
    productPrice.classList.add("productPrice");
    productPrice.textContent = `$${product.price}`;

    priceContainer.appendChild(productPrice);
    priceContainer.appendChild(oldPrice);

    productText.appendChild(productName);
    productText.appendChild(priceContainer);

    productItem.appendChild(productText);

    const productButton = document.createElement("div");
    productButton.classList.add("productButton");
    const button = document.createElement("button");
    button.textContent = "Add to cart";
    productButton.appendChild(button);
    productItem.appendChild(productButton);

    container.appendChild(productItem);
  });
}

DisplayCards(card, products, "productsItem1");
DisplayCards(bestSellersBox, products, "productsItem2");
DisplayCards(discountedProductsBox, products, "productsItem3");