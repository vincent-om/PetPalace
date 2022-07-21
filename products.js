let itemPrices = {
    'collars': 7500,
    'dogShampoo': 5000,
    'catFood': 5000,
    'feedingContainer': 2300,
    'leash': 5000,
    'toys': 5000
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
        case 'chewToys':
            return 'Chew Toys';
        case 'miceChewToys':
            return 'Mice Chew Toys';
        case 'hamsterWheel':
            return 'Hamster Wheel';
        case 'dryCatFood':
            return 'Dry Cat Food'
    }
}

window.onload = ()=>{
    let itemsInCart = document.querySelector('.cart')
    itemsInCart.innerHTML = `<h1>In Your Cart</h1>`

    let itemsOnLocalStorage = localStorage.getItem('inCart');
    
    if(itemsOnLocalStorage != null){
        console.log(itemsOnLocalStorage)

        itemsOnLocalStorage = JSON.parse(itemsOnLocalStorage);

        for([item, price] of Object.entries(itemsOnLocalStorage)){

            itemsInCart.innerHTML += `<li>${getItemName(item)}</li>`
        }
    }
}