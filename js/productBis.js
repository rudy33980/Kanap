const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get('id');
console.log(id);
let imgUrl, altText, detailName;

fetch(`http://localhost:3000/api/products/${id}`)
  .then((response) => response.json())
  .then((res) => handleData(res));
// console.log(handleData(res));

// {canape: {…}}
// canape:
// altTxt: "Photo d'un canapé bleu, deux places"
// colors: (3) ['Blue', 'White', 'Black']
// description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
// imageUrl: "http://localhost:3000/images/kanap01.jpeg"
// name: "Kanap Sinopé"
// price: 1849
// _id: "107fb5b75607497b96722bda5b504926"

function handleData(canape) {
  console.log({ canape });
  const altTxt = canape.altTxt;
  altText = altTxt;
  const imageUrl = canape.imageUrl;
  imgUrl = imageUrl;
  const colors = canape.colors;
  const description = canape.description;
  const name = canape.name;
  detailName = name;
  const price = canape.price;
  const _id = canape._id;
  makeImage(imgUrl, altText);
  makeTitle(name);
  makePrice(price);
  makeDescription(description);
  makeColors(colors);
}

function makeImage(imgUrl, altTxt) {
  const image = document.createElement('img');
  image.src = imgUrl;
  image.alt = altTxt;
  const parent = document.querySelector('.item__img');
  parent.appendChild(image);
}

function makeTitle(name) {
  const h1 = document.getElementById('title');
  h1.textContent = name;
}

function makePrice(price) {
  const span = document.getElementById('price');
  span.textContent = price;
}

function makeDescription(description) {
  const descrip = document.getElementById('description');
  descrip.textContent = description;
}

function makeColors(colors) {
  const select = document.getElementById('colors');
  console.log(select);
  colors.forEach((color) => {
    console.log(color);
    const option = document.createElement('option');
    option.value = color;
    option.textContent = color;
    select.appendChild(option);
  });
}

const button = document.querySelector('#addToCart');
button.addEventListener('click', handleClick);

function handleClick() {
  const color = document.getElementById('colors').value;
  const quantity = document.getElementById('quantity').value;
  if (color == null || color === '' || quantity == null || quantity == 0) {
    alert('Veuillez sélectionné une quantité et une couleur ');
    return true;
  }

  const product = {
    id: id,
    color: color,
    quantity: Number(quantity),
    name: detailName,
    imageUrl: imgUrl,
    altTxt: altText,
  };

  // Lors du clic , On passe l'objet dans le localStorage
  localStorage.setItem(product.id, JSON.stringify(product));

  window.location.href = 'cart.html';
}
