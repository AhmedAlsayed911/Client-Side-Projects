products = [
  { id: 1, name: "Smartphone X", title: "Smartphone X Pro", description: "High-performance smartphone with OLED display.", price: 799, image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9", quantity: 1 },
  { id: 2, name: "Laptop Air", title: "Ultra Slim Laptop", description: "Lightweight laptop for work and gaming.", price: 1299, image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8", quantity: 1 },
  { id: 3, name: "Bluetooth Headphones", title: "Wireless Noise Cancelling", description: "Immersive sound with deep bass.", price: 199, image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80", quantity: 1 },
  { id: 4, name: "Smartwatch", title: "Fitness Smartwatch 2025", description: "Tracks health metrics all day.", price: 149, image: "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b", quantity: 1 },
  { id: 5, name: "Gaming Keyboard", title: "RGB Mechanical Keyboard", description: "Blue switch mechanical keyboard.", price: 89, image: "https://images.unsplash.com/photo-1593642532973-d31b6557fa68", quantity: 1 },
  { id: 6, name: "Samrt Watch", title: "Ergonomic Pro Mouse", description: "Precision sensor and programmable buttons.", price: 49, image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=500&q=80", quantity: 1 },
  { id: 7, name: "4K Monitor", title: "Ultra HD 27-inch Monitor", description: "Sharp and vivid colors for work and gaming.", price: 399, image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8", quantity: 1 },
  { id: 8, name: "DSLR Camera", title: "Professional DSLR Camera", description: "High-quality photography tool.", price: 999, image: "https://images.unsplash.com/photo-1588508065123-287b28e013da?w=500&q=80", quantity: 1 },
  { id: 9, name: "Wireless Speaker", title: "Portable Bluetooth Speaker", description: "Crystal clear sound on the go.", price: 59, image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500&q=80", quantity: 1 },
  { id: 10, name: "KeyBoard Pro", title: "10-inch HD Tablet", description: "Perfect for study, movies, and work.", price: 349, image: "https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=500&q=80", quantity: 1 },
  { id: 11, name: "Speaker", title: "Virtual Reality Set", description: "Immersive VR gaming experience.", price: 299, image: "https://images.unsplash.com/photo-1591405351990-4726e331f141?w=500&q=80", quantity: 1 },
  { id: 12, name: "Drone", title: "4K Camera Drone", description: "Perfect aerial photography.", price: 499, image: "https://images.unsplash.com/photo-1512820790803-83ca734da794", quantity: 1 },
  { id: 13, name: "Wireless Charger", title: "Wireless Earbuds", description: "With active noise cancellation.", price: 129, image: "https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=500&q=80", quantity: 1 },
  { id: 14, name: "SSD HardDesk", title: "Fast Charging 20000mAh", description: "Charge devices multiple times.", price: 39, image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500&q=80", quantity: 1 },
  { id: 15, name: "Powe Bank", title: "50-inch 4K Smart TV", description: "Netflix, YouTube, and more built-in.", price: 699, image: "https://images.unsplash.com/photo-1625948515291-69613efd103f?w=500&q=80", quantity: 1 }
]

var images = document.getElementById('images');
var itemsPerRow = 4;
var tr;

function createTable(products) {
  for (var i = 0; i < products.length; i++) {
    var item = products[i];

    if (i % itemsPerRow === 0) {
      tr = document.createElement('tr');
      images.appendChild(tr);
    }

    var td = document.createElement('td');

    var img = document.createElement('img');
    img.src = item.image;

    var nameP = document.createElement('p');
    nameP.textContent = item.name;

    var priceP = document.createElement('p');
    priceP.textContent = '$' + item.price;

    var cartBtn = document.createElement('button');
    cartBtn.className = 'cart';
    cartBtn.textContent = 'Add to Cart';
    cartBtn.id = item.id;
    var br = document.createElement('br');

    var favBtn = document.createElement('button');
    favBtn.className = 'fav';
    favBtn.textContent = '🤍';

    td.appendChild(img);
    td.appendChild(nameP);
    td.appendChild(priceP);
    td.appendChild(cartBtn);
    td.appendChild(br);
    td.appendChild(favBtn);
    tr.appendChild(td);
  }
}
createTable(products);

var input = document.getElementById('search');
input.addEventListener("keyup", function () {
  var test = input.value.toLowerCase();
  var result = products.filter(function (pro) {
    return pro.name.toLowerCase().includes(test);
  });

  images.innerHTML = '';
  createTable(result);
});

var addBtn = document.querySelectorAll('.cart');

addBtn.forEach(btn => {
  btn.addEventListener("click", function () {

    var productId = Number(btn.id);
    var product = products.find(pro => pro.id === productId);

    let cart = JSON.parse(localStorage.getItem("Cart Products")) || [];
    let exists = cart.some(item => item.id === product.id);

    if (exists) {
      alert(product.name + " is already in your cart!");
      return;
    }
    cart.push(product);

    localStorage.setItem("Cart Products", JSON.stringify(cart));

    alert(product.name + ' added to cart');
  });
});

var favBtn = document.querySelectorAll('.fav');

favBtn.forEach(btn => {
  btn.addEventListener("click", function () {

    var productId = Number(btn.previousElementSibling.previousElementSibling.id);
    var product = products.find(pro => pro.id === productId);

    let favorites = JSON.parse(localStorage.getItem("Favorite Products")) || [];
    let exists = favorites.some(item => item.id === product.id);

    if (exists) {
      alert(product.name + " is already in your favorites!");
      return;
    }
    favorites.push(product);

    localStorage.setItem("Favorite Products", JSON.stringify(favorites));

    alert(product.name + ' added to favorites');
  });
});