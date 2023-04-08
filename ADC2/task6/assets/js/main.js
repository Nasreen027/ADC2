const rootContainer = $("#root")
const defaultImageUrl = ("./assets/images/")
// const offersContainer = $("#offers-container")
const cakesContainer = $("#cakes-container")
const cartContainer = $("#cart-container")
const cartCountContainer = $("#cart-count")
const cartMainButton = $("#cart-main-button")


const productCategories = {
    // OFFERS:"offers",
    CAKES:"cakes"
}

const products = $.getJSON("./data/products.json", function(data){

    // const offers = data.filter((item)=> item.category === productCategories.OFFERS )
    const cakes = data.filter((item) => item.category === productCategories.CAKES)
    let carthtml = localStorage.getItem("cart")||"[]"
    carthtml = JSON.parse(carthtml)
    carthtml = carthtml.map((item)=>JSON.parse(item))
    let cartCount = carthtml.length
    // console.log(carthtml)

    

    // offersContainer.html(makeProductGrid("Offers", offers, "#fcb416"))
    cakesContainer.html(makeProductGrid("Cakes",cakes, " #A47A49"))
    cartContainer.html(makeCartGrid("Cart", carthtml, "#074842"))
    cartCountContainer.html(cartCount)

})
/// cart///
$(document).on("click", "#cart-main-button", function(){
    $("#cart-container").fadeIn();
    $("#root").toggle();
})