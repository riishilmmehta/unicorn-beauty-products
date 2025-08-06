const params = new URLSearchParams(window.location.search);
const productId = parseInt(params.get("id"));

const product = products.find(p => p.id === productId);

if (product) {
  document.getElementById("product-name").textContent = product.name;
  document.getElementById("product-image").src = product.image;
  document.getElementById("product-description").textContent = product.description;
  document.getElementById("product-price").textContent = `₹${product.price}`;
  document.getElementById("add-to-cart").onclick = function () {
    addToCart(product.id);
  };
} else {
  document.getElementById("product-name").textContent = "No Data Found";
  document.getElementById("product-description").textContent = "";
  document.getElementById("product-price").textContent = "";
  document.getElementById("add-to-cart").style.display = "none";
}
