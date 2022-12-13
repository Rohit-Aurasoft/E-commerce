///////////////////////// ALL Products //////////////////////////
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
                     <button type="button" class="btn-cart add-cart" >Add To Cart</button>
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
    additemtoUI();
    const removecartbtn = document.querySelectorAll(".cart-remove")
    console.log("removecartbtn", removecartbtn)
    removecartbtn.forEach((btn, i) => {
        console.log("btn", btn)
        btn.addEventListener('click', () => {
            remove(i)
        })
    })
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

    let itemToInsert = products.find(item => item.dataid === i + 1);
    let a = [];
    a = JSON.parse(localStorage.getItem('cartItems')) || [];
    let duplicate = a.find(item => item.dataid === i + 1);

    if (duplicate === undefined) {
        a.push(itemToInsert);
        localStorage.setItem('cartItems', JSON.stringify(a));
        counter()
    } else {
        alert("your Item aready exist, If you want to increase than go to cart");  // Should be something like [Object array]
    }

}
counter()

function additemtoUI() {
    let itemdata = document.querySelector(".cart-content")
    itemdata.innerHTML = ""

    let cartitem = JSON.parse(localStorage.getItem('cartItems'));

    cartitem.map(item => {
        itemdata.innerHTML += `
                <div class="cart-box" dataid="${item.dataid}">
                    <img src=${item.image} alt="" class="cart-img"/>
                     <h2 class="cart-product-title">${item.Pro_name}</h2>
                     <i class='bx bxs-message-alt-x cart-remove' ></i>
                     <span class="cart-price">$${item.price}</span>
                     <div id="cart-quantity">
                     <button class="value-button increase-btn" id="decrease" onclick="decreaseValue()" value="Increase Value">-</button>
                     <input type="number" id="number" value="0" />
                     <button class="value-button decrease-btn" id="increase" onclick="increaseValue()" value="Increase Value">+</button>
                     </div>
                 </div>`;
    })
}

//////////removeitem//////////////////////////
function remove(i) {
    const items = JSON.parse(localStorage.getItem('cartItems'));

    items.splice(i, 1)


    localStorage.setItem("cartItems", JSON.stringify(items))
    location.reload();
    additemtoUI();
}

function counter() {
    let n = JSON.parse(localStorage.getItem('cartItems'))

    document.getElementById('counter').innerHTML = n.length;
}




// @uraSoft@103