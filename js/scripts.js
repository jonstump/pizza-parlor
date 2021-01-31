//Business Logic
//Business Logic for Orders
function Orders() {
  this.pizzas = {};
  this.currentId = 0;
}

// Adds Pizza and unique id to the Orders object
Orders.prototype.addPizza = function(pizza) {
  pizza.id = this.assignId();
  this.pizzas[pizza.id] = pizza;
  pizza.numberOfToppings = pizza.toppingCount();
  pizza.price = pizza.pizzaPrice();
}

// Increases the ID number attached to current.id in the Orders object
Orders.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}

//Find Order by ID
Orders.prototype.findOrder = function(id) {
  if (this.pizzas[id] != undefined) {
    return this.pizzas[id];
  }
  return false;
}

//Business Logic for Pizza Object
function Pizza(pizzaSize, cheeseSelection, toppings) {
  this.pizzaSize = pizzaSize;
  this.cheeseSelection = cheeseSelection;
  this.toppings = toppings;
}

Pizza.prototype.toppingCount = function() {
  let numberOfToppings = this.toppings.length
  return numberOfToppings;  
} 

//Sums toppings total
Pizza.prototype.toppingsTotal = function () {
  if (this.toppings.length === 0) {
    const toppingsSum = 0;
    return toppingsSum;
  }
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  const toppingsSum = this.toppings.reduce(reducer);
  return toppingsSum;
}

//Assigns value to size selected
Pizza.prototype.pizzaPriceSize = function() {
  if (this.pizzaSize === "small") {
    sizePrice = 5
  } else if (this.pizzaSize === "medium") {
    sizePrice = 7
  } else if (this.pizzaSize === "large") {
    sizePrice = 9
  } else {
    sizePrice = 10
  }
  return sizePrice;
}

//Assigns value to cheese selected
Pizza.prototype.pizzaPriceCheese = function() {
  if (this.cheeseSelection === "cheddar") {
    cheesePrice = 2
  } else if (this.cheeseSelection === "swiss") {
    cheesePrice = 2
  } else if (this.cheeseSelection === "parmesan") {
    cheesePrice = 3
  } else {
    cheesePrice = 5
  }
  return cheesePrice;
}

Pizza.prototype.pizzaPrice = function() {
  const price = (this.toppingsTotal() + this.pizzaPriceSize() + this.pizzaPriceCheese());
  return ("$" + price + ".00");
}

//User Interface Logic

function displayPizzaDetails(addressBookToDisplay) {
  let contactsList = $("ul#contacts");
  let htmlForContactInfo = "";
  Object.keys(addressBookToDisplay.contacts).forEach(function(key) {
    const contact = addressBookToDisplay.findContact(key);
    htmlForContactInfo += "<li id=" + contact.id + ">" +contact.firstName + " " + contact.lastName + "</li>";
  });
  contactsList.html(htmlForContactInfo);
}

function showPizza(pizzasId) {
  const pizza = orders.findOrder(pizzasId);
  $("#show-pizza").show();
  $(".sizeOfPizza").html(pizza.pizzaSize);
  $(".cheeseSelection").html(pizza.cheeseSelection);
  $(".toppingsCount").html(contact.phoneNumber);
  $(".email-address").html(contact.emailAddress)
}

$("document").ready(function() {
  let pizza = new Pizza();
  
  $("form").submit(function(event){
    event.preventDefault();
    const sizeOfPizza = $("#sizeOfPizza").val();
    const cheese = $("#cheese").val();
    const toppingArray = [];
    $("input:checkbox[name=toppings]:checked").each(function(){
      const toppingSelection = parseInt($(this).val());
      toppingArray.push(toppingSelection);
    });

    pizza.pizzaSize = sizeOfPizza;
    pizza.cheeseSelection = cheese;
    pizza.toppings = toppingArray;

    let cost = pizza.pizzaPrice();
    $(".price").text(cost)
    $("#cost").slideDown();
    console.log(pizza.pizzaPrice())
  });
});