const products = [
    {
      dataid: 1,
      image: "./img/product.jpg",
      Pro_name: "product1",
      price: 25,
      quantity: 1,
      discription: " HP Victus Gaming Latest AMD Ryzen 5 5600H Processor 16.1 inch(40.9 cm) FHD Gaming Laptop (8GB RAM/512GB SSD/4GB Radeon RX5500M Graphics/B&O/Backlit KB/Win 10/MS Office/Xbox Game Pass),16-E0162ax"
    },
    {
      dataid: 2,
      image: "./img/product2.webp",
      Pro_name: "product2",
      price: 30,
      discription: " HP Victus Gaming Latest AMD Ryzen 5 5600H Processor 16.1 inch(40.9 cm) FHD Gaming Laptop (8GB RAM/512GB SSD/4GB Radeon RX5500M Graphics/B&O/Backlit KB/Win 10/MS Office/Xbox Game Pass),16-E0162ax"
    },
    {
      dataid: 3,
      image: "./img/product3.webp",
      Pro_name: "product3",
      price: 80,
      discription: " HP Victus Gaming Latest AMD Ryzen 5 5600H Processor 16.1 inch(40.9 cm) FHD Gaming Laptop (8GB RAM/512GB SSD/4GB Radeon RX5500M Graphics/B&O/Backlit KB/Win 10/MS Office/Xbox Game Pass),16-E0162ax"
    },
    {
      dataid: 4,
      image: "./img/product4.webp",
      Pro_name: "product4",
      price: 20,
      discription: " HP Victus Gaming Latest AMD Ryzen 5 5600H Processor 16.1 inch(40.9 cm) FHD Gaming Laptop (8GB RAM/512GB SSD/4GB Radeon RX5500M Graphics/B&O/Backlit KB/Win 10/MS Office/Xbox Game Pass),16-E0162ax"
    },
    {
      dataid: 5,
      image: "./img/product.jpg",
      Pro_name: "product5",
      price: 2,
      discription: " HP Victus Gaming Latest AMD Ryzen 5 5600H Processor 16.1 inch(40.9 cm) FHD Gaming Laptop (8GB RAM/512GB SSD/4GB Radeon RX5500M Graphics/B&O/Backlit KB/Win 10/MS Office/Xbox Game Pass),16-E0162ax"
    },
    {
      dataid: 6,
      image: "./img/product2.webp",
      Pro_name: "product6",
      price: 35,
      discription: " HP Victus Gaming Latest AMD Ryzen 5 5600H Processor 16.1 inch(40.9 cm) FHD Gaming Laptop (8GB RAM/512GB SSD/4GB Radeon RX5500M Graphics/B&O/Backlit KB/Win 10/MS Office/Xbox Game Pass),16-E0162ax"
    },
    {
      dataid: 7,
      image: "./img/product3.webp",
      Pro_name: "product7",
      price: 70,
      discription: " HP Victus Gaming Latest AMD Ryzen 5 5600H Processor 16.1 inch(40.9 cm) FHD Gaming Laptop (8GB RAM/512GB SSD/4GB Radeon RX5500M Graphics/B&O/Backlit KB/Win 10/MS Office/Xbox Game Pass),16-E0162ax"
    },
    {
      dataid: 8,
      image: "./img/product4.webp",
      Pro_name: "product8",
      price: 40,
      discription: " HP Victus Gaming Latest AMD Ryzen 5 5600H Processor 16.1 inch(40.9 cm) FHD Gaming Laptop (8GB RAM/512GB SSD/4GB Radeon RX5500M Graphics/B&O/Backlit KB/Win 10/MS Office/Xbox Game Pass),16-E0162ax"
    },
    {
      dataid: 9,
      image: "./img/product4.webp",
      Pro_name: "product8",
      price: 40,
      discription: " HP Victus Gaming Latest AMD Ryzen 5 5600H Processor 16.1 inch(40.9 cm) FHD Gaming Laptop (8GB RAM/512GB SSD/4GB Radeon RX5500M Graphics/B&O/Backlit KB/Win 10/MS Office/Xbox Game Pass),16-E0162ax"
    },
  ]
  
  function onload(data) {
    const checkdata = localStorage.getItem("productdata")
    console.log("localstoragedata", checkdata)
    if (checkdata !== null) {
      console.log("if part ")
      localStorage.removeItem("productdata")
      localStorage.setItem("productdata", JSON.stringify(data))
    }
    else {
      console.log("else part")
      localStorage.setItem("productdata", JSON.stringify(data))
    }
  }
  onload(products)

function getItem(){
  const retrieverObject = localStorage.getItem('productdata') || '';
const retrieveObject = retrieverObject ? JSON.parse(retrieverObject) : [];
console.log(retrieveObject)
let presentItem = retrieveObject.filter(item => item.dataid === 1);
console.log("presentItem",presentItem)
if (presentItem) {
console.log('id already exists in localstorage')
} else {
console.log('id not in localstorage')
}
}
getItem();  

const createNav = () => {
          let nav = document.querySelector('.card-wrapper');
          products.map(item => {
              nav.innerHTML += `
              <div dataid="9" class="card-item">
      <img src= ${item.image} />
      <div class="details">
        <h3>${item.Pro_name}</h3>
        <p>
    

          <span class="price">$${item.price}</span>
          <span class="add-to-cart-btn">Add To Cart</span>
        </p>
      </div>
    </div>
                              `;
          })

      }

      createNav();





