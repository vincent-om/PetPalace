let itemPrices = {
    'collars': 750,
    'dogShampoo': 500,
    'catFood': 500,
    'feedingContainer': 2300,
    'leash': 500,
    'toys': 500,
    'hamsterFood': 600,
    'fishFlakes': 600,
    'dogFood': 1000,
    'dogChewToys': 500,
    'miceChewToys': 300,
    'catChewToys': 1200,
    'hamsterWheel': 1500,
    'dryCatFood': 850
};


let getItemName= function (itemID){
    itemID = String(itemID);

    switch (itemID) {
        case 'collars':
            return 'Collars';
        case 'dogShampoo':
            return 'Dog Shampoo';
        case 'catFood': 
            return 'Cat Food';
        case 'feedingContainer':
            return 'Feeding Container';
        case 'leash':
            return 'Leash';
        case 'toys':
            return 'Toys';
        case 'hamsterFood':
            return 'Hamster Food';
        case 'fishFlakes':
            return 'Fish Flakes';
        case 'dogChewToys':
            return 'Dog Chew Toys';
        case 'miceChewToys':
            return 'Mice Chew Toys';
        case 'hamsterWheel':
            return 'Hamster Wheel';
        case 'dryCatFood':
            return 'Dry Cat Food';
        case 'catChewToys':
            return 'Cat Chew Toys'
    }
}


// Initialize items on cart that were already selected on homepage or any page in the site 
window.onload = ()=>{
    let itemsInCart = document.querySelector('.cart')
    itemsInCart.innerHTML = `<h1>In Your Cart</h1>`

    let itemsOnLocalStorage = localStorage.getItem('inCart');
    console.log(itemsOnLocalStorage)
    
    if(itemsOnLocalStorage != null){
        console.log(itemsOnLocalStorage)

        itemsOnLocalStorage = JSON.parse(itemsOnLocalStorage);

        for([item, price] of Object.entries(itemsOnLocalStorage)){

            itemsInCart.innerHTML += `<li>${getItemName(item)}</li>`
        }
    }
}


let addToCart = function(item, itemName){

    let itemsInYourCart = document.querySelector('.cart');
    itemsInYourCart.innerHTML += `<li>${itemName}</li>
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


let hamsterFood = document.querySelector('#add-hamster-food')
let fishFlakes = document.querySelector('#add-fish-flakes')
let dogChewToys = document.querySelector('#add-dog-chew-toys')
let miceChewToys = document.querySelector('#add-mice-chew-toys')
let hamsterWheel = document.querySelector('#add-hamster-wheel')
let dryCatFood = document.querySelector('#add-dry-cat-food')
let dogFood = document.querySelector('#add-dog-food')
let catChewToys = document.querySelector('#add-cat-chew-toys')

hamsterFood.addEventListener('click', (e)=>{
    e.preventDefault();
    addToCart('hamsterFood', 'Hamster Food')
})

fishFlakes.addEventListener('click', (e)=>{
    e.preventDefault();
    addToCart('fishFlakes', 'Fish Flakes')
})

dogChewToys.addEventListener('click', (e)=>{
    e.preventDefault();
    addToCart('dogChewToys', 'Dog Chew Toys')
})

miceChewToys.addEventListener('click', (e)=>{
    e.preventDefault();
    addToCart('miceChewToys', 'Mice Chew Toys')
})

hamsterWheel.addEventListener('click', (e)=>{
    e.preventDefault();
    addToCart('hamsterWheel', 'Hamster Wheel')
})

dryCatFood.addEventListener('click', (e)=>{
    e.preventDefault();
    addToCart('dryCatFood', 'Dry Cat Food')
})

dogFood.addEventListener('click', (e)=>{
    e.preventDefault();
    addToCart('dogFood', 'Dog Food')
})

catChewToys.addEventListener('click', (e)=>{
    e.preventDefault();
    addToCart('catChewToys', 'Cat Chew Toys')
})