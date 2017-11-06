const express = require( 'express' );
const app = express(); // creates an instance of an express application
const chalk = require('chalk');

app.listen(3000, ()=> {
  console.log('server listening')
})

app.get('/',(req,res) => {
  console.log(chalk.blue('hola'))
  res.send("Good to hear ya")
})

app.get('/news',(req,res) => {
  console.log("listening")
  res.send("Local news")
})

function logRequest(path,reqType){
  console.log(chalk.blue(path.toUpperCase() + " "+ reqType))
}
