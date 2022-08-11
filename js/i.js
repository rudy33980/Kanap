// Modification quantité du panier 
function modificationQuantity() {
    const cartItem = document.querySelectorAll('.cart__item');
    console.log(cartItem);
    cartItem.forEach((item) => {
      console.log(cartItem);
      item.addEventListener('change', (e) => {
        let panier = JSON.parse(localStorage.getItem('idProduit'));
        console.log(panier);

        for (each of panier) console.log(each);
        if (
          each.id === item.dataset.id &&
          item.dataset.color === each.color
        ) {
          each.quantity = e.target.value;
          localStorage.idProduit = JSON.stringify(panier);
        }
      });
    });
  }
  modificationQuantity();

  // ----------------------------------- Fonction Supprimé Articles ---------



}


      // const inputs = document.querySelector('input');
      // const caseValue = `produit: ${product.quantity}`;
      // console.log(inputs);
      // document.body.addEventListener('change', () =>
      //   updatePriceAndQuantity(product.id, caseValue)
      // );
      // // updatePriceAndQuantity(product.id, caseValue);

      // function updatePriceAndQuantity(id, newValue) {
      //   // console.log(id);
      //   const itemToUpdate = cart.find((product) => product.id === id);
      //   console.log('id :', itemToUpdate.id);
      //   console.log('newValue :', newValue);

        //   }
        
        function deleteProduct() {
          // Déclaration des variables
          const cartDelete = document.querySelectorAll('.deleteItem');
          console.log(cartDelete);
          // pour chaque élément cartdelete
          cartDelete.forEach((product) => {
            // On écoute s'il y a un clic dans l'article concerné
            product.addEventListener('click', () => {
            // appel de la ressource du local storage
            let panier = JSON.parse(localStorage.getItem("idProduit"));
            console.log(panier);
              for (let i = 0 ; i < panier ; i++ ) 
                console.log('test');
                if (
                  panier[i]._id === item.dataset.id &&
                  panier[i].color === item.dataset.color
                ) {
                // déclaration de variable utile pour la suppression
                const index = [i] 
                // Création d'une variable pour récupérer le tableau du localstorage modifié
                let nouveauPanier = JSON.parse(localStorage.getItem("idProduit"));
                //suppression de 1 élément à l'indice num
                nouveauPanier.splice(index, 1);
                }
                else ("c'est pas bon ");
              })
            });
          }
        })
  // const array1 = [1, 2, 3, 4];

      // // 0 + 1 + 2 + 3 + 4
      // const initialValue = 0;
      // const sumWithInitial = array1.reduce(
      //   (previousValue, currentValue) => previousValue + currentValue,
      //   initialValue
      //   console.log(previousValue);
      // );
      
      // expected output: 10
// -----------------------------------------------------------------------------------------


      panierDisplay();
      //-------------------------------- Modification quantité et ajout dsans le local Storage ------------
      cart.forEach(function (product) {
        console.log(cart);
         const input = document.querySelectorAll('input');
        console.log(product);
        displayTotalQuantity();
        displayTotalPrice();
        document.body.addEventListener('change', (e) => {
          product.quantity = parseInt(e.target.value);
          console.log(`Quantité : ${product.quantity}`);
          (localStorage.idProduit = JSON.stringify(product)),
          console.log(JSON.parse(localStorage.idProduit));
          displayTotalQuantity();
          displayTotalPrice();
        })
      })
      
    
      //  addQuantity();
      
      // -------------------------------- Calcul du prix -------------------------------------
      
      function displayTotalQuantity() {
          const totalQuantity = document.querySelector('#totalQuantity');
          console.log(totalQuantity);
          const total = cart.reduce((total, item) => total + item.quantity,0);
          totalQuantity.textContent = total;
        }
        
        function displayTotalPrice() {
          console.log(canapeSelect);
          const totalPrice = document.querySelector('#totalPrice');
          console.log(totalPrice);
          const total = cart.reduce((total, item) => total + canapeSelect.price * item.quantity,0);
            totalPrice.textContent = total;
          }



          const removeProduct = async (panierDisplay) => {
            await panierDisplay;
            console.log("salut");
            const deleteItem = document.querySelector('.deleteItem');
            console.log(deleteItem);

            cart.forEach((prod) => {
              document.body.addEventListener("click", () => {
                console.log(prod);
                // let totalProduit = addProduit.length
                // console.log(totalProduit);
              });
            });
          }
          removeProduct();








          // function deleteProduct(product) {
          //   const deleteItem = document.querySelector('.deleteItem');
          //   console.log(deleteItem);
          //   deleteItem.addEventListener('click', () => {
          //     localStorage.removeItem(product);
          
          //   });
          
          // }

          // function deleteProduct() {
          //   const cartDelete = document.querySelectorAll('.deleteItem');
          //   // console.log(cartDelete);
            
          //   cartDelete.forEach((product) => {
          //     product.addEventListener('click', () => {
          //       // récupération du panier dans le local storage 
          //       let panier = JSON.parse(localStorage.getItem("idProduit"));
          //       console.log(panier);
          //       const itemToDelete = cart.find((product) => product.id && product.color )
          //       console.log("item to delete", itemToDelete);
          //       cart.splice(itemToDelete,1)
          //       console.log(cart);
                
                
                
          //     })
          //     deleteProduct();
          //   })
          // }

