document.addEventListener('DOMContentLoaded', function () {
  const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
  const categoryFilter = document.getElementById('category');
  const sortFilter = document.getElementById('sort');
  const productGrid = document.querySelector('.product-grid');
  const productCards = Array.from(document.querySelectorAll('.product-card'));

  // Add click event to each "Add to Cart" button
  addToCartButtons.forEach(button => {
    button.addEventListener('click', function (event) {
      const productCard = event.target.closest('.product-card');
      const productName = productCard.querySelector('h3').textContent;
      const productPrice = productCard.querySelector('p').textContent;
      const productImage = productCard.querySelector('img').src;

      const product = {
        name: productName,
        price: productPrice,
        image: productImage
      };

     
      let cart = JSON.parse(localStorage.getItem('cart')) || [];

     
      cart.push(product);

     
      localStorage.setItem('cart', JSON.stringify(cart));

     
      alert(`${productName} has been added to your cart!`);
    });
  });

  // Add change event to category filter
  categoryFilter.addEventListener('change', function () {
    const selectedCategory = categoryFilter.value;

    productCards.forEach(card => {
      const productCategory = card.getAttribute('data-category');

      
      if (selectedCategory === 'all' || productCategory === selectedCategory) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });

  // Add change event to sort filter
  sortFilter.addEventListener('change', function () {
    const selectedSort = sortFilter.value;

    // Sort product cards by price
    const sortedCards = productCards.sort((a, b) => {
      const priceA = parseFloat(a.querySelector('p').textContent.replace('$', ''));
      const priceB = parseFloat(b.querySelector('p').textContent.replace('$', ''));

      if (selectedSort === 'price-low-high') {
        return priceA - priceB; // Sort low to high
      } else if (selectedSort === 'price-high-low') {
        return priceB - priceA; // Sort high to low
      }

      return 0;
    });

    // Clear the product grid and re-append sorted cards
    productGrid.innerHTML = '';
    sortedCards.forEach(card => {
      productGrid.appendChild(card);
    });
  });
});

