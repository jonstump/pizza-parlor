//Business Logic
function Pizza(pizzaSize, cheeseSelection, toppings) {
  this.pizzaSize = pizzaSize;
  this.cheeseSelection = cheeseSelection;
  this.toppings = toppings;
}

Pizza.prototype.toppingsTotal = function (toppings) {
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  const toppingsSum = toppings.reduce(reducer);
  return toppingsSum;
}


//User Interface Logic