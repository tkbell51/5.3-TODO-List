const express = require('express');
const mustacheExpress = require('mustache-express');
const bodyParser = require('body-parser');
const models = require('./models');

const app = express();

app.use(express.static('public'));
app.engine('mustache', mustacheExpress());
app.set('view engine', 'mustache');
app.set('views', './views');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.post("/", function (req, res){
  console.log(req.body.todo);
  models.Todo.create({
    task: req.body.todo,
    assignee: req.body.assignee
  });
    res.redirect('/');

});


app.post("/", function (req, res) {
  models.Todo.findAll().then(function(todos){
   attributes: ["task", "assignee"];
   console.log(todos);
  res.redirect('/');
});
});

app.get("/", (req, res)=>{
     models.Todo.findAll().then(function(todos){
       res.render('index', {model: todos});
    });

});

app.post('/todo/:id/complete/', function(req, res){
  var id = Number(req.params.id);
  var selection = todos[id];
  complete.push(selection);

  res.redirect('/');
});
app.listen(3000);
