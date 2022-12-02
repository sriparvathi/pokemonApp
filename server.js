// require express
const express = require('express');
const expressReactViews = require('express-react-views');
// set express to a variable
const app = express();
const pokemon = require('./models/pokemon');
//set a variable of port to 3000
const port = 3000;
app.set('view engine', 'jsx');

app.engine('jsx', expressReactViews.createEngine()); 
//require('express-react-views').createEngine());



//set your app to listen to port and console log listening
app.listen(port, function(){
    console.log(`Listening on ${port}`);
});
app.get('/', (req, res) => {
    res.send("<h1>Welcome to the Pokemon App!</h1>");

});

console.log(pokemon);
app.get('/pokemon', (req, res) =>{
    //res.send(pokemon);
    res.render('Index', {pokemonList: pokemon});
});
app.get('/pokemon/:id', (req, res) => {
    //res.send(req.params.id);
    res.render('show', {pokemon: pokemon[req.params.id]} );
});
