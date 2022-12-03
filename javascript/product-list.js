const productsList = document.getElementById("products")

productData.map((data)=>{
    content = 
    `
    <div class="card" style="width:324px">
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
    productsList.innerHTML += content
})


