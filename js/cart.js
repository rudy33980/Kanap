// Récupération de mon canapé via son id dans le FETCH
const cart = JSON.parse(localStorage.idProduit) || [];
let section = document.getElementById('cart__items');
console.log(cart);

for (product of cart) {
  fetch(`http://localhost:3000/api/products/${product.id}`)
    .then((response) => response.json())
    .then((canapeSelect) => {
      // console.log(product);
      // console.log(canapeSelect);
      // function panierDisplay () {
      section.innerHTML += `
    <article class="cart__item" data-id="${product.id}" data-color="${product.color}">
    <div class="cart__item__img">
      <img src='${canapeSelect.imageUrl}' alt="Photographie d'un canapé">
    </div>
    <div class="cart__item__content">
      <div class="cart__item__content__descriptio
      n">
        <h2>${canapeSelect.name}</h2>
        <p>${canapeSelect.price}</p> 
        <p>${canapeSelect.price}</p>
      </div>
      <div class="cart__item__content__settings">
        <div class="cart__item__content__settings__quantity">
        <p>Qté : </p>
          <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="${product.quantity}">
        </div>
        <div class="cart__item__content__settings__delete">
          <p class="deleteItem">Supprimer</p>
        </div>
      </div>
    </div>
  </article> 

    `;
  })
}


// function displayArticle() {
//   for 
// }