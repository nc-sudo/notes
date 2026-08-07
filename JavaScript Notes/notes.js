// This is a collection of notes for the javascript exercises
// can use about:blank to generate a blank browser page to execute code


let text = "I can use the method 'length' to return the length in characters of a string. I can do this using 'variable_name.length'.";
console.log(text.length);
// This would return the length of the string variable "text"

console.log(text.charAt(0));
// This will returnt the character at the 0 position in the string. Since the string starts at 0, this would return "I". If I were to look for the character at value 1, it would return "f".

console.log(text.charCodeAt(n));
// Returns the unicode UTF-16 code of the character at "n" position. It is only really useful for the basic characters.
// charPointAt is useful for returning more modern characters, like emojis and gives the accurate full unicode, where charCodeAt would only return half in error.

// concat() allows to combine strings, without having to use +
let text1 = "Hello";
let text2 = "World";
let text3 = text1.concat(" ", text2);
// this will make text3 return a value of "Hello World". ***The " " is there to provide a space between the value of text1 and text2, since there isn't a space in either. Otherwise it would return "HelloWorld"

// slice(), substring(), and substr() are used to take partial values of a string
let text = "Apple, Banana, Kiwi";
console.log(text.slice(7, 13)); // returns Banana
// negative values start from the end
// negative values are treated as 0 in substring()
// substr() works similarly to slice(), except the 2nd value specifies length of extracted part.

// toUpperCase() and toLowerCase() converts the case-ing of the string

// trim() removes whitespace from front and end
// trimStart() and trimEnd() specify which side to trim from

// padStart() pads a string with another string until it reaches a given length
let text = "5";
console.log(text.padStart (4,"0")); // returns 0005
console.log(text.padStart (4,"x")); // returns xxx5
console.log(text.padStart (8,"xy")); // returns xyxyxyx5
// to pad a number it needs converted to a string first
// can also padEnd()

// repeat() returns a string with an amount of copies of the string
let text = "Hello"
console.log(text.repeat(4)); // returns HelloHelloHelloHello

// replace() will replace a specified value with another value
// it replaces only the first match, and is case sensitive
// can add /i flag to a value to make it case insensitive
// use flag /g to replace all matches
let text = "Please visit Microsoft and Microsoft!"
console.log(text.replace(/MICROSOFT/i, "w3Schools")); 
// returns "Please visit W3Schools and Microsoft!"
 
// split() converts a string into an array
// use brackets [] to specify which value within the array to return
let text = "a,b,c,d,e,f";
console.log(text.split(",")[4]); // returns e

// can use ? as an operator to assign a variable devepending on a condition
let result = condition ? value1 : value2;
// example
let accessAllowed = (age > 18) ? eligible : uneligible;
// so if condition is true then the first value is returned, but if false the second value is returned

// can chain ?'s similarly to switches or if..else
let age = prompt('age?', 18);

let message = (age < 3) ? 'Hi, baby!' :
  (age < 18) ? 'Hello!' :
  (age < 100) ? 'Greetings!' :
  'What an unusual age!';
alert( message );

if (age < 3) {
  message = 'Hi, baby!';
} else if (age < 18) {
  message = 'Hello!';
} else if (age < 100) {
  message = 'Greetings!';
} else {
  message = 'What an unusual age!';
}

// two pipes || represent OR 
// in javascript the OR function returns the first truthy value unless none are found, then returns the final value
let firstName = "";
let lastName = "";
let nickName = "SuperCoder";
alert(firstName||lastName||nickName||"anon");
// returns "SuperCoder" since a populated value is regarded as truthy
alert(firstName||lastName||"anon");
// returns "anon" since all other values are falsy

// short-circuit evaluation means that arguements will be processed up until a truthy value is reached, and anything following it will be dismissed
true || alert("not printed");
false || alert("printed");
// in this example since "true" is processed, the rest of that line is ignored, but because the 2nd line is not truthy, the whole arguement is ran
// this can be used to test a series of arguments/conditions and only act upon a falsy result

// two && represent AND
// so true is only returned when both values processed are truthy
if (hour == 12 && minute == 30) {
  alert( 'The time is 12:30' );
}
// when the hour = 12 AND minute = 20 then the alert message executes
// AND returns first falsy value, or last value if no falsy values were found

// && has precedence over ||, so AND arguements get evaluated first before OR arguements

