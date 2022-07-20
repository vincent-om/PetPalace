let itemPrices = {
    'collars': 7500,
    'dogShampoo': 5000,
    'catFood': 5000,
    'feedingContainer': 2300,
    'leash': 5000,
    'toys': 5000
};

let addToCart = function(item){

    item = String(item);
    let itemPrice = itemPrices[item];

    // console.log(item, itemPrice);

    let inCart = JSON.parse(localStorage.getItem('inCart'))

    console.log(localStorage.getItem('inCart'))
    
    //The cart is not empty
    if(!inCart){
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
    addToCart('collars')
})

dogShampoo.addEventListener('click', (e) =>{
    e.preventDefault();
    addToCart('dogShampoo')
})

catFood.addEventListener('click', (e) =>{
    e.preventDefault();
    addToCart('catFood')
})

feedingContainer.addEventListener('click', (e) =>{
    e.preventDefault();
    addToCart('feedingContainer')
})

toys.addEventListener('click', (e)=>{
    e.preventDefault();
    addToCart('toys')
})

leash.addEventListener('click', (e) =>{
    e.preventDefault();
    addToCart('leash')
})


