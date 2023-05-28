const items = [
  {
    itemName: "wash car",
    itemPrice: 10,
    id: 0,
  },

  {
    itemName: "Mow Lan",
    itemPrice: 20,
    id: 1,
  },

  {
    itemName: "Pull Weeds",
    itemPrice: 30,
    id: 2,
  },
];

const orderArray = [];

// buttons //
document.addEventListener("click", function (e) {
  if (e.target.dataset.add) {
    addItem(e.target.dataset.add);
  }
  if (e.target.id == "send-btn") {
    reset();
  } else if (e.target.dataset.remove) {
    removeItem(e.target.dataset.remove);
  }
});

// render the items //

function renderItems() {
  let menu = ``;
  items.forEach(function (item) {
    menu += `<div class="item-btn item-1" data-add='${item.id}'>${item.itemName} $${item.itemPrice}</div>`;
  });
  return menu;
}

function getOrderHtml() {
  let totalPrice = 0;
  let orderHtml = `<div class="task">
    <div class="task-title">TASK </div>
      `;
  orderArray.forEach(function (orderItem, index) {
    orderHtml += `
          <div class="items-card"> 
          <div class="task-list">
          <div class="task-item">
          <div class="card-item"> ${orderItem.itemName} </div>
          <div class="remove-btn" data-remove='${index}'>Remove</div>
        </div>
      </div>
      <div class="total">
      <div class="title-total">TOTAL</div>
        <div class="item-price">$${orderItem.itemPrice}</div>
        </div>
        </div>
    </div>
    </div>
    </div>
        `;
    totalPrice += orderItem.itemPrice;
  });

  orderHtml += `     <div class="items-calc">
      <div class="notes">NOTES
      <p class="notes-des"> We accept cash, credit card, or PayPal</p></div>

      <div class="total-amount">
        <div>TOTAL AMOUNT</div>
        <div class="total-num">$${totalPrice}</div>
      </div>
    </div>
    <div  id ='send-btn' class="send-btn"'>
    <i class="fa-solid fa-envelope" > </i>Send invoice
  </div>

    
        `;
  return orderHtml;
}

// render the order //
function renderOrder() {
  document.querySelector(".checkout").innerHTML = getOrderHtml();
}

// add an item to cart //

function addItem(itemId) {
  const targetItemObj = items.filter(function (item) {
    item.isClicked = true;
    return item.id == itemId;
  })[0];
  // check if an item exist //
  if (orderArray.includes(targetItemObj)) {
  } else {
    orderArray.push(targetItemObj);
  }
  renderOrder();
}

// remove an item from cart //

function removeItem(index) {
  orderArray.splice(index, 1); // at position index, remove 1 item from the array
  renderOrder();
}

// render the whole page //
function render() {
  document.querySelector(".items").innerHTML = renderItems();
}
render();

// clear the window //

function reset() {
  document.querySelector(".items").classList.add("hidden");
  document.querySelector(".checkout").classList.add("hidden");
}
