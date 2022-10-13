const path = require('path');
const express = require('express');
const app = express();
const users= require('./fixtures/users.json'); 
//import users from './fixtures/users.json';
//assert { type: 'JSON' };
// view engine setup

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hjs');
app.use(express.static('public'));

/**
 * @return HTML to render /index page
 */
app.get('/', (req,res) => {
  res.render('index', {
    title: "Software Design & Architecture",
    name: "Dr. Amr Desouky - Assignment #2"
  });
});
//console.log(jsonData);

app.get('/users', (req,res) => {

  res.render('users');

});

app.get('/users/list', (req,res) => {
  
  res.json(users);
});

// middleware to catch non-existing routes
app.use((req, res, next) => {
  res.status(404).render('404');
});

app.listen('3000', () => {
  console.log('[OK] => HTTP Server listening on http://localhost:3000');
});
