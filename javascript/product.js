//how to get window params
var url = window.location.href;
var params = url.split("?")[1];
var param = params.split("&");
console.log(param);

const product = document.getElementById("product");

productData
  .filter((x) => x.id == param[0].split("=")[1])
  .map((data) => {
    document.title = data.name + " - Sunman Shop";

    content = `
    <div class="mt-4 p-5 product-card rounded">

        <div class="row">
          <div class="col-md-6">
            <img
              src="${data.image}"
              alt="Resim" style="width: 90%" class="rounded" />
          </div>
          <div class="col-md-6">
            <h1 class="product-title">${data.name}</h1>
            <img class="brandimg" src="${data.brandimg}">
            <p class="product-description mt-3">${data.description}</p>
            </p>
            
            <div class="product-price">
              <h5>Fiyat: ${data.price}₺</h5>
            </div>
            <div class="product-rating">
              <span class="heading">Kullanıcı Puanı:</span>
              <span id="user-rating"></span>
              <span> | ${data.numReviews} incelemeye göre ${data.rating} ortalama.</span>


            </div>
            <div>
              <button class="btn btn-warning my-3">Sepete Ekle</button>
            </div><p>
              <b>Kampanya Detayları</b><br>
              Bu üründen en fazla 1 adet sipariş verilebilir. 1 adedin üzerindeki siparişleri SUNMAN SHOP iptal etme
              hakkını saklı tutar.
              Kampanya fiyatından satılmak üzere 100 adetten fazla stok sunulmuştur.
            </p>
            <p>
              <b>GARANTİ KOŞULLARI</b><br>
              SUNMAN SHOP'da satışa sunulan tüm ürünler en az 2 yıl olmak üzere üretici ya da distribütör garantisi
              altındadır. Bu süre bazı markalar tarafından sunulan ek garantilerle uzatılabilir.
            </p>
          </div>

        </div>

      </div>
    `;
    product.innerHTML += content;

    const userRating = document.getElementById("user-rating");
    for (let index = 0; index < 5; index++) {
      if(index < data.rating){
        userRating.innerHTML += `<span class="fa fa-star checked"></span>`;
      }
      else{
        userRating.innerHTML += `<span class="fa fa-star"></span>`;
      }
      
    }
  });
