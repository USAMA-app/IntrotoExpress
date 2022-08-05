const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.raw());

// Return All todo
// Add Todo
// Update Todo 
// Delete Todo

var Array = [];
var Counter =1;
app.get('/Student', function(req, res) {
       
    let name = req.query.name;
    res.send( Array)  
});

app.post('/Student', function(req, res) {
    let name = req.body.name;
    let age = req.body.age;

    Array.push({ ID: Counter, name, age});

    Counter++;
    res.send({Code: 200})  ;
});

app.delete('/Student', function(req, res) {
      
    Array = Array.filter(x=> x.ID != req.body.ID);
    res.send({Code: 200});
});




app.listen(port, function() {
  console.log(`Example app listening on port ${port}!`)
});
