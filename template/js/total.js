function addOrCreateCart(product) {
  const itemName = "cart-item";
  if (!localStorage.getItem(itemName)) {
    localStorage.setItem(itemName, JSON.stringify([]));
  }
  let storedCart = JSON.parse(localStorage.getItem(itemName));
  if (window.location.search !== "") {
    storedCart.push(product);
  }
  localStorage.setItem(itemName, JSON.stringify(storedCart));

  return storedCart;
}

let searchParams = new URLSearchParams(window.location.search);
const newItem = Object.fromEntries(searchParams);

const cart = addOrCreateCart(newItem);

let list = document.createElement("div");
list.classList.add("cart");
list.innerHTML = cart
  .map(
    (item) =>
      ` <div class="card-vertical radius primary">
        <div class="coffee">
            <div class="coffe-img"> <img claa="tumb" src="./img/products/hot drinks/coffees/flatWhite.png "
                    alt=" flat white" />
                <div class="inputStepper ">
                    <button type='button' class="decrement accent" id="decrement"
                        onclick="Stepper(this.id, '5'), getTotal(this.id)">
                        -
                    </button>
                    <input type="number" min="0" max="20" value="1" id="5" readOnly />
                    <button type='button' class="increment accent" id="increment"
                        onclick="Stepper(this.id, '5')">
                        +
                    </button>
                </div>
            </div>
            <div class="results">
                <div class="results-top responsive-row">
                    <p class="name white"> ${item.product}</p>
                    <img class="trash" src="icons/wtrash.svg">
                </div>
                <div class="results-top responsive-row">
                    <p class="price white"> ${item.price} </p>
                    <p class="size white"> ${item.size} </p>
                </div>
                <div class="results-bottom responsive-row">
                    <p class="milk white">${item.milk} </p>
                    <p class="flavor white"> ${item.extrasf}</p>
                    <p class="flavor white"> ${item.extrashot}</p>
                </div>
            </div>
        </div>
    </div>
        
        `
  )
  .join("");

document.getElementById("list-coffees").append(list);

//Clear the seacrh if its not empty
if (window.location.search !== "") {
  window.location.search = "";
}
