// PROCESS ADD TO CART 

let itemPrices = {
    'collars': 7500,
    'dogShampoo': 5000,
    'catFood': 5000,
    'feedingContainer': 2300,
    'leash': 5000,
    'toys': 5000
};

let addToCart = function(item, itemName){

    let itemsInYourCart = document.querySelector('#items-in-your-cart');
    itemsInYourCart.innerHTML += `<li style="list-style-type: none; font-size: 2em">${itemName}</li>
    `

    item = String(item);
    let itemPrice = itemPrices[item];

    // console.log(item, itemPrice);

    let inCart = localStorage.getItem('inCart');    
    
    //The cart is not empty
    if(inCart != null){
        inCart = JSON.parse(inCart)
        inCart[item] = itemPrice;

        localStorage.setItem('inCart', JSON.stringify(inCart))
        console.log(localStorage)
    }

    else {
        inCart = {};
        inCart[item] = itemPrice

        localStorage.setItem('inCart', JSON.stringify(inCart))
    }
}

let collars = document.querySelector('#add-collars');
let dogShampoo = document.querySelector('#add-dog-shampoo');
let catFood = document.querySelector('#add-cat-food')
let feedingContainer = document.querySelector('#add-feeding-container');
let toys = document.querySelector('#add-toys')
let leash = document.querySelector('#add-leash')

collars.addEventListener('click', (e)=>{
    e.preventDefault();
    addToCart('collars', 'collars')
})

dogShampoo.addEventListener('click', (e) =>{
    e.preventDefault();
    addToCart('dogShampoo', 'Dog Shampoo')
})

catFood.addEventListener('click', (e) =>{
    e.preventDefault();
    addToCart('catFood', 'Cat Food')
})

feedingContainer.addEventListener('click', (e) =>{
    e.preventDefault();
    addToCart('feedingContainer', 'Food Container')
})

toys.addEventListener('click', (e)=>{
    e.preventDefault();
    addToCart('toys', 'Toys')
})

leash.addEventListener('click', (e) =>{
    e.preventDefault();
    addToCart('leash', 'Leash')
})


//clear local storage when the user refreshes the browser
window.onbeforeunload = ()=>{
    localStorage.clear();
}
