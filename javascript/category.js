var url = window.location.href;
var params = url.split("?")[1];
var param = params.split("&");

const categoryList = document.getElementById("category")

productData
    .filter((x) => x.category == param[0].split("=")[1])
    .map((data) => {
        content = 
    `
    <div class="card ">
    <a href="product.html?id=${data.id}"><img class="card-img-top" src="${data.image}"></a>
    <div class="card-body">
      <h4 class="card-title cardlink"><a href="product.html?id=${data.id}">${data.name}</a></h4>
      <h5 class="card-brand"><img src="${data.brandimg}"></img></h5>
      <h6 class="card-text">Fiyat: ${data.price}₺</h6>
      <p class="card-text">${data.description}</p>
      <a href="#" class="btn btn-warning">Sepete Ekle</a>
    </div>
  </div>
    `
    categoryList.innerHTML += content
    })
    