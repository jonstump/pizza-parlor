//Business Logic
function Pizza(pizzaSize, cheeseSelection, toppings) {
  this.pizzaSize = pizzaSize;
  this.cheeseSelection = cheeseSelection;
  this.toppings = toppings;
}

Pizza.prototype.toppingsTotal = function () {
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  const toppingsSum = this.toppings.reduce(reducer);
  return toppingsSum;
}

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


//User Interface Logic