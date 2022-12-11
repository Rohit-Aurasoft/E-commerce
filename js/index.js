const products = [
    {
        dataid: 1,
        image: "./img/product2.webp",
        Pro_name: "product1",
        price: 25,
        quantity: 1,
        discription: " HP Victus Gaming Latest AMD Ryzen 5 5600H "
    },
    {
        dataid: 2,
        image: "./img/product3.webp",
        Pro_name: "product2",
        price: 30,
        discription: " HP Victus Gaming Latest AMD Ryzen 5 5600H "
    },
    {
        dataid: 3,
        image: "./img/product4.webp",
        Pro_name: "product3",
        price: 80,
        discription: " HP Victus Gaming Latest AMD Ryzen 5 5600H "
    },

]

const productlist = () => {
    let product = document.querySelector('.shop-content');
    products.map(item => {
        product.innerHTML += `
                <div class="product-box" dataid="${item.dataid}">
                    <img src=${item.image} alt="" class="product-img"/>
                     <h2 class="product-title">${item.Pro_name}</h2>
                     <p class="description">${item.discription}</p>
                     <span class="price">$${item.price}</span>
                     <button type="button" class="btn-cart add-cart">Add To Cart</button>
                 </div>
                        `;
    })

}

productlist();

///////////////////////////// C A R T ///////////////////////////
let cartIcon = document.querySelector("#cart-icon")
let cart = document.querySelector(".cart")
let closeCart = document.querySelector("#close-cart")
////////////////////////////////// O P E N-C A R T ////////////////////////
cartIcon.onclick = () => {
    cart.classList.add("active")
}

//////////////////////////////////// C L O S E-C A R T /////////////////////////////
closeCart.onclick = () => {
    cart.classList.remove("active")
}
//////////////////////////////////// ADD TO CART ///////////////////////////////////////

const addcartbtn = document.querySelectorAll(".add-cart")
console.log("addcartbtn", addcartbtn)
addcartbtn.forEach((btn, i) => {
    console.log("btn", btn)
    btn.addEventListener('click', () => {
        addcart(i)
    })
})
function addcart(i) {

    ///////to insert item by there id///////////
    let itemToInsert = products.find(item => item.dataid === i + 1);
    console.log("itemToInsert", itemToInsert);
    ///////////////it push the item in empty array///////////////////
    let a = [];
    // Parse the serialized data back into an aray of objects
    a = JSON.parse(localStorage.getItem('cartItems')) || [];
    console.log("a", a)
    //
    let duplicate = a.find(item => item.dataid === i+1);
    console.log("duplicate", duplicate);
    if (duplicate === undefined) {
        a.push(itemToInsert);
    }
    // Push the new data (whether it be an object or anything else) onto the array
    // a.push(itemToInsert);
    // Alert the array value
    alert("your Item aready exist, If you want to increase than go to cart");  // Should be something like [Object array]
    // Re-serialize the array back into a string and store it in localStorage
    localStorage.setItem('cartItems', JSON.stringify(a));
    


    additemincart();
}


function additemincart() {
    let cartitem = JSON.parse(localStorage.getItem('cartItems'));
    console.log('cartitem', cartitem)
    let itemdata = document.querySelector(".cart-content")
    console.log("product", itemdata)
    cartitem.map(item => {
        itemdata.innerHTML += `
                <div class="cart-box" dataid="${item.dataid}">
                    <img src=${item.image} alt="" class="cart-img"/>
                     <h2 class="cart-product-title">${item.Pro_name}</h2>
                     <i class='bx bxs-message-alt-x cart-remove'></i>
                     <span class="cart-price">$${item.price}</span>
                     <div id="cart-quantity"><button class="value-button increase-btn" id="decrease" onclick="decreaseValue()" value="Increase Value">-</button><input type="number" id="number" value="0" /><button class="value-button decrease-btn" id="increase" onclick="increaseValue()" value="Increase Value">+</button></div>
                 </div>
                
                        `;
    })

}
additemincart();
