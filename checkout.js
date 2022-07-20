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
        case ''
    }
}

if(itemsOnLocalStorage != null){

    itemsOnLocalStorage = JSON.parse(itemsOnLocalStorage);

    for([item, price] of Object.entries(itemsOnLocalStorage)){
        checkoutItems.innerHTML += `
        <tr>
            <td> <strong>${getItemName(item)}</strong> </td>
            <td> ${price} </td>
            <td> 1 </td>
            <td>${price} </td>    
        </tr>`
    }
    // console.log(localStorage)
}
}