function redirectToDetails(productId) {
  window.location.href = `product-details.html?id=${productId}`;
}
// Define product objects
const products = [
    {
      id: 1,
      name: "Eggs",
      price: "$2",
      image: "https://images.unsplash.com/photo-1498654077810-12c21d4d6dc3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mjl8fHxlbnwwfHx8fHw%3D",
      description:
        "Available in convenient packs of 12, our eggs ensure every meal is as fresh as it is delicious. Ideal for healthy eating, our eggs are a staple in any household, bringing natural goodness straight to your table.",
      specifications: [
        "Free-range",
        "Farm-fresh eggs",
        "Quantity: Available in packs of 12",
        "Size: Large",
      ],
    },
    {
      id: 2,
      name: "Bowl of Grapes",
      price: "$6",
      image: "https://images.unsplash.com/photo-1473229903343-d7903343f6c0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MjZ8fHxlbnwwfHx8fHw%3D",
      description:
        "Fresh Grapes available in form of basket. Ideal for healthy eating!",
      specifications: [
        "Free-range",
        "Garden-fresh",
        "Quantity: 12 per pack",
      ],
    },

    {
        "id": 3,
        "name": "Pan Cake",
        "price": "$3",
        "image": "https://images.unsplash.com/photo-1487790343276-2fe56a7d9439?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTd8fHxlbnwwfHx8fHw%3D",
        "description": "Fluffy and golden Pan Cake, perfect for breakfast or a quick snack. Made with fresh ingredients for a delightful experience.",
        "specifications": [
          "Made with organic flour",
          "Topped with syrup and butter",
          "Serves: 1-2 people"
        ]
      },

      {
        "id": 4,
        "name": "Pork Chop Dinner",
        "price": "$4",
        "image": "https://images.unsplash.com/photo-1432139555190-58524dae6a55?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTR8fHxlbnwwfHx8fHw%3D",
        "description": "Savor a hearty Pork Chop Dinner, perfectly grilled and seasoned, served with mashed potatoes and steamed vegetables.",
        "specifications": [
          "Grilled to perfection",
          "Includes mashed potatoes and vegetables",
          "Serves: 1-2 people"
        ]
      },

      {
        "id": 5,
        "name": "Bunch of Berries",
        "price": "$4",
        "image": "https://images.unsplash.com/photo-1495480137269-ff29bd0a695c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mzl8fHxlbnwwfHx8fHw%3D",
        "description": "A delightful mix of fresh and juicy berries, perfect for snacking or adding to your favorite dishes. Packed with natural sweetness and nutrients.",
        "specifications": [
          "Includes strawberries, blueberries, and raspberries",
          "Freshly picked and organic",
          "Ideal for snacking, desserts, or smoothies"
        ]
      },

      {
        "id": 6,
        "name": "Brulee’d Bananas",
        "price": "$4",
        "image": "https://images.unsplash.com/photo-1498588747262-0f2241707d13?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTN8fHxlbnwwfHx8fHw%3D",
        "description": "Sweet and caramelized Brulee’d Bananas, topped with a crispy sugar crust. Perfect as a dessert or a treat for any occasion.",
        "specifications": [
          "Caramelized with a torch for crispy perfection",
          "Made with ripe and fresh bananas",
          "Best served with ice cream or whipped cream"
        ]
      },

      {
        "id": 7,
        "name": "Fresh Cherries",
        "price": "$4",
        "image": "https://images.unsplash.com/photo-1495480137269-ff29bd0a695c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mzl8fHxlbnwwfHx8fHw%3D",
        "description": "Juicy and plump fresh cherries, bursting with natural sweetness. Perfect for snacking, baking, or as a garnish for your favorite drinks.",
        "specifications": [
          "Hand-picked and organic",
          "Rich in antioxidants and vitamins",
          "Great for snacking, baking, or cocktails"
        ]
      },

      {
        "id": 8,
        "name": "Bowl of Grapes",
        "price": "$4",
        "image": "https://images.unsplash.com/photo-1463740839922-2d3b7e426a56?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8OHx8fGVufDB8fHx8fA%3D%3D",
        "description": "A refreshing bowl of sweet and juicy grapes, perfect for healthy snacking or adding to your meals. Packed with flavor and natural goodness.",
        "specifications": [
          "Seedless and sweet",
          "High in antioxidants and vitamin C",
          "Perfect for snacking, salads, or desserts"
        ]
      },

      {
        "id": 9,
        "name": "High-Performance Laptop",
        "price": "$1200",
        "image": "https://plus.unsplash.com/premium_photo-1679079456083-9f288e224e96?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZWxlY3Ryb25pY3N8ZW58MHx8MHx8fDA%3D",
        "description": "A cutting-edge high-performance laptop, perfect for work, gaming, or entertainment. Designed with speed, durability, and user convenience in mind.",
        "specifications": [
          "Intel Core i7 12th Gen Processor",
          "16GB RAM and 512GB SSD Storage",
          "15.6-inch Full HD Display with Anti-Glare Technology",
          "Backlit Keyboard and Precision Touchpad",
          "Lightweight and durable aluminum chassis"
        ]
      },

      {
        "id": 10,
        "name": "Advanced Microchip",
        "price": "$1200",
        "image": "https://plus.unsplash.com/premium_photo-1663045990033-35c6e6bfc22e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fGVsZWN0cm9uaWNzfGVufDB8fDB8fHww",
        "description": "State-of-the-art microchip designed for next-generation electronics. Built with unparalleled precision, it ensures maximum efficiency and performance for advanced computing and IoT devices.",
        "specifications": [
          "Cutting-edge semiconductor technology",
          "Optimized for AI and machine learning applications",
          "Ultra-low power consumption for energy efficiency",
          "High-speed data processing and multitasking capabilities",
          "Ideal for smart devices, servers, and embedded systems"
        ]
      },

      {
        "id": 11,
        "name": "Smartphone",
        "price": "$1200",
        "image": "https://images.unsplash.com/photo-1649859398731-d3c4ebca53fc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTV8fGVsZWN0cm9uaWNzfGVufDB8fDB8fHww",
        "description": "State-of-the-art microchip designed for next-generation electronics. Built with unparalleled precision, it ensures maximum efficiency and performance for advanced computing and IoT devices.",
        "specifications": [
          "Cutting-edge semiconductor technology",
          "Optimized for AI and machine learning applications",
          "Ultra-low power consumption for energy efficiency",
          "High-speed data processing and multitasking capabilities",
          "Ideal for smart devices, servers, and embedded systems"
        ]
      },

      {
        "id": 12,
        "name": "Smartwatch",
        "price": "$120",
        "image": "https://images.unsplash.com/photo-1523395243481-163f8f6155ab?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c21hcnR3YXRjaHxlbnwwfHwwfHx8MA%3D%3D",
        "description": "A sleek and modern smartwatch designed for fitness and productivity. Track your health, stay connected, and enhance your daily life with advanced features and stylish design.",
        "specifications": [
          "Heart rate and sleep monitoring",
          "Built-in GPS and step tracking",
          "Water-resistant and durable",
          "Customizable watch faces",
          "Compatible with Android and iOS"
        ]
      },
      
      {
        "id": 13,
        "name": "Apple Laptop",
        "price": "$1200",
        "image": "https://images.unsplash.com/photo-1524656855800-59465ebcec69?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fGlwaG9uZXxlbnwwfHwwfHx8MA%3D%3D",
        "description": "A powerful and sleek Apple laptop designed for productivity and creativity. Perfect for professionals and students who need performance and style in one package.",
        "specifications": [
          "Apple M1 chip for blazing-fast performance",
          "Retina display with True Tone technology",
          "Up to 18 hours of battery life",
          "Lightweight and ultra-portable design",
          "macOS for seamless and secure operation"
        ]
      },
    
      
      {
        "id": 14,
        "name": "AirPods",
        "price": "$199",
        "image": "https://images.unsplash.com/photo-1603351154351-5e2d0600bb77?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YWlycG9kc3xlbnwwfHwwfHx8MA%3D%3D",
        "description": "Wireless and effortless, AirPods redefine how you experience sound. Seamlessly connect to your devices and enjoy crystal-clear audio with unmatched convenience.",
        "specifications": [
          "High-quality sound with adaptive EQ",
          "Active noise cancellation for immersive listening",
          "Up to 24 hours of battery life with the charging case",
          "Quick and easy pairing with Apple devices",
          "Sweat and water resistance for workouts and outdoor use"
        ]
      },
      
      {
        "id": 15,
        "name": "AirPods",
        "price": "$199",
        "image": "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGFpcnBvZHN8ZW58MHx8MHx8fDA%3D",
        "description": "Wireless and effortless, AirPods redefine how you experience sound. Seamlessly connect to your devices and enjoy crystal-clear audio with unmatched convenience.",
        "specifications": [
          "High-quality sound with adaptive EQ",
          "Active noise cancellation for immersive listening",
          "Up to 24 hours of battery life with the charging case",
          "Quick and easy pairing with Apple devices",
          "Sweat and water resistance for workouts and outdoor use"
        ]
      },


      {
        "id": 16,
        "name": "Headphones",
        "price": "$299",
        "image": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aGVhZHBob25lc3xlbnwwfHwwfHx8MA%3D%3D",
        "description": "Experience immersive audio with premium headphones designed for superior sound quality, comfort, and durability. Perfect for music lovers and professionals alike.",
        "specifications": [
          "High-fidelity sound with deep bass",
          "Active noise cancellation for a distraction-free experience",
          "Up to 30 hours of battery life",
          "Ergonomic design for long-lasting comfort",
          "Compatible with all major devices via Bluetooth or wired connection"
        ]
      },
      
      {
        "id": 17,
        "name": "Rode Microphone",
        "price": "$499",
        "image": "https://images.unsplash.com/photo-1601814837661-ce2832acd413?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGhlYWRwaG9uZXN8ZW58MHx8MHx8fDA%3D",
        "description": "The latest Rode microphone delivers studio-quality sound for recording, streaming, and podcasting. Designed for professionals who demand exceptional audio clarity and performance.",
        "specifications": [
          "Broadcast-quality sound with high sensitivity",
          "Cardioid polar pattern for noise isolation",
          "Durable metal construction",
          "Plug-and-play compatibility with major devices",
          "Perfect for recording, streaming, and live performances"
        ]
      }
         
      
  ];
  
  
  // Function to get query parameter
  function getQueryParam(param) {
    const params = new URLSearchParams(window.location.search);
    return params.get(param);
  }
  
  // Get the product ID from the query string
  const productId = parseInt(getQueryParam("id"));
  
  // Find the selected product
  const selectedProduct = products.find((product) => product.id === productId);
  
  // Render the product details
  function renderProductDetails(product) {
    if (!product) {
      document.getElementById("product-details").innerHTML = "<p>Product not found!</p>";
      return;
    }
  
    document.getElementById("product-details").innerHTML = `
      <div class="product-details featured">
        <div class="product-image">
          <img src="${product.image}" alt="${product.name}" />
        </div>
        <div class="product-info">
          <h2>${product.name}</h2>
          <p><strong>Price:</strong> ${product.price}</p>
          <p>${product.description}</p>
          <ul>
            ${product.specifications.map((spec) => `<li>${spec}</li>`).join("")}
          </ul>
        </div>
      </div>
    `;
  }
  
  // Render the selected product
  renderProductDetails(selectedProduct);
  