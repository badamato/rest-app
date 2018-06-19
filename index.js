//this is my route handler file

const express = require('express');
const app = express();
const expressHbs = require('express-handlebars');

//make a variable to refer to the built-in express static
//files
const static = express.static;

//register your handlebars template
app.engine('.hbs', expressHbs({defaultLayout: 'layout', extname: '.hbs'}));
app.set('view engine', '.hbs');

//using static file folder
app.use(static('public'));
// app.use(express.static('public/images')); 


//Home page: show the user a welcome message
app.get('/', (req, res) => {
    res.render('home', {
        headerText: 'Welcome to LittlePlates Restaurant',
        img: 'one.jpg'
    });
});


//About page: show the user info about the restaurant
app.get('/about', (req, res) => {
    res.render('about');
});


//Menu page: show the user the restaurant menu
app.get('/menu', (req, res) => {
    res.render('menu', {
        imagesFolder: '\/images\/',
        images: [
            // 'one',
            'two',
            'three',
            'four',
            'five'
        ]
    });
});


app.get('/*', (req, res) => {
    res.send('Hold tight - this page will soon be created!');
});

app.listen(8888, () => {
    console.log('Your express app is running at http://localhost:8888');
});