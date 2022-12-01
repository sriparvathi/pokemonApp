// require express
const express = require('express');
// set express to a variable
const app = express();
//set a variable of port to 3000
const port = 3000;
//set your app to listen to port and console log listening
app.listen(port, function(){
    console.log(`Listening on ${port}`);
});
app.get('/', (req, res) => {
    res.send("<h1>Welcome to the Pokemon App!</h1>");

})