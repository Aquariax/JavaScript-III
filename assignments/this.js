/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. window - binding top level widow is the first bind and the most broad
* 2. implicit - when a function/object is called with a dot before it
* 3. new - creating a new object from the constructor 
* 4. explicit - specifically assigning the this keyword 
*
* write out a code example of each explanation above
*/
function Bird (type,name,sound){ 
    this.type= type,
    this.name= name,
    this.sound= sound,
    this.speak= function(){
        console.log`${this.sound}`
    }
} 

// Principle 1

// code example for Window Binding
console.log(name)

// Principle 2

// code example for Implicit Binding
console.log(this.name)

// Principle 3

// code example for New Binding
const duck = new Bird("duck", "daffy", "quack")
console.log(duck)

// Principle 4

// code example for Explicit Binding
console.log(duck.name)