//Main File



//console.log("Hello NodeJS -index.js") //To print 

//----------------------------------
/*
const name1=require("./app.js") // To execute another file and assigning to a constant
console.log(name1)
*/
//------------------------------
/*
const fs=require("fs")    // To import fs module for file system
fs.writeFileSync("notes.txt","Hi Likhitha")  // To create a new file name notes.txt and text is added
fs.appendFileSync("notes.txt","Welcome to NodeJS")//To append text in a file 
 */ 

//Function
const addfunc=require("./app.js")
const sum=addfunc(9,-4) 
console.log(sum)

const validator=require("validator")
console.log(validator.isEmail('likki@gmail.com'))

