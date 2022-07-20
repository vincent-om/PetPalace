window.onload = ()=>{
    let checkoutItems = document.querySelector('.checkout .price table');
    checkoutItems.innerHTML = `<tr>
    <th><strong>Product<span>s</span></strong></th><th><p>Price/Unit</th><th><p>No. of Units</p></th><th><span>Total</span></p></th>

</tr>
`

let itemsOnLocalStorage = localStorage.getItem('inCart');

if(itemsOnLocalStorage != null){
    for([item, price] of Object.entries(itemsOnLocalStorage)){
        console.log(item)
    }
}
}