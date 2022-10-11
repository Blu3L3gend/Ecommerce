function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}

fetch("./products.json").then((r) =>
  r.json().then((r) => {
    console.log(r.products);
    const products = r.products;
    let productContainer = document.querySelector(".product-container");
    products.forEach((element) => {
      console.log(element);
      productContainer.innerHTML += `<div class="Grid"/><img class="product-img"src="${element.image}"/><p class="product"> ${element.item}</p><p class="description"> ${element.description}</p> <p class="price">${element.price}</p></div> `;
    });
  })
);
