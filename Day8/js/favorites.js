var favorites = JSON.parse(localStorage.getItem('Favorite Products'));

var favoritesTable = document.getElementById('Favorites');

var itemsPerRow = 4;
var tr;
function createTable(products) {
  for (var i = 0; i < products.length; i++) {
    var item = products[i];

    if (i % itemsPerRow === 0) {
      tr = document.createElement('tr');
      favoritesTable.appendChild(tr);
    }

    var td = document.createElement('td');

    var img = document.createElement('img');
    img.src = item.image;

    var nameP = document.createElement('p');
    nameP.textContent = item.name;

    var priceP = document.createElement('span');
    priceP.textContent = '$' + item.price;

    var removeBtn = document.createElement('button');
    removeBtn.className = 'fav';
    removeBtn.innerText = 'Remove';
    var br = document.createElement('br');

    td.appendChild(img);
    td.appendChild(nameP);
    td.appendChild(priceP);
    td.appendChild(br);
    td.appendChild(removeBtn);
    tr.appendChild(td);

    removeBtn.addEventListener("click", (function (currentItem, currentTd) {
      return function () {
        favorites = favorites.filter(product => product.name !== currentItem.name);

        localStorage.setItem('Favorite Products', JSON.stringify(favorites));
        currentTd.remove();
      }
    })(item, td));
  }
}

createTable(favorites);

if(favorites.length == 0){
  document.write('      No Favorites!!');
}
