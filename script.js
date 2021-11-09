let cartTotal = 0;
let cartItems = [];
const taxRate = 0.06;

const formatter = new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 2,      
    maximumFractionDigits: 2,
 });

function addToCart(itemName, itemPrice) {
    let item = {
        name : "",
        price : 0
    };
    item.name = itemName;
    item.price = itemPrice;
    cartItems.push(item);
    cartTotal = cartTotal + itemPrice;
}

function checkoutCart() {
    for (let i = 0; i < cartItems.length; i++)
    {
        document.getElementById("receiptItems").innerHTML += `${cartItems[i].name}<br>`;
        document.getElementById("receiptPrices").innerHTML += `$${formatter.format(cartItems[i].price)}<br>`;
    }

    document.getElementById("subtotal").innerHTML = `$${formatter.format(cartTotal)}`;
    document.getElementById("tax").innerHTML = `$${formatter.format(cartTotal*taxRate)}`;
    document.getElementById("grandtotal").innerHTML = `$${formatter.format(cartTotal + (cartTotal * taxRate))}`;
}