let cart = localStorage.getItem("cart") || "[]"
cart = JSON.parse(cart)

//add to cart
function addToCart(product) {
    cart = [...cart, product]
    localStorage.setItem("cart", JSON.stringify(cart))
    let carthtml = localStorage.getItem("cart")||"[]"
    carthtml = JSON.parse(carthtml)
    carthtml = carthtml.map((item)=>JSON.parse(item))
    let cartCount = carthtml.length
    const cartCountContainer = $("#cart-count")
    cartCountContainer.html(cartCount)
}


function makeProductColumn(_product = {}){
    return ` <div class="col-md-4 col-sm-6 pd display">
    <div class="shadow-lg" style="width: 25rem;overflow:hidden">
<div class="zoom">
<a href=""><img src="${defaultImageUrl}${_product.image}" class="card-img-top w-100" style="height:20rem" alt="..."></a>
</div>
<div class="card-body container-fluid">
<h5 class="card-title">${_product.name}</h5>
<p class="card-text" style="font-size:1.1rem;color:#074842;">${_product.price}</p>
<button class='butt btn-cart' data-product='${JSON.stringify(_product)}'>add to cart</button>
</div>
</div>
</div>`
}

function makeProductGrid(_title, _products=[], _color){
    let gridHtml = `
      <div class="container mt-5">
      <div><h2 style="background-color:${_color}; padding:3%; color:black;" class="text-center">${_title}</h2></div>
      <div class="row">`

      const _columns = _products.map((item, index)=>{
        return makeProductColumn(item)
      })

      gridHtml +=  _columns.join('')

      gridHtml += ` </div>
      </div>` 

      return gridHtml


}
function makeCartColumn(_cartdata= {}){
  return` <div class="col-md-6 col-sm-6 pd">
  <div class="cart-cards">
    <div class="left"><a href=""><img src="${defaultImageUrl}${_cartdata.image}" class="card-img-top" style="height:10rem" alt="..."></a></div>
    <div class="right"><h5>${_cartdata.name}</h5>
    <p class="card-text">${_cartdata.price}</p>
    <button class="cart-remove"  data-index='${_cartdata.name}' data-id='${_cartdata.id}' >Delete</button></div>
  </div>
</div>`
}

function makeCartGrid(_cartTitle ,_cartproducts =[], _cartColor){
  let cartGridHtml = ` <div class="container mt-5">
  <div><h2 style="background-color:${_cartColor};padding:3%; color:#fcb416;" class="text-center">${_cartTitle}</h2></div>
  <div class="row">`
  const _cartColumns = _cartproducts.map((item, index)=>{
    return makeCartColumn(item,index)
  })
  cartGridHtml +=  _cartColumns.join('')

  cartGridHtml += ` </div>
  </div>` 

  return cartGridHtml
}

$(document).on("click", '.btn-cart', function() {
  const currentButton = $(this)
  const product = currentButton.attr("data-product")
  addToCart(product)
})



