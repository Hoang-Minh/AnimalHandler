// npm packages
var express = require('express')
var bodyparser = require('body-parser')
var path = require('path')
var morgan = require('morgan')
var expresshbs = require('express-handlebars')

// new express app
var app = express()

// middleware
app.use(morgan('dev'))
app.engine('hbs', expresshbs({defaultLayout: 'main', extname: '.hbs'}))
app.set('view engine', 'hbs')
app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())

//var animals = require("./allPets.js");

// another way to work as well
var animals = [
  {
    type: "dog",
    pet: true,
    fierceness: 2
  },
  {
    type: "cat",
    pet: true,
    fierceness: 3
  },
  {
    type: "lion",
    pet: false,
    fierceness: 8
  },
  {
    type: "zebra",
    pet: false,
    fierceness: 6
  }
]

// your code here...
app.get('/', function (req, res) {
  res.render('index')
})

// works
app.get("/allpets", function(req, res){
  // res.render("allpets", {pets: animals});  // also works !!!! 
  res.render("allpets", {animals});  // works
})

app.get("/:id", function(req, res){
  
  debugger;
  var type = req.params.id;
  //var index = animals.indexOf(type);
  var index = -1;
  for(var i = 0; i < animals.length; i++){
    if(animals[i].type === type){
      index = i;
      break;
    }
  }
  res.render("animal", animals[index]);  // for handlebars, res.render needs to send in an object !!!!
})

var PORT = process.env.PORT || 3000
// listening port
app.listen(PORT, function (e) {
  if (e) throw e
  console.log("server is listening to port " + PORT);
})