// ! represents NOT
alert(!true); // will alert "false"
// !! can be used to convert a value to boolean
alert(!!"a string with text in it"); // ! sets to boolean and 2nd ! inverses the first boolean value
// !! is essentially the same as using "Boolean" function
alert(Boolean("a string with text in it")); // returns true
alert(!"a string with text in it"); // returns false
alert(!!"a string with text in it"); // returns true


if (14 <= age && age <= 90) {
    alert("between 14 and 90");
} // alerts when age is 14-90, including 14 and 90


if (!(age > 14 && age < 90)) {
    alert("too young or too old");
} // alerts when age isn't between 14 and 90

if (age > 14 || age < 90) {
    alert("still too young or old");
} // alerts when age isn't more than 14 or less than 90

// && seeks falsy, || seeks truthy, ! inverses boolean value

if (-1 || 0) alert("first");
// -1 is truthy, so if(-1) = true, so alert
if (-1 && 0) alert("second");
// 0 is faly, so if(0) = false, no alert
if (null || -1 && 1) alert("third");
// niether -1 or 1 falsy so null || 1, 1 is truthy, so if(1) = true, alert

let userName = prompt("Who's There?");

if (userName == "" || userName == null) {
    alert("Canceled");
}
if (userName !== "" && userName !== null && userName !== "Admin") {
    alert("That's my purse, I don't know you!")
}
if (userName == "Admin") {
    let password = prompt("Password");
    if (password == "TheMaster") {
        alert("Welcome!");
    } 
    if (password == "" || password == null) {
        alert("Canceled"); 
    }
    if (password !== "" && password !== null && password !== "TheMaster") {
        alert("Wrong Password");
    }
} 
// Lets see how inefficiently I just wrote that code

let userName = prompt("Who's there?", '');
// that ,'' is a cleaner way to indicate collecting the result
if (userName === 'Admin') {
// === makes sure it's an exact match
  let pass = prompt('Password?', '');

  if (pass === 'TheMaster') {
    alert( 'Welcome!' );
  } else if (pass === '' || pass === null) {
    alert( 'Canceled' );
  } else {
    alert( 'Wrong password' );
  }
// the else allows to consider multiple possible passwords rather than set conditions from scratch each time
} else if (userName === '' || userName === null) {
  alert( 'Canceled' );
} else {
  alert( "I don't know you" );
}

/* Switch takes the place of multiple ifs, and break is used to differentiate between the other ifs */
switch (a) { //setting value to be compared in ()
  case 3: //checking if a === 3
    console.log('Value equals 3!');
    break;
  case 4: //check if a === 4
    console.log('Exactly!');
    break;
  case 5: //check if a === 5
    console.log('Value equals 5!');
    break;
  default: //sets "else" 
    console.log("I don't know that number");
}

/* omitting break will run all code after the first match condition is met, this is useful when wanting to run the same code for multiple conditions */

let a = 3;

switch (a) {
  case 4:
    alert('Right!');
    break;

  case 3: // (*) grouped two cases
  case 5:
    alert('Wrong!');
    alert("Why don't you take a math class?");
    break;

  default:
    alert('The result is strange. Really.');
}

/*switches and cases can be any expression*/

let a = "1";
let b = 0;

switch (+a) { // +a = +1
  case b + 1: // b = 0+1 = +1
    alert("this runs, because +a is 1, exactly equals b+1");
    break;

  default:
    alert("this doesn't run");
}

/* ^^^ a intially is set as a string, but using math turns it into a numerical value.
That is why if you don't do +a you get the default, becuase "1" doesn't stricly equal 1 */
// The equality check of switch is always strict

if (browser === 'Edge') {
  alert("Terrible Choice");
} else if (browser === 'Chrome'
    || browser === 'Firefox'
    || browser === 'Safari'
    || browser === 'Opera') {
      alert("We can work with that");
} else if (browser === 'Brave') {
  alert("Smart Choice");
} else if (browser === "TOR") {
  alert("What are you hiding?");
} else {
  alert("What the hell are you using?");
}

let a = +prompt('a?', "");

switch (a) {
  case 0:
    console.log(0);
    break;
  
  case 1:
    console.log(1);
    break;
  
  case 2:
  case 3:
    console.log('2,3');
    break;
  
  default:
    console.log("I can't count that high!");
}
