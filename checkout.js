window.onload = ()=>{
    let checkoutItems = document.querySelector('.checkout .price table');
    checkoutItems.innerHTML = `<tr>
    <th><strong>Product<span>s</span></strong></th><th><p>Price/Unit</th><th><p>No. of Units</p></th><th><span>Total</span></p></th>

</tr>
`

let itemsOnLocalStorage = localStorage.getItem('inCart');

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
            return 'Leash'
        case 'toys':
        return 'Toys';
        case 'hamsterFood':
            return 'Hamster Food';
        case 'fishFlakes':
            return 'Fish Flakes';
        case 'dogChewToys':
            return 'Chew Toys';
        case 'miceChewToys':
            return 'Mice Chew Toys';
        case 'hamsterWheel':
            return 'Hamster Wheel';
        case 'dryCatFood':
            return 'Dry Cat Food'
    }
}

if(itemsOnLocalStorage != null){

    itemsOnLocalStorage = JSON.parse(itemsOnLocalStorage);

    let grandTotal = 0;
    for([item, price] of Object.entries(itemsOnLocalStorage)){

        grandTotal += price;

        checkoutItems.innerHTML += `
        <tr>
            <td> <strong>${getItemName(item)}</strong> </td>
            <td> ${price} </td>
            <td> 1 </td>
            <td>${price} </td>    
        </tr>`
    }

    checkoutItems.innerHTML += `<tr>
    <td> <strong>GRAND TOTAL</strong> </td>
    <td></td>
    <td></td>
    <td>${grandTotal} </td>    
</tr>`
}
}