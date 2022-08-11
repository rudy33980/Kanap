const cart = [];
retrieveItemsFromCache();

for (itemObject of cart) {
  // console.log(product);
  fetch(`http://localhost:3000/api/products/${itemObject.id}`)
    .then((response) => response.json())
    .then((data) => {
      // console.log(data);
      displayItem(itemObject, data);
    });

  // .catch(function (error) {
  //   alert(error);
  // });
}

function retrieveItemsFromCache() {
  const products = localStorage.length;
  for (let i = 0; i < products; i++) {
    const item = localStorage.getItem(localStorage.key(i)) || [];
    const itemObject = JSON.parse(item);
    console.log(itemObject);
    cart.push(itemObject);
    console.log(cart);
  }
}

function displayItem(itemObject, data) {
  displayTotalPrice(data);
  displayTotalQuantite(itemObject);
  somme(data);
  updatePriceQuantity(itemObject.id);

  const section = document.getElementById('cart__items');
  section.innerHTML += `<article class="cart__item" data-id="${itemObject.id}" data-color="${itemObject.color}">
  <div class="cart__item__img">
    <img src="${data.imageUrl}" alt="Photographie d'un canapé">
    </div>
    <div class="cart__item__content">
    <div class="cart__item__content__description">
      <h2>${data.name}</h2>
      <p>${data.color}</p>
      <p>${data.price} €</p>
      </div>
      <div class="cart__item__content__settings">
      <div class="cart__item__content__settings__quantity">
      <p>Qté : </p>
      <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="${itemObject.quantity}">
      </div>
      <div class="cart__item__content__settings__delete">
      <p class="deleteItem">Supprimer</p>
      </div>
      </div>
      </div>
      </article>`;
}

function displayTotalQuantite() {
  const totalQuantity = document.querySelector('#totalQuantity');
  const initialValue = 0;
  const total = cart.reduce(
    (total, item) => total + item.quantity,
    initialValue
  );
  totalQuantity.textContent = total;
}

function displayTotalPrice(data) {
  const totalPrice = document.querySelector('#totalPrice');
  const initialValue = 0;
  const total = cart.reduce(
    (total, item) => total + data.price * item.quantity,
    initialValue
  );
  totalPrice.textContent = total;
}

function somme(data) {
  for (let i = 0; i < data.length; i++) {
    const somme = data.price + data.price;
    console.log(somme);
  }
}

function updatePriceQuantity(id, data) {
  let input = document.querySelector('input').value;
  console.log(input);
  input = document.addEventListener('change', (e) => {
    const itemToUpdate = cart.find((itemObject) => itemObject.id === id);
    console.log('itemToUpdate', itemToUpdate);
    console.log(e.target.value);
    displayTotalQuantite();
    // displayTotalPrice(data);
  });
}
//   document.body.addEventListener('change', (e) => {
//     console.log(e.target.value);
//   });
// }
