// ---------------------------------------- Affichage de l'Id du produit ----------------------------------------------------------

const imageProduit = document.querySelector('.item__img');
const name = document.getElementById('title');
const price = document.getElementById('price');
const description = document.getElementById('description');
let itemPrice = price;
let resultatAPI = [];

const params = new URLSearchParams(window.location.search);
console.log(params);
const idProduit = params.get('id');
console.log(idProduit);

/*Fonction permettant de lire la promesse et de mettre les infos en valeur dynamique sur la page*/

const fetchProduit = async () => {
  await fetch(`http://localhost:3000/api/products/${idProduit}`)
    .then((response) => response.json())
    .then((promesse) => {
      resultatAPI = promesse;
      console.log(resultatAPI);
      imageProduit.innerHTML += `<img src=${promesse.imageUrl} alt='Photographie d un canapé' width='100%' height='400px'>`;
      name.innerHTML += `<p> ${promesse.name}</p>`;
      price.innerHTML += `${promesse.price}`;
      description.innerHTML += `${promesse.description}`;

      resultatAPI.colors.forEach((couleur) => {
        let productColor = document.createElement('option');
        document.querySelector('#colors').append(productColor);

        productColor.value = couleur;
        productColor.innerHTML = couleur;
      });
    });
};
fetchProduit();

// -----------------------------------------------------------------

// Sélection par leur Id pour la quantité , la couleur, le bouton Ajouter au panier
let quantity = document.getElementById('quantity');
let colorChoose = document.querySelector('#colors');
const boutonAddArticles = document.getElementById('addToCart');

// -----------------------------------------------------------------

//Ecoute du click sur le bouton ajouter au panier
boutonAddArticles.addEventListener('click', (event) => {
  const params = new URLSearchParams(window.location.search);
  const idProduit = params.get('id');
  boutonAddArticles.style.color = 'blue';
  boutonAddArticles.style.background = 'violet';
  boutonAddArticles.classList.add('textChange');
  const textChang = document.querySelector('.textChange');
  console.log(textChang);
  boutonAddArticles.innerText = '';
  textChang.style.overflow = 'visible';
  boutonAddArticles.style.fontWeight = 'bold';


  if (quantity.value > 0 && colorChoose.value !== null) {
  boutonAddArticles.innerHTML = 'Produit Ajouté Au Panier';
}  else
{
    boutonAddArticles.innerHTML = 'Aucun Produit';

  }


  fetch(`http://localhost:3000/api/products/${idProduit}`)
    .then((response) => response.json())
    .then((canapeSelect) => {
      if (
        quantity.value > 0 &&
        quantity.value <= 100 &&
        colorChoose.value !== ''
      ) {
        // Actions a mener si l'utilisateur a bien saisie une quantité et une couleur :
        // On creé un objet "article" à stocker
        let article = {
          id: idProduit,
          color: colorChoose.value,
          quantity: parseInt(quantity.value),
        };

        articleSelect(article);
      }
    });
});

//Selection des articles mis dans le panier
const articleSelect = (article) => {
  let produitTableau = JSON.parse(localStorage.getItem('idProduit')) || [];
  console.log(produitTableau);
  if (produitTableau != null) {
    for (i = 0; i < produitTableau.length; i++) {
      if (
        produitTableau[i]._id == article._id &&
        produitTableau[i].color == colorChoose.value
      ) {
        //   Incrémenté l'ajout des quantités
        return (
          (produitTableau[i].quantity =
            produitTableau[i].quantity + parseInt(quantity.value)),
          localStorage.setItem('idProduit', JSON.stringify(produitTableau)),
          (produitTableau = JSON.parse(localStorage.getItem('idProduit')))
        );
      }
    }
    produitTableau.push(article);
    localStorage.setItem('idProduit', JSON.stringify(produitTableau));
    console.log(produitTableau);


  }
};
