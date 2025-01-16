const scrollLeft = document.getElementById('scroll-left');
const scrollRight = document.getElementById('scroll-right');
const productList = document.getElementById('product-list');
const scrollLeftElectronics = document.getElementById('scroll-left-electronics');
const scrollRightElectronics = document.getElementById('scroll-right-electronics');
const productListElectronics = document.getElementById('product-list-electronics');

// Scroll left
scrollLeft.addEventListener('click', () => {
  productList.scrollBy({
    left: -200,
    behavior: 'smooth',
  });
});

// Scroll right
scrollRight.addEventListener('click', () => {
  productList.scrollBy({
    left: 200,
    behavior: 'smooth',
  });
});



scrollLeftElectronics.addEventListener('click', () => {
  productListElectronics.scrollBy({
    left: -200,
    behavior: 'smooth',
  });
});

scrollRightElectronics.addEventListener('click', () => {
  productListElectronics.scrollBy({
    left: 200,
    behavior: 'smooth',
  });
});


