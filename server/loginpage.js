import readline from "readline-sync"

console.log("==============================")
console.log("======= INSTAGRAM LOGIN =======")
console.log("==============================")

let Username = readline.question("Enter your username")
let Password = readline.question("Enter your password")
let Email = readline.questionEMail("Enter your email")
let Age = readline.questionInt("Enter your age")
 
console.log(Username)
console.log(Password)
console.log(Email)
console.log(Age)

