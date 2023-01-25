const sectionItems = document.querySelector('#items');

fetch("http://localhost:3000/api/products")
  .then(response => response.json())
  .then(data => {
    for (const listProducts of data){
      console.log(listProducts);
      
      const article = document.createElement('a');
      article.setAttribute("href", `./product.html?id=${listProducts._id}`);
      sectionItems.appendChild(article);

      const newArticle = document.createElement('article');
      article.appendChild(newArticle);

      const newImg = document.createElement('img');
      newImg.setAttribute("src", listProducts.imageUrl);
      newImg.setAttribute("alt", listProducts.altTxt);
      newArticle.appendChild(newImg);

      const titre = document.createElement('h3');
      titre.setAttribute("class","productName");
      titre.innerText = listProducts.name;
      newArticle.appendChild(titre);
      
      const text = document.createElement('p');
      text.setAttribute("class","productDescription");
      text.innerText = listProducts.description;
      newArticle.appendChild(text);
    }
   })

   const 