// A function has: function, function argument, parameter

/* parameter and function argument both exist within ()
parameter is used as a placeholder
function argument is the actual value used in place of placeholder
*/

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



