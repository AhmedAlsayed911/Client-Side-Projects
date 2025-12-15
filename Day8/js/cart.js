var cart = JSON.parse(localStorage.getItem('Cart Products'));

var carts = document.getElementById('Carts');

var itemsPerRow = 4;
var tr;
function createTable(products) {
  for (var i = 0; i < products.length; i++) {
    var item = products[i];

    if (i % itemsPerRow === 0) {
      tr = document.createElement('tr');
      carts.appendChild(tr);
    }

    var td = document.createElement('td');

    var img = document.createElement('img');
    img.src = item.image;

    var nameP = document.createElement('p');
    nameP.textContent = item.name;

    var priceP = document.createElement('span');
    priceP.textContent = '$' + item.price + ' x';

    var minusBtn = document.createElement('button');
    minusBtn.className = 'minusBtn';
    minusBtn.textContent = '➖';

    var quantity = document.createElement('span');
    quantity.className = 'quantity';
    quantity.innerText = item.quantity;

    var plusBtn = document.createElement('button');
    plusBtn.className = 'plusBtn';
    plusBtn.textContent = '➕';

    var subTotal = document.createElement('p');
    subTotal.className = 'sub';
    subTotal.textContent = 'Subtotal : ' + '$' + (Number(item.price) * Number(quantity.innerText));

    var removeBtn = document.createElement('button');
    removeBtn.className = 'fav';
    removeBtn.innerText = 'Remove';
    var br = document.createElement('br');

    td.appendChild(img);
    td.appendChild(nameP);
    td.appendChild(priceP);
    td.appendChild(minusBtn);
    td.appendChild(quantity);
    td.appendChild(plusBtn);
    td.appendChild(br);
    td.appendChild(subTotal);
    td.appendChild(removeBtn);
    tr.appendChild(td);

    plusBtn.addEventListener("click", (function (currentQuantity, currentSubTotal, currentItem) {
      return function () {
        currentQuantity.innerText = Number(currentQuantity.innerText) + 1;
        currentSubTotal.textContent = 'Subtotal : ' + '$' + (Number(currentItem.price) * Number(currentQuantity.innerText));
        
        currentItem.quantity = Number(currentQuantity.innerText);
        localStorage.setItem('Cart Products', JSON.stringify(cart));
        updateTotal();
      }
    })(quantity, subTotal, item));
    minusBtn.addEventListener("click", (function (currentQuantity, currentSubTotal, currentItem) {
      return function () {
        currentQuantity.innerText > 1 ? currentQuantity.innerText = Number(currentQuantity.innerText) - 1 : currentQuantity.innerText;
        currentSubTotal.textContent = 'Subtotal : ' + '$' + (Number(currentItem.price) * Number(currentQuantity.innerText));
        
        currentItem.quantity = Number(currentQuantity.innerText);
        localStorage.setItem('Cart Products', JSON.stringify(cart));
        updateTotal();
      }
    })(quantity, subTotal, item));

    removeBtn.addEventListener("click", (function (currentItem, currentTd) {
      return function () {
        cart = cart.filter(product => product.name !== currentItem.name);

        localStorage.setItem('Cart Products', JSON.stringify(cart));
        currentTd.remove();
        updateTotal();
      }
    })(item, td));
  }
}

function updateTotal() {
  var total = 0;
  if (cart) {
    for (var i = 0; i < cart.length; i++) {
      total += Number(cart[i].price) * Number(cart[i].quantity);
    }
  }
  totalPrice.textContent = 'Total Price : $' + total;
}

createTable(cart);

var totalPrice = document.createElement('p');
totalPrice.className = 'tp';
var total = 0;
if (cart) {
  for (var i = 0; i < cart.length; i++) {
    total += Number(cart[i].price) * Number(cart[i].quantity);
  }
}
cart.length  > 0 ? totalPrice.textContent = 'Total Price : $' + total : totalPrice.textContent = "Cart is EMPTY !!";
carts.insertAdjacentElement('afterend', totalPrice);

