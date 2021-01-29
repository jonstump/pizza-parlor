# Pizza Parlor

### By Jon Stump
<img align="center" src="https://avatars2.githubusercontent.com/u/59323850?s=460&u=372c7d529b7379408ae54491ab3449b6e2f4d94d&v=4">

## Technologies Used
* HTML
* CSS
* Javascript
* jQuery
* Bootstrap
* Visual Studio Code

## Description
* _Pizza Parlor_  
* Simple website that allows a user to choose toppings on a pizza and show them a price based on their choices. This site uses constructors and prototypes in javascript.


## Specs / Tests

**Describe** Pizza()
<br/>
**Test 1** "It will return an instance of Pizza whose typeof is 'object.'"
<br/>
**Expect** typeof new Pizza().toEqual('object')
<br/>
**Test 2** "It will store a size value as a string."
<br/>
**Expect** newPizza.pizzaSize("medium").toEqual("medium")
<br/>
**Test 3** "It will store cheese value as a string."
<br/>
**Expect** newPizza.cheeseSelection("cheddar").toEqual("cheddar")
<br/>
**Test 4** "It will store topping selections as an array of values."
<br/>
**Expect** newPizza.toppings("pepperoni, mushrooms, bacon").toEqual([1, 1, 2])
<br/>

**Describe** Pizza.prototype.toppingsTotal()
<br/>
**Test ** "It will add the values in the array."
<br/>
**Expect** toppingsTotal([1, 1, 2]).toEqual("4")
<br/>

**Describe** Pizza.prototype.pizzaPriceSize()
<br/>
**Test ** "It will assign a value to pizza size."
<br/>
**Expect** pizzaPriceSize("medium").toEqual("7")
<br/>

**Describe** Pizza.prototype.pizzaPriceCheese()
<br/>
**Test ** "It will assign a value to pizza size."
<br/>
**Expect** pizzaPriceCheese("cheddar").toEqual("2")
<br/>

**Describe** Pizza.prototype.pizzaPrice()
<br/>
**Test ** "It will total pizzaPriceSize, pizzaPriceCheese, and toppingsTotal." 
<br/>
**Expect** pizzaPrice(pizzaPriceSize() + pizzaPriceCheese() + toppingsTotal()).toEqual("13")
<br/>
**Test ** "It will change the pizzaPrice() value to a user friendly dollar amount." 
<br/>
**Expect** pizzaPrice(13).toEqual("$13.00")
<br/>


## Setup/installation Requirements

* Copy the following link to your clipboard: https://github.com/
* Open a Bash Terminal
* In your terminal window, navigate to a directory that you would like to clone the repository to
* Within your git bash terminal type in 'git clone' and then paste in the link from your clipboard by right clicking and selecting 'paste' example below:
```bash
$ git clone https://github.com/
```
* After the page has been cloned to your chosen directory locate the folder and open it.
* After you have the folder open that you cloned from Github.com double click the file "index.html"
* The webpage should open in the default browser set by your machines settings

This game can be played via it's [gh-page](https://.github.io/)


## License
[GPLv3](https://choosealicense.com/licenses/gpl-3.0/)\
Jon Stump &copy; 2021

## Contact
Jon Stump jmstump@gmail.com