// Question 1:
// In your own words what will this point to and why?(Note
// this is the global scope)
// console.log(this);

// To the window object - because this is the scope



// Question 2:
// a. In your own words what will this point to and why.
    // There is no this in an arrow function so it will point to the window
const myObj = {
  name: "Timmy",
  greet: () => {
  console.log(`Hello ${this.name}`);
 },
};
myObj.greet();

// b. How can you fix this code.

const myObj = {
  name: "Timmy",
  greet(){
  console.log(`Hello ${this.name}`);
 },
};
myObj.greet();

// Now the this refers to myObj



// Question 3:
// In your own words what will this point to and why?
const myFuncDec = function () {
 console.log(this);
};

//to the window obj because this is the scope, there is no other object to refer to 


// Question 4:
// In your own words what will this point to and why?
const myFuncArrow = () => {
 console.log(this);
};
myFuncArrow();

//The window object. there is now this to arrow funcion. but 
// like the last one, even if there was a regular function there was no object to refer to so its still the window

// Question 5:
// a. In your own words what will this point to and why.
// b. How can you fix this code.
document.querySelector(".element").addEventListener("click",() => {
 console.log(this);
});

// this will refer to the window because arrow funcion dont have a this. we could use regular function.

document.querySelector(".element").addEventListener("click",function() {
    console.log(this);
   });

//now the this will return the element that was clicked