class CartItem {
    constructor(name, desc, img, price) {
        this.name = name
        this.desc = desc
        this.img = img
        this.price = price
        this.quantity = 1
    }
}

class LocalCart {
    static key = "cartItems"

    static getLocalCartItems() {
        let cartMap = new Map()
        const cart = localStorage.getItem(LocalCart.key)
        if (cart === null || cart.length === 0) return cartMap
        return new Map(Object.entries(JSON.parse(cart)))
    }

    static addItemToLocalCart(id, item) {
        let cart = LocalCart.getLocalCartItems()
        console.log("cart", cart)
        if (cart.has(id)) {
            let mapItem = cart.get(id)
            mapItem.quantity += 1
            cart.set(id, mapItem)
        }
        else
            cart.set(id, item)
        localStorage.setItem(LocalCart.key, JSON.stringify(Object.fromEntries(cart)))
        updateCartUI()

    }

    static removeItemFromCart(id) {
        let cart = LocalCart.getLocalCartItems()

        if (cart.has(id)) {
            let mapItem = cart.get(id)
            if (mapItem.quantity > 1) {
                mapItem.quantity -= 1
                cart.set(id, mapItem)
            }
            else
                cart.delete(id)
        }
        if (cart.length === 0)
            localStorage.clear()
        else
            localStorage.setItem(LocalCart.key, JSON.stringify(Object.fromEntries(cart)))
        updateCartUI()
    }
}


const cartIcon = document.querySelector('.fa-cart-arrow-down')
const wholeCartWindow = document.querySelector('.whole-cart-window')
wholeCartWindow.inWindow = 1
const addToCartBtns = document.querySelectorAll('.add-to-cart-btn')
console.log("addToCartBtns", addToCartBtns)
addToCartBtns.forEach((btn,i) => {
    console.log("btn", btn)
    btn.addEventListener('click', ()=>{
        addItemFunction(i)
    })
})
///////////////complete
function addItemFunction(i) {
    
    const retrieverObject = localStorage.getItem('productdata') || '';
    const retrieveObject = retrieverObject ? JSON.parse(retrieverObject) : [];
    console.log(retrieveObject)
    let itemToInsert = products.filter(item => item.dataid === i+1)[0];
    console.log("itemToInsert", itemToInsert)
    const { dataid ,Pro_name, discription, image,  price} = itemToInsert

    // let presentItem = retrieveObject.filter(item => item.dataid === i+1)[0];
    // console.log("presentItem",presentItem)
    // if (presentItem) {
    // console.log('id already exists in localstorage')

    // } else {
    // console.log('id not in localstorage')
    // }
    const item = new CartItem(Pro_name, discription, image, price)
    LocalCart.addItemToLocalCart(dataid, item)
    // console.log(price)
}

////////////////////////




/////////complete
cartIcon.addEventListener('mouseover', () => {
    if (wholeCartWindow.classList.contains('hide'))
        wholeCartWindow.classList.remove('hide')
})

cartIcon.addEventListener('mouseleave', () => {
    // if(wholeCartWindow.classList.contains('hide'))
    setTimeout(() => {
        if (wholeCartWindow.inWindow === 0) {
            wholeCartWindow.classList.add('hide')
        }
    }, 500)

})

wholeCartWindow.addEventListener('mouseover', () => {
    wholeCartWindow.inWindow = 1
})

wholeCartWindow.addEventListener('mouseleave', () => {
    wholeCartWindow.inWindow = 0
    wholeCartWindow.classList.add('hide')
})
/////////////////////////////////
function quantityChanged(event) {
    var input = event.target
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1;
    }
    updateCartUI() ;
}





var quantity = document.getElementsByClassName('cart-quantity')
console.log("quantity", quantity)
    for (var i = 0; i < quantity.length; i++) {
        var input = quantity[i]
        input.addEventListener('change', quantityChanged)
    }


function updateCartUI() {
    const cartWrapper = document.querySelector('.cart-wrapper')
    cartWrapper.innerHTML = ""
    const items = LocalCart.getLocalCartItems()
    console.log("items", items)
    if (items === null) return
    let count = 0
    let total = 0
    for (const [key, item] of items.entries()) {
        const cartItem = document.createElement('div')
        cartItem.classList.add('cart-item')
        let price = item.price * item.quantity
        price = Math.round(price * 100) / 100
        count += 1
        total += price
        total = Math.round(total * 100) / 100
        cartItem.innerHTML =
            `
        <img src="${item.image}"> 
                       <div class="details">
                           <h3>${item.Pro_name}</h3>
                           <p>
                            <span class="quantity">Quantity: ${item.quantity}</span>
                               <span class="price">Price: $ ${price}</span>
                        
                               <button class="decrement">-</button><input value="1" class="cart-quantity"/><button class="increment">+</button>
                        
                           </p>
                       </div>
                       <div class="cancel"><i class="fas fa-window-close"></i></div>
        `
        cartItem.lastElementChild.addEventListener('click', () => {
            LocalCart.removeItemFromCart(key)
        })
        cartWrapper.append(cartItem)
        cartItem
        .getElementsByClassName('cart-quantity')[0]
        .addEventListener('change', quantityChanged);
    }

    if (count > 0) {
        cartIcon.classList.add('non-empty')
        let root = document.querySelector(':root')
        root.style.setProperty('--after-content', `"${count}"`)
        const subtotal = document.querySelector('.subtotal')
        subtotal.innerHTML = `SubTotal: $${total}`
    }
    else
        cartIcon.classList.remove('non-empty')
}
document.addEventListener('DOMContentLoaded', () => { updateCartUI() })