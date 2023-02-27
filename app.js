//#region 
console.group('examples') // console group allows you to group your console.logs up, must be followed by .groupEnd() - see line 76

console.log("hello from js")

console.log("hello from js again")
// numbers
let number = 37
let number2 = 1.5
let negNumber = -5

// strings
let string = "this is a string"
let stringSingle = '"is this cool or what?" the teacher said'
let stringBack = `"Isn't this cool or what?" the cool teacher said`

// bools
let boolean = true
let bool = false

let result = 10 < number //booleans can be created with expressions, and stored

if (10 < number) { // '10 < number' creates a bool for the if statement to act against
  console.log('number is greater than t=10')
}

console.log(number)
console.log(string)
console.log(stringSingle)
console.log(stringBack)
console.log(result);
// objects
let catName = 'kitten'
let catAge = 1
let catIsFeisty = true
// collections of data, stored by key : value - pairs (THESE HAVE NO ORDER)
let cat = {
  name: 'kitten',
  age: 1,
  isFeisty: true
}
console.log(cat.name);

// arrays
// collections of data stored by POSITION
let names = ['kitten', 'theo', null, 'bean']

let cat2 = ['kitten', 1, true]

console.log(names[1]);

console.log(cat, cat2);

//weird types
let unknownNothing // undefined
let knownNothing = null
let reallyWeird = undefined // don't ever define something AS undefined, if you know nothing is there, use null

console.log(unknownNothing, knownNothing);

if (unknownNothing == undefined) {
  console.log('yup that is undefined');
}

function sayHello() {
  console.log('say what up to the peeps');
}

let micksFunction = sayHello // variables can store functions

let mick = {
  name: 'mick',
  greeting: micksFunction // functions are technically data and can be stored like data. Even though we really won't do this often...or ever
}
console.groupEnd()
//#endregion


// SECTION our app

function doSomething() {
  console.log('doin something')
}

doSomething() // the parens are what tell the function referenced to run

const secretCode = '🥞🧈🧈🥞' //const creates a variable with a value that cannot be changed
let yourCode = ''

function pancakes() {
  console.log('clicked pancake');
  yourCode += '🥞'
  console.log(yourCode);
  drawCode()
}

function mapleLeaf() {
  console.log('clicked mapleLeaf');
  yourCode += '🍁'
  console.log(yourCode);
  drawCode()
}

function butter() {
  console.log('clicked butter');
  yourCode += '🧈'
  console.log(yourCode)
  drawCode()
}

function drawCode() {
  let codeWindow = document.getElementById('code-window')
  codeWindow.innerText = yourCode
}

function checkCode() {
  if (yourCode == secretCode) {
    console.log('correct');
    window.alert('you got it right')
    // NOTE document represents the index.html in js
    // imgTag is selecting one HTMLelement from it by selecting it's unique id
    let imgTag = document.getElementById('secret-image')
    // we set the images src attribute
    imgTag.src = 'https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWQ4YmQ2MzNjOWZjZDg3M2M4NmUzYmY1NTBlNDIyYmE0YzVlOWNiYyZjdD1n/jpbnoe3UIa8TU8LM13/giphy.gif'
  } else {
    resetCode()
    console.log('inccorrect');
    window.alert('you are big dumb')
    window.close()
  }
}

function resetCode() {
  yourCode = ''
  console.log(yourCode);
  drawCode()
}