function addOrCreateCart(product){
    const itemName = "cart-item";
    if(!localStorage.getItem(itemName)){
        localStorage.setItem(itemName, JSON.stringify([]))
    }
    let storedCart = JSON.parse(localStorage.getItem(itemName));
    storedCart.push(product);
    localStorage.setItem(itemName, JSON.stringify(storedCart))

    return storedCart;
}

let searchParams = new URLSearchParams(window.location.search);
const newItem = Object.fromEntries(searchParams); 


const cart = addOrCreateCart(newItem);

let list = document.createElement('div');
list.innerHTML = 
    cart.map(item => 
        `<ul>
            <li>${item.option}</li>
            <li>${item.milk}</li>
            <li>${item.note}</li>
        </ul>`
    ).join("");

document.getElementById("cart").append(list);