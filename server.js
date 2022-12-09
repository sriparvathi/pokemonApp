require("dotenv").config();
const express = require('express');
const mongoose = require("mongoose");
// const expressReactViews = require('express-react-views');
const Pokemon = require('./models/pokemon.js');
// set express to a variable
const app = express();
//set a variable of port to 3000
const port = 3000;
// set up middleware
app.use(express.static('public'));

app.use((req, res, next) => {
    console.log("I run for all routes");
    next();
  });
  
  app.use(express.urlencoded({ extended: false }));
app.set('view engine', 'jsx');

app.engine('jsx', require("express-react-views").createEngine()); 
mongoose.set("strictQuery", true);
// Setting up Mongoose
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  
  mongoose.connection.once("open", () => {
    console.log("connected to mongo");
  });

//set your app to listen to port and console log listening

// Index route = Show all records
app.get("/pokemon", (req, res) => {
    Pokemon.find({}, (error, allPokemon) => {
      res.render("Index", {
        pokemonList: allPokemon,});
    });
  });
// app.get('/', (req, res) => {
//     res.send("<h1>Welcome to the Pokemon App!</h1>");

// });

// app.get('/pokemon', (req, res) =>{
//     //res.send(pokemon);
  
//     Pokemon.find({},(err, allPokemon) =>{
        
// res.render('Index', {pokemonList: allPokemon})
//     });
// });
// New - Get a form to create a new record
app.get("/pokemon/new", (req, res) => {
    res.render("New");
  });
// app.get('/pokemon/:id', (req, res) => {
//     //res.send(req.params.id);
//     res.render('Show', {Pokemon: Pokemon[req.params.id]} );
// });
app.get("/pokemon/:id", function (req, res) {
  Pokemon.findById(req.params.id, (err, foundPokemon) => {
    res.render("Show", {
      Pokemon: foundPokemon,
    });
  });
});
// app.get('/pokemon/new', (req, res) => {
//     res.render('New');
// });
// create- send the filled form to db to create new record.
app.post('/pokemon', (req, res) => {
    Pokemon.create(req.body, (err, createdPokemon) => {
        res.redirect('/pokemon');
    });
});
app.listen(port, function(){
  console.log(`Listening on ${port}`);
});

