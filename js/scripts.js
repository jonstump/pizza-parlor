//Business Logic
function Pizza(pizzaSize, cheeseSelection, toppings) {
  this.pizzaSize = pizzaSize;
  this.cheeseSelection = cheeseSelection;
  this.toppings = toppings;
}

//Sums toppings total
Pizza.prototype.toppingsTotal = function () {
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
$("document").ready(function() {
  let pizza = new Pizza();
  
  $("form").submit(function(event){
    event.preventDefault();
    let sizeOfPizza = $("input:radio[name=sizeOfPizza]:checked").val(); 
    let cheese = $("input:radio[name=cheese]:checked").val();
    let toppingArray = [];
    $("input:checkbox[name=toppings]:checked").each(function(){
      const toppingSelection = $(this).val();
      toppingArray.push(toppingSelection);
    });
    //need to turn array into integers.

    pizza.pizzaSize = sizeOfPizza;
    pizza.cheeseSelection = cheese;
    pizza.toppings = toppingArray;

    let cost = pizza.pizzaPrice();
    $("#price").val(pizza.pizzaPrice())
    $("#cost").show();
    console.log(pizza.pizzaPrice())
    return cost;
  });
});