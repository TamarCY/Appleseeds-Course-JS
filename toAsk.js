

// Here f is a var, declared outside the func and used inside
function funcE() {
    console.log("Value of f in local scope: ", f);
}
console.log("Value of f in global scope: ", f);
var f = 1;
funcE();



// Here bird is a let, declered before and in the func and each one is used in its scope
// its posible because it "let"
let bird = 'mandarin duck';

function birdWatch() {
  //this bird is scoped to birdWatch()
  let bird = 'golden pheasant';
  console.log(bird); //"golden pheasant"
}
birdWatch();
console.log(bird); //"mandarin duck"



// Here bird is a var, so it can be seen outside and inside the function/
// becuse its a var it can be declared twise in the same scope?
var bird = 'mandarin duck';

function birdWatch() {
  //this bird is scoped to birdWatch()
  var bird = 'golden pheasant';
  console.log(bird); //"golden pheasant"
}
birdWatch();
console.log(bird); //"mandarin duck"





function birdWatch3() {
    var bird3 = 'mandarin duck';
  console.log(bird3); 
}
birdWatch3();
console.log(bird3); //error - bird is not defined


if (true) {
    var animal = "eel";
    console.log(animal); //eel
}
console.log (animal) //eel
//because var is not scoped to a bolck
// but it is scoped to a function

//we can get var declered outsid  (x) in the function
//but we cant get var declerded inside the function (z) outside
var x = 1;

function foo (){
    console.log (x);
    var z = 2;
}

foo()
console.log(z)


// let and const are block scoped
// var is function scoped