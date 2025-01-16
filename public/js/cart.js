// Load cart items from local storage and display them
document.addEventListener('DOMContentLoaded', function () {
    const cartItemsContainer = document.querySelector('.cart-items');
    const cartSummary = document.querySelector('.cart-summary p');
    // const checkoutButton = document.querySelector('.checkout-btn');
  
    // Retrieve cart items from localStorage
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
  
    if (cart.length > 0) {
      cartItemsContainer.innerHTML = ''; // Clear placeholder content
  
      let totalPrice = 0;
  
      cart.forEach(product => {
        // Create cart item element
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `
          <img src="${product.image}" alt="${product.name}">
          <div class="cart-item-info">
            <h3>${product.name}</h3>
            <p>${product.price}</p>
          </div>
          <button class="remove-item-btn">Remove</button>
        `;
  
        cartItemsContainer.appendChild(cartItem);
  
        // Parse the price and add to total price
        const price = parseFloat(product.price.replace('$', ''));
        totalPrice += price;
  
        // Remove item functionality
        cartItem.querySelector('.remove-item-btn').addEventListener('click', function () {
          const itemIndex = cart.indexOf(product);
          if (itemIndex > -1) {
            cart.splice(itemIndex, 1); // Remove item from the array
            localStorage.setItem('cart', JSON.stringify(cart)); // Update localStorage
            cartItem.remove(); // Remove from the DOM
            updateCartSummary(); // Update total price
          }
        });
      });
  
      // Update the total price in the cart summary
      cartSummary.textContent = `Total: $${totalPrice.toFixed(2)}`;
    } else {
      cartItemsContainer.innerHTML = '<p>No items in your cart yet.</p>';
    }
  
    // Function to update the cart total price
    function updateCartSummary() {
      let total = 0;
      cart.forEach(product => {
        const price = parseFloat(product.price.replace('$', ''));
        total += price;
      });
      cartSummary.textContent = `Total: $${total.toFixed(2)}`;
    }
   
  });

  // Select the "Proceed to Checkout" button
const checkoutButton = document.querySelector(".checkout-btn");

// Add event listener to the button
checkoutButton.addEventListener("click", () => {
  // Check if the cart is empty
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  if (cart.length === 0) {
    alert("Your cart is empty. Add items before proceeding to checkout.");
    return;
  }

  // Redirect to the checkout page (index2.html)
  window.location.href = "index2.html";
});


 

  