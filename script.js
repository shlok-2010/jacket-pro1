// JSON Object containing multiple products
const products = [
    {
      "name": "Recycled Polyester Jacket",
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJWQBWA8quhxF0epJQrIFT-BHDQ4_NGw9beA&s",
      "description": "Made from 100% recycled polyester, this jacket is eco-friendly, stylish, and comfortable.",
      "price": "$89.99"
    },
    {
      "name": "Eco Fleece Jacket",
      "image": "https://via.placeholder.com/200x300",
      "description": "Soft and sustainable fleece jacket made from recycled materials.",
      "price": "$75.00"
    },
    {
      "name": "Organic Cotton Windbreaker",
      "image": "https://via.placeholder.com/200x300",
      "description": "Lightweight windbreaker made from organic cotton.",
      "price": "$69.99"
    },
    {
      "name": "Recycled Denim Jacket",
      "image": "https://via.placeholder.com/200x300",
      "description": "Stylish denim jacket made from recycled cotton denim.",
      "price": "$95.00"
    }
  ];
  
  // Function to generate product cards
  function displayProducts() {
    const container = document.getElementById('products-container');
    products.forEach(product => {
      const productCard = document.createElement('div');
      productCard.classList.add('product-card');
  
      productCard.innerHTML = `
        <div class="product-image">
          <img src="${product.image}" alt="${product.name}">
        </div>
        <div class="product-info">
          <h2>${product.name}</h2>
          <p>${product.description}</p>
          <p><strong>Price:</strong> ${product.price}</p>
          <button class="add-to-cart">Add to Cart</button>
        </div>
      `;
      
      container.appendChild(productCard);
    });
  }
  
  // Load products on page load
  document.addEventListener('DOMContentLoaded', displayProducts);
  