// script.js
window.onload = () => {
  const productList = document.getElementById("product-list");

  if (productList) {
    products.forEach(product => {
      const card = document.createElement("div");
      card.className = "product-card";
      card.onclick = () => {
        window.location.href = `product.html?id=${product.id}`;
      };
      card.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
      `;
      productList.appendChild(card);
    });
  }
};
