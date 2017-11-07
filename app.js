const express = require( 'express' );
const app = express(); // creates an instance of an express application
const chalk = require('chalk');
const nunjucks = require('nunjucks')

app.listen(3000, ()=> {
  console.log('server listening')
});

//review res render in express documentation

app.get('/',(req,res) => {
  console.log(chalk.blue('hola'))
  const people = [{name: 'Full'}, {name: 'Stacker'}, {name: 'Son'}];
  res.render( 'index', locals);
});

app.get('/news',(req,res) => {
  console.log("listening")
  res.send("Local news")
});

function logRequest(path,reqType){
  console.log(chalk.blue(path.toUpperCase() + " "+ reqType))
}

//reconfigures the express app object
app.set('view engine', 'html');
app.engine('html', nunjucks.render);

nunjucks.configure('views');
nunjucks.configure('views', {noCache: true});
nunjucks.render('index.html', locals, function (err, output) {
  if (err) throw err;
    console.log(output);
});


var locals = {
    title: 'An Example',
    people: [
        { name: 'Gandalf'},
        { name: 'Frodo' },
        { name: 'Hermione'},
        { name: 'JTown'}
    ]
};
