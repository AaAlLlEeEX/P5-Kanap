document.title = "Page Panier";


let productRegisterInLocalStorage = JSON.parse(localStorage.getItem("produit"));

const productsPositionHtml = document.getElementById("cart__items");


let compositionProduitsPanier = [];

let totalPrice = 0;  
let totalQuantity = 0;
let quantityProductPanier = 0;
let priceProductPanier = 0;
let totalProductPricePanier = 0;
let mesProduits = [];
const findProducts = 0;


let idDelete = 0;
let colorDelete = 0;


const boutonCommander = document.getElementById("order");
let errorFormulaireFirstName = true;
let errorFormulaireLastName = true;
let errorFormulaireAddress = true;
let errorFormulaireCity = true;
let errorFormulaireEmail = true;