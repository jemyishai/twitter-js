const express = require('express');
const chalk = require('chalk')
const router = express.Router();

const tweetBank = require('../tweetBank');

router.get('/', function (req, res) {
  let tweets = tweetBank.list();
  let page = {
    title: 'Twitter Homepage',
    tweets: tweets
  }
  res.render( 'index', page);
});

// router.get('/',(req,res) => {
//   console.log(chalk.blue('hola'))
//   const people = [{name: 'Full'}, {name: 'Stacker'}, {name: 'Son'}];
//   res.render( 'index', locals);
// });
//
// router.get('/news',(req,res) => {
//   console.log("listening")
//   res.send("Local news")
// });

// function logRequest(path,reqType){
//   console.log(chalk.blue(path.toUpperCase() + " "+ reqType))
// }

module.exports = router;


// var locals = {
//     title: 'Twitter Homepage',
//     tweets: [
//         { tweet: 'T1'},
//         { tweet: 'T2' },
//         { tweet: 'T3'},
//         { tweet: 'T4'}
//     ]
// };
