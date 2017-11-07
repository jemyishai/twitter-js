const express = require( 'express' );
const app = express(); // creates an instance of an express application
const chalk = require('chalk');
const nunjucks = require('nunjucks');
let tweetBank = require('./tweetBank.js');
const routes = require('./routes/index.js')
//file weve created ==> reference path to that file

//should app.use need to be in index.js??
app.listen(3000, ()=> {
  console.log('server listening')
});

app.use('/', routes);

app.use((req,res,next) => {
  console.log(chalk.blue(req.method + " " + req.url));
  next();
});

//reconfigures the express app object
app.set('view engine', 'html');
app.engine('html', nunjucks.render);


nunjucks.configure('views', {noCache: true});

// nunjucks.render('index.html', function (err, output) {
//   if (err) throw err;
// });




//to-do: review res render in express documentation

// ******app.use to hook middleware****
// w/o res itll linger and wait for nextCB()
// w/o specifiyin uri, itll work for all uris
// req is a js object it can be used to inject info via object property

// app.use("/", (req,res, nextCB) => {
// res.send("works for gets puts delete post")
// nextCB()
// })

//middleware optionally has next callback
//res has res.json which sends a json object back

//get allows to hook function to uri
