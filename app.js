// app.js

fetch('http://localhost:5000/products')
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById('product-container');

    data.forEach(product => {
      const card = document.createElement('div');
      card.innerHTML = `
        <h3>${product.name}</h3>
        <img src="${product.image}" width="200">
        <p>Price: ৳${product.price}</p>
        <p>${product.description}</p>
        <hr/>
      `;
      container.appendChild(card);
    });
  })
  .catch(err => {
    console.error("Error fetching products:", err);
  });
