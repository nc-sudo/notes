// A function has: function, function argument, parameter

/* parameter and function argument both exist within ()
parameter is used as a placeholder when the function is declared
function argument is the actual value passed when function is called
*/

// just like var,const, or let declares a variable, function delcares a function

function name(parameter1, parameter2, ...) {
    // function body: code of the function
}

// favoriteAnimal is the function, animal is the parameter
function favoriteAnimal(animal) { 
    return animal + " is my favorite animal!"
}
// goat is a function argument
const message = favoriteAnimal('Goat')
console.log(message)
// in this example message is declared as "Goat is my favorite animal" and then console.log returns the message
// can use favoriteAnimal('Goat') as an argument of console.log()
console.log(favoriteAnimal('Goat'))
// this saves from having to save the value as a seperate variable


// a variable declared inside a function is only visible inside that function
function showMessage () {
    let message = "Hello, I'm JavaScript!";
    alert(message);
}
showMessage(); // alerts "Hello, I'm JavaScript", as it runs the showMessage function
alert(message); // message is not defined outside of the function
// a variable that is inside of a fucntio is referred to as a local variable

// a function has access to outer variables, ones that exist outside of the function
/* variables that are declared outside of any function are referred to as global variables */


/* functions can also edit global variables, and they will retain the new value */
let age = 31;

function showMessage() {
    age = 94;
    let message = "Hello, I'm " + age + " years old!"
    alert(message);
}
alert(age); // returns age = 31
showMessage(); // runs function, which includes a value change of age
alert(age); // returns new age value = 94


/* functions will ignore global variables when local variables exist */
function showMessage(from, text) {

  from = '*' + from + '*'; // make "from" look nicer

  alert( from + ': ' + text );
}

let from = "Ann";

showMessage(from, "Hello"); // *Ann*: Hello

// the value of "from" is unmodified, the function modified a local copy
alert( from ); // Ann


/* if a function is called without an argument provided, the value becomes undefined */
function showMessage(from,text) {
    alert(from + ": " + text);
}
showMessage('Ann', 'Hello!'); // Ann: Hello!
showMessage('Ann', "What's up?"); // Ann: What's up?
showMessage('Ann'); // Ann: undefined


/* Can set default value for parameter if arguement isn't provided */
// parameter = defaultvalue
function showMessage(from,text = "no text") {
    alert(from + ": " + text);
}
showMessage('Ann'); // Ann: no text
// default value will also trigger if argument === undefined

/* can also pass another function as a default value to be used*/
function missingText(){
    return "You forgot to assign value to text variable!"; 
} // need to use return for missingText function to push the variable back to whatever called it 
  // also didn't need to declare the value of text, since missingText is taking the place of that variable in the showMessage function
function showMessage(from, text = missingText()) {
    alert(from + " " + text);
}

showMessage('Me'); // Me You forgot to assign value to text variable!



