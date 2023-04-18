document.title = "Page Panier";

const productRegisterInlocalStorage = JSON.parse(localStorage.getItem("produit"));

async function fecthapi() {
let cartfull = [];

let productsPositionHtml = document.getElementById("produit");
if (productsPositionHtml !== null) {
for (let i = 0; i < productsPositionHtml.clientHeight; i++) {
    await fetch("http://localhost:3000/api/products/" + productsPositionHtml[i].idProduct)
        .then((res) => res.json())
        .then((canap) => {
            const article = {
                _id: canap._id,
				name: canap.name,
				price: canap.price,
				color: productsPositionHtml[i].colorSelectedProduct,
				quantity: productsPositionHtml[i].quantity,
				alt: canap.altTxt,
				img: canap.imageUrl,
            };
            cartfull.push(article)
        })
        .catch(function (err) {
            console.log(err)
        });
}
}
return cartfull;
};


async function showcart() {
  console.log("showcart");
    const reponseFecth = await fecthapi();
    const productRegisterInlocalStorage = JSON.parse(localStorage.getItem("produit"));
    if (productRegisterInlocalStorage !== null && productRegisterInlocalStorage.length !== 0) {
        const zonePanier = document.querySelector("cart__items");
        reponseFecth.forEach((_productRegisterInlocalStorage) => {
            zonePanier.innerHTML += `<article class="cart__item" data-id="${product._id}" data-color="${product.color}">
            <div class="cart__item__img">
              <img src= "${product.img}" alt="Photographie d'un canapé">
            </div>
            <div class="cart__item__content">
              <div class="cart__item__content__description">
                <h2>${product.name}</h2>
                <p>${product.color}</p>
                <p>${product.price} €</p>
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
          </article>`;
        });
    } else {
        return messagePanierVide();
    }

}
showcart();