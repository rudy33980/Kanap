const article = document.getElementById('items');
const itemsTotal = document.createElement('div');

fetch('http://localhost:3000/api/products')
  .then((response) => response.json())
  .then((data) => {return canapeDisplay(data),addProducts(data);
  })
  //Fonction pour l'affichage de mes éléments de l'objet API
  .catch(function (error) {
    alert(error);
  });

function canapeDisplay(data) {
  for (i = 0; i < data.length; i++) {
    article.innerHTML += `<a href="./product.html?id=${data[i]._id} ">
                <article>
                  <img src='${data[i].imageUrl}' alt='${data[i].altTxt}'>
                  <h3 class="productName">${data[i].name}</h3>
                  <p class="productDescription">${data[i].description}</p>
                </article>
              </a>`;
  }
}


function addProducts(data) {
  data.forEach((canard) => {
    console.log("canard", canard);
  })
}
// addProducts();